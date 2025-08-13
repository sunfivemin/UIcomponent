import React, { useEffect } from 'react';
import data from './data';
import { SingleOpenProvider, useSingleOpen } from './context/singleOpenContext';
import * as styles from './tooltip.css';

// Props 인터페이스 분리
interface SingleOpenTooltipProps {
  id: string;
  title: string;
  description: string;
}

// Context 기반 단일 툴팁 관리 컴포넌트
const SingleOpenTooltip = ({ id, title, description }: SingleOpenTooltipProps) => {
  const { openTooltipId, setOpenTooltipId } = useSingleOpen();
  const isOpen = openTooltipId === id;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenTooltipId(isOpen ? null : id);
  };

  useEffect(() => {
    const close = () => setOpenTooltipId(null);
    if (isOpen) {
      window.addEventListener('click', close);
    }
    return () => window.removeEventListener('click', close);
  }, [isOpen, setOpenTooltipId]);

  return (
    <div className={styles.itemContainer}>
      <button className={styles.trigger} onClick={handleClick}>
        {title}
        <span className={styles.anchor}>
          <span className={styles.dot}>!</span>
          {/* 컨텍스트 기반: 한 번에 하나만 열림 */}
          {isOpen && (
            <div className={styles.tooltip} onClick={e => e.stopPropagation()}>
              {description}
            </div>
          )}
        </span>
      </button>
    </div>
  );
};

const Tooltip2 = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        단일 열림 방식 <sub>Context로 하나만 열리도록 관리</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>Context + 단일 상태 관리</code> - 전역
          상태로 하나씩만 열리도록 제어
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 하나씩만 열림, 현재 열려있는 툴팁의 ID와
            같은 상태를 공유, zustand 사용하면 상태관리 간편
          </p>
          <p>
            <strong>❌ 단점:</strong> Context 오버헤드, 복잡한 상태 로직
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 여러 툴팁이 있는 페이지, 사용자
            경험 일관성 중요
          </p>
        </div>
      </div>

      <SingleOpenProvider>
        <div className={styles.container}>
          {data.map(({ id, title, description }) => (
            <SingleOpenTooltip
              key={id}
              id={id}
              title={title}
              description={description}
            />
          ))}
        </div>
      </SingleOpenProvider>
    </div>
  );
};

export default Tooltip2;
