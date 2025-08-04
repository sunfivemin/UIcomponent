'use client';

import React, { useState } from 'react';
import { accordionData } from './data';
import * as styles from './accordion.css';

const DisplayAccordion = () => {
  const [openItem, setOpenItem] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        CSS Display 방식 <sub>DOM은 유지, CSS로만 제어</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>display: none/block</code> - DOM은 항상
          존재하지만 CSS로 숨김/보임
        </p>
        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            color: 'hsl(var(--muted-foreground))',
          }}
        >
          <p>
            <strong>✅ 장점:</strong> 구현 간단, 빠른 전환, DOM 구조 안정적
          </p>
          <p>
            <strong>❌ 단점:</strong> 애니메이션 불가, 메모리 사용량 증가,
            접근성 이슈
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 빠른 토글이 필요한 경우, 복잡한
            DOM 구조 유지 필요
          </p>
        </div>
      </div>

      <ul className={styles.container}>
        {accordionData.map(item => {
          const isOpen = openItem === item.id;

          return (
            <li key={item.id} className={styles.itemVariants.default}>
              <button
                className={`${styles.tabBase} ${
                  styles.tabVariants[isOpen ? 'active' : 'default']
                }`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
              </button>

              {/* 🎯 CSS Display 제어의 핵심 */}
              <div
                className={
                  isOpen
                    ? styles.contentVariants.visible
                    : styles.contentVariants.hidden
                }
              >
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayAccordion;
