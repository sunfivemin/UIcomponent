'use client';

import { useState } from 'react';
import { accordionData } from './data';
import * as styles from './accordion.css';

const MultipleAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>(['1']);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        다중 선택 아코디언 <sub>여러 개 동시 열기 가능</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>openItems.includes(id)</code> - 배열로
          여러 아이템의 열림 상태를 관리
        </p>
        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            color: 'hsl(var(--muted-foreground))',
          }}
        >
          <p>
            <strong>✅ 장점:</strong> 유연한 사용자 경험, 복잡한 상태 관리 가능
          </p>
          <p>
            <strong>❌ 단점:</strong> 구현 복잡성, 상태 관리 오버헤드
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> FAQ, 설정 페이지, 다중 선택이
            필요한 인터페이스
          </p>
        </div>
      </div>

      <ul className={styles.container}>
        {accordionData.map(item => {
          const isOpen = openItems.includes(item.id);

          return (
            <li key={item.id} className={styles.itemVariants.default}>
              <button
                className={`${styles.tabBase} ${
                  isOpen ? styles.tabVariants.active : ''
                }`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className={styles.contentVariants.conditional}>
                  <p>{item.description}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MultipleAccordion;
