'use client';

import { accordionData } from './data';
import * as styles from './accordion.css';

const RadioAccordion = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        HTML Radio 방식 <sub>JavaScript 없이 순수 HTML/CSS</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>input[type="radio"] + CSS :checked</code>{' '}
          - JavaScript 없이 HTML과 CSS만으로 상태 관리
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> JavaScript 없음, 접근성 우수, 성능 최적화
          </p>
          <p>
            <strong>❌ 단점:</strong> 복잡한 로직 구현 불가, 상태 관리 제한적
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 단순한 토글, JavaScript 비활성화
            환경, 접근성 중시
          </p>
        </div>
      </div>

      <ul className={styles.container}>
        {accordionData.map(item => (
          <li key={item.id} className={styles.itemVariants.default}>
            <input
              type="radio"
              name="accordion-radio"
              id={`radio-${item.id}`}
              defaultChecked={item.title === 'CSS Display 방식'}
              className={styles.radioInput}
            />
            <label htmlFor={`radio-${item.id}`} className={styles.radioLabel}>
              <span>{item.title}</span>
              <span className={styles.toggleIcon}>
                {item.title === 'CSS Display 방식' ? '−' : '+'}
              </span>
            </label>
            <div className={styles.radioContent}>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioAccordion;
