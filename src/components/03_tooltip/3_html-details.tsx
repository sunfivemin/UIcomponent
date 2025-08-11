import { useEffect } from 'react';
import data from './data';
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
  return (
    <div className={styles.itemContainer}>
      <details className={styles.details} data-tooltip={id}>
        <summary className={styles.summaryTrigger} data-tooltip-summary>
          {title}
          <span className={styles.anchor}>
            <span className={styles.dot}>!</span>
            <div className={styles.tooltip} onClick={e => e.stopPropagation()}>
              {description}
            </div>
          </span>
        </summary>
        {/* summary 내부 앵커 기준으로 배치되므로 별도 바깥 툴팁은 제거 */}
      </details>
    </div>
  );
};

const Tooltip3 = () => {
  useEffect(() => {
    const closeAllTooltip = (e: Event) => {
      const target = e.target as HTMLElement;
      const isSummary = !!target.dataset.tooltipSummary;
      document.querySelectorAll('[data-tooltip]').forEach(elem => {
        if (isSummary || elem !== target.parentElement)
          elem.removeAttribute('open');
      });
    };
    window.addEventListener('click', closeAllTooltip);
    return () => {
      window.removeEventListener('click', closeAllTooltip);
    };
  }, []);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        HTML Details 태그 방식 <sub>네이티브 HTML 사용</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>{'<details><summary>'}</code> - HTML
          네이티브 접근성 기능 활용
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 접근성 우수, 키보드 네비게이션 지원, SEO
            친화적
          </p>
          <p>
            <strong>❌ 단점:</strong> 스타일링 제약, 복잡한 애니메이션 어려움
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 접근성이 중요한 콘텐츠, 간단한
            토글 기능
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

export default Tooltip3;
