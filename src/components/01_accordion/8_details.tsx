'use client';

import { accordionData } from './data';
import * as styles from './accordion.css';

const DetailsAccordion = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        HTML Details 방식 <sub>JavaScript 없이 순수 HTML</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>&lt;details&gt; & &lt;summary&gt;</code>{' '}
          - 브라우저 기본 기능으로 JavaScript 없이 동작
        </p>
        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            color: 'hsl(var(--muted-foreground))',
          }}
        >
          <p>
            <strong>✅ 장점:</strong> JavaScript 없음, 접근성 최고, 브라우저
            기본 지원
          </p>
          <p>
            <strong>❌ 단점:</strong> 스타일링 제한, 복잡한 로직 구현 불가,
            브라우저별 차이
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 단순한 토글, 접근성 우선,
            JavaScript 비활성화 환경
          </p>
        </div>
      </div>

      <div className={styles.detailsContainer}>
        {accordionData.map((item, index) => (
          <details
            key={item.id}
            className={styles.detailsItem}
            open={index === 0}
          >
            <summary className={styles.detailsSummary}>{item.title}</summary>
            <div className={styles.detailsContent}>
              <p>{item.description}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default DetailsAccordion;
