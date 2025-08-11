import { useState, useEffect } from 'react';
import data from './data';
import * as styles from './tooltip.css';

// 조건부 렌더링에 특화된 간결한 툴팁 컴포넌트
interface ConditionalTooltipProps {
  id: string;
  title: string;
  description: string;
}

const ConditionalTooltip = ({
  id,
  title,
  description,
}: ConditionalTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const close = () => setIsVisible(false);
    if (isVisible) {
      window.addEventListener('click', close);
    }
    return () => {
      window.removeEventListener('click', close);
    };
  }, [isVisible]);

  return (
    <div className={styles.itemContainer}>
      <button className={styles.trigger} onClick={handleClick}>
        {title}
        <span className={styles.anchor}>
          <span className={styles.dot}>!</span>
          {/* 앵커 기준 하단 중앙 */}
          {isVisible && (
            <div className={styles.tooltip} onClick={e => e.stopPropagation()}>
              {description}
            </div>
          )}
        </span>
      </button>
    </div>
  );
};

const Tooltip1 = ({ tooltipData = data }: { tooltipData?: typeof data }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        조건부 렌더링 방식 <sub>외부 클릭시 닫히도록 처리</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>{'{isVisible && <Tooltip />}'}</code> -
          상태에 따른 조건부 렌더링
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 코드 간결, 직관적, 메모리 효율적, React
            패턴에 최적화
          </p>
          <p>
            <strong>❌ 단점:</strong> 애니메이션 제한, 복잡한 상호작용 어려움
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 간단한 툴팁, 빠른 구현, 성능이
            중요한 경우
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {tooltipData.length > 0 ? (
          tooltipData.map(({ id, title, description }) => (
            <ConditionalTooltip
              key={id}
              id={id}
              title={title}
              description={description}
            />
          ))
        ) : (
          <p>표시할 툴팁이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Tooltip1;
