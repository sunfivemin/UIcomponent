import { RefObject, useCallback, useLayoutEffect, useState } from 'react';
import { useViewportRect } from '../context/viewportContext';

type PositionKey = 'left' | 'right' | 'top' | 'bottom';
type Position = Partial<Record<PositionKey, string | number>>;
type Style = React.CSSProperties;

type Options = {
  spacingPx?: number; // 트리거와 툴팁 사이 간격
  marginPx?: number; // 뷰포트 경계 마진
};

const DEFAULT_SPACING_PX = 8;
const DEFAULT_MARGIN_PX = 16;

export const useStyleInView = (
  wrapperRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  initialPosition: Position,
  options: Options = {}
) => {
  const viewportRect = useViewportRect();
  const [style, setStyle] = useState<Style>({});
  const { spacingPx = DEFAULT_SPACING_PX, marginPx = DEFAULT_MARGIN_PX } =
    options;

  const calculatePosition = useCallback(() => {
    if (!wrapperRef.current || !targetRef.current) return {} as Style;

    const wrapper = wrapperRef.current!.getBoundingClientRect();
    const target = targetRef.current!;

    // 임시로 보이지 않게 하고 크기 측정
    target.style.visibility = 'hidden';
    target.style.display = 'block';
    const targetRect = target.getBoundingClientRect();
    target.style.visibility = '';
    target.style.display = '';

    const viewportWidth = viewportRect.width || window.innerWidth;
    const viewportHeight = viewportRect.height || window.innerHeight;

    // 툴팁 크기
    const tooltipWidth = targetRect.width || 300;
    const tooltipHeight = targetRect.height || 150;

    let newStyle: Style = {
      position: 'absolute',
      zIndex: 9999,
    };

    // 1. 세로 위치 결정 (아래/위)
    const spaceBelow = viewportHeight - wrapper.bottom - marginPx;
    const spaceAbove = wrapper.top - marginPx;

    if (spaceBelow >= tooltipHeight + spacingPx) {
      // 아래쪽 공간 충분
      newStyle.top = `calc(100% + ${spacingPx}px)`;
    } else if (spaceAbove >= tooltipHeight + spacingPx) {
      // 위쪽에 표시
      newStyle.bottom = `calc(100% + ${spacingPx}px)`;
    } else {
      // 옆으로 표시
      const spaceRight = viewportWidth - wrapper.right - marginPx;
      const spaceLeft = wrapper.left - marginPx;

      if (spaceRight >= tooltipWidth + spacingPx) {
        // 오른쪽에 표시
        newStyle.left = `calc(100% + ${spacingPx}px)`;
        newStyle.top = 0;
      } else if (spaceLeft >= tooltipWidth + spacingPx) {
        // 왼쪽에 표시
        newStyle.right = `calc(100% + ${spacingPx}px)`;
        newStyle.top = 0;
      } else {
        // 기본: 아래쪽 (스크롤 허용)
        newStyle.top = `calc(100% + ${spacingPx}px)`;
      }
    }

    // 2. 가로 위치 조정 (좌우 경계 체크)
    if (!newStyle.left && !newStyle.right) {
      const tooltipLeft = wrapper.left;
      const tooltipRight = tooltipLeft + tooltipWidth;

      if (tooltipRight > viewportWidth - marginPx) {
        // 오른쪽 경계를 넘음 - 오른쪽 정렬
        newStyle.right = 0;
        newStyle.left = 'auto';
      } else if (tooltipLeft < marginPx) {
        // 왼쪽 경계를 넘음 - 왼쪽 정렬
        newStyle.left = 0;
        newStyle.right = 'auto';
      } else {
        // 기본: 왼쪽 정렬
        newStyle.left = initialPosition.left || 0;
        newStyle.right = 'auto';
      }
    }

    // 3. 세로 위치 미세 조정 (상하 경계 체크)
    if (newStyle.top === 0 || newStyle.top === '0') {
      const tooltipTop = wrapper.top;
      const tooltipBottom = tooltipTop + tooltipHeight;

      if (tooltipBottom > viewportHeight - marginPx) {
        // 아래쪽 경계를 넘음
        newStyle.bottom = `${marginPx}px`;
        newStyle.top = 'auto';
      } else if (tooltipTop < marginPx) {
        // 위쪽 경계를 넘음
        newStyle.top = `${marginPx}px`;
        newStyle.bottom = 'auto';
      }
    }

    return newStyle;
  }, [
    wrapperRef,
    targetRef,
    viewportRect,
    spacingPx,
    marginPx,
    initialPosition,
  ]);

  const handleUpdate = useCallback(() => {
    const updatedStyle = calculatePosition();
    setStyle(updatedStyle);
  }, [calculatePosition]);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !targetRef.current) return;

    setStyle(calculatePosition());

    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [calculatePosition, handleUpdate, wrapperRef, targetRef]);

  return style;
};

export default useStyleInView;
