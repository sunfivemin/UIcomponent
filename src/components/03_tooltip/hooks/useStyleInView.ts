// hooks/useStyleInView.ts
import { RefObject, useLayoutEffect, useState } from 'react';
import { useViewportRect } from '../context/viewportContext';

type PositionKey = 'left' | 'right' | 'top' | 'bottom';
type Position = Partial<Record<PositionKey, string | number>>;
type Style = React.CSSProperties;

export const useStyleInView = (
  wrapperRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  initialPosition: Position
) => {
  const viewportRect = useViewportRect();
  const [style, setStyle] = useState<Style>({});

  useLayoutEffect(() => {
    if (!wrapperRef.current || !targetRef.current) return;

    const calculatePosition = () => {
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
      const spacing = 8;
      const margin = 16;

      // 툴팁 크기
      const tooltipWidth = targetRect.width || 300;
      const tooltipHeight = targetRect.height || 150;

      let newStyle: Style = {
        position: 'absolute',
        zIndex: 9999,
      };

      // 1. 세로 위치 결정 (아래/위)
      const spaceBelow = viewportHeight - wrapper.bottom - margin;
      const spaceAbove = wrapper.top - margin;

      if (spaceBelow >= tooltipHeight + spacing) {
        // 아래쪽 공간 충분
        newStyle.top = `calc(100% + ${spacing}px)`;
      } else if (spaceAbove >= tooltipHeight + spacing) {
        // 위쪽에 표시
        newStyle.bottom = `calc(100% + ${spacing}px)`;
      } else {
        // 옆으로 표시
        const spaceRight = viewportWidth - wrapper.right - margin;
        const spaceLeft = wrapper.left - margin;

        if (spaceRight >= tooltipWidth + spacing) {
          // 오른쪽에 표시
          newStyle.left = `calc(100% + ${spacing}px)`;
          newStyle.top = 0;
        } else if (spaceLeft >= tooltipWidth + spacing) {
          // 왼쪽에 표시
          newStyle.right = `calc(100% + ${spacing}px)`;
          newStyle.top = 0;
        } else {
          // 기본: 아래쪽 (스크롤 허용)
          newStyle.top = `calc(100% + ${spacing}px)`;
        }
      }

      // 2. 가로 위치 조정 (좌우 경계 체크)
      if (!newStyle.left && !newStyle.right) {
        const tooltipLeft = wrapper.left;
        const tooltipRight = tooltipLeft + tooltipWidth;

        if (tooltipRight > viewportWidth - margin) {
          // 오른쪽 경계를 넘음 - 오른쪽 정렬
          newStyle.right = 0;
          newStyle.left = 'auto';
        } else if (tooltipLeft < margin) {
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

        if (tooltipBottom > viewportHeight - margin) {
          // 아래쪽 경계를 넘음
          newStyle.bottom = `${margin}px`;
          newStyle.top = 'auto';
        } else if (tooltipTop < margin) {
          // 위쪽 경계를 넘음
          newStyle.top = `${margin}px`;
          newStyle.bottom = 'auto';
        }
      }

      return newStyle;
    };

    const newStyle = calculatePosition();
    setStyle(newStyle);

    // 스크롤과 리사이즈 이벤트 처리
    const handleUpdate = () => {
      const updatedStyle = calculatePosition();
      setStyle(updatedStyle);
    };

    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [viewportRect, wrapperRef, targetRef, initialPosition]);

  return style;
};

export default useStyleInView;
