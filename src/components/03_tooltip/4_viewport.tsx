import { useRef } from 'react';
import data from './data';
import * as styles from './tooltip.css';
import { useSmartTooltip } from './hooks/useSmartTooltip';

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { style, handleToggle } = useSmartTooltip(detailsRef, tooltipRef, {
    minAbovePx: 300,
    marginPx: 12,
  });

  return (
    <details
      className={styles.details}
      data-tooltip={id}
      ref={detailsRef}
      onToggle={handleToggle}
    >
      <summary className={styles.summaryTrigger} data-tooltip-summary>
        {title}
        <span className={styles.anchor}>
          <span className={styles.dot}>!</span>
          <div
            className={styles.tooltip}
            data-tooltip-content
            ref={tooltipRef}
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              color: 'hsl(var(--foreground))',
              fontSize: '14px',
              lineHeight: '1.5',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              ...style,
            }}
          >
            {description}
          </div>
        </span>
      </summary>
    </details>
  );
};

const Tooltip4 = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        뷰포트 기반 위치 조정 <sub>스크롤에 반응하여 위/아래 표시</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>useSmartTooltip 훅</code> - 재사용 가능한
          스마트 툴팁 로직
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 로직 재사용, 컴포넌트 간소화, 정책
            파라미터화
          </p>
          <p>
            <strong>❌ 단점:</strong> 훅 의존성, 초기 학습 비용
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 여러 툴팁이 필요한 페이지, 일관된
            UX
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {data.map(d => (
          <Tooltip {...d} key={d.id} />
        ))}
      </div>
    </div>
  );
};

export default Tooltip4;
