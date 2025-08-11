import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import data from './data';
import ViewportContextProvider from './context/viewportContext';
import { SingleOpenProvider, useSingleOpen } from './context/singleOpenContext';
import * as styles from './tooltip.css';

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const { openTooltipId, setOpenTooltipId } = useSingleOpen();
  const isOpen = openTooltipId === id;

  const [tooltipPosition, setTooltipPosition] = useState<{
    top: string;
    left: string;
  }>({ top: '0px', left: '0px' });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setOpenTooltipId(isOpen ? null : id);
  };

  // Portal 위치 계산 - 패턴 기반 위치 결정
  useEffect(() => {
    if (!isOpen || !buttonRef.current) return;

    const calculatePosition = () => {
      const buttonRect = buttonRef.current!.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      // 추정 크기(뷰 계산 전 기본값)
      const ESTIMATED_HEIGHT_PX = 200;
      const ESTIMATED_WIDTH_PX = 300;

      // 절대 위치 계산 (스크롤 고려)
      const absoluteTop = buttonRect.top + scrollY;
      const absoluteLeft = buttonRect.left + scrollX;

      // ID 기반 패턴으로 위치 결정
      const idNum = parseInt(id.replace(/\D/g, '')) || 0;
      let top: number;
      let left: number;

      // 패턴 1: 짝수 ID는 아래쪽, 홀수 ID는 위쪽
      if (idNum % 2 === 0) {
        // 아래쪽 배치
        const GAP_PX = 10;
        top = absoluteTop + buttonRect.height + GAP_PX;
      } else {
        // 위쪽 배치
        const GAP_PX = 10;
        top = absoluteTop - ESTIMATED_HEIGHT_PX - GAP_PX;
      }

      // 패턴 2: 3의 배수는 오른쪽, 5의 배수는 왼쪽, 나머지는 중앙
      if (idNum % 3 === 0) {
        // 오른쪽 배치
        const GAP_PX = 10;
        left = absoluteLeft + buttonRect.width + GAP_PX;
      } else if (idNum % 5 === 0) {
        // 왼쪽 배치
        const GAP_PX = 10;
        left = absoluteLeft - ESTIMATED_WIDTH_PX - GAP_PX;
      } else {
        // 중앙 배치
        left = absoluteLeft + buttonRect.width / 2 - ESTIMATED_WIDTH_PX / 2;
      }

      // 뷰포트 경계 검사 및 조정
      // 위쪽 경계
      if (top < scrollY + 20) {
        top = scrollY + 20;
      }
      // 아래쪽 경계
      if (top + ESTIMATED_HEIGHT_PX > scrollY + viewportHeight - 20) {
        top = scrollY + viewportHeight - ESTIMATED_HEIGHT_PX - 20;
      }
      // 왼쪽 경계
      if (left < scrollX + 20) {
        left = scrollX + 20;
      }
      // 오른쪽 경계
      if (left + ESTIMATED_WIDTH_PX > scrollX + viewportWidth - 20) {
        left = scrollX + viewportWidth - ESTIMATED_WIDTH_PX - 20;
      }

      return {
        top: `${top}px`,
        left: `${left}px`,
      };
    };

    const pos = calculatePosition();
    setTooltipPosition(pos);
  }, [isOpen, id]);

  return (
    <div className={styles.itemContainer}>
      <button
        ref={buttonRef}
        className={styles.trigger}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        {title}
        <span className={styles.anchor}>
          <span className={styles.dot}>!</span>
        </span>
      </button>
      {/* Portal을 사용하여 body에 직접 렌더링 */}
      {isOpen &&
        createPortal(
          <div
            className={styles.portalTooltip}
            style={{
              position: 'absolute',
              top: tooltipPosition.top,
              left: tooltipPosition.left,
            }}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <div className={styles.portalInner}>
              <strong className={styles.portalTitle}>🎯 Portal 툴팁:</strong>
              <br />
              <div className={styles.portalBody}>{description}</div>
              <button
                onClick={() => setOpenTooltipId(null)}
                className={styles.portalCloseButton}
              >
                닫기
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

const Tooltip6 = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        Portal 방식 <sub>body에 직접 렌더링</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>createPortal</code> - DOM 계층 구조
          독립적 렌더링
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 부모 요소 제약 없음, 어디서든 완벽 표시,
            실무 표준
          </p>
          <p>
            <strong>❌ 단점:</strong> 복잡한 위치 계산, 메모리 관리 주의, 접근성
            고려
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 모달, 툴팁, 팝오버 등 실무
            프로젝트
          </p>
        </div>
      </div>

      <SingleOpenProvider>
        <ViewportContextProvider>
          <div className={styles.container}>
            {data.map(d => (
              <Tooltip {...d} key={d.id} />
            ))}
          </div>
        </ViewportContextProvider>
      </SingleOpenProvider>
    </div>
  );
};

export default Tooltip6;
