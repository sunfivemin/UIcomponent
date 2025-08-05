'use client';

import React, { useState } from 'react';
import { accordionData } from './data';
import * as styles from './accordion.css';

const AnimatedAccordion = () => {
  const [openItem, setOpenItem] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        CSS 애니메이션 방식 <sub>부드러운 전환 효과</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>transition + transform</code> - DOM은
          유지하면서 부드러운 애니메이션
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 부드러운 UX, GPU 가속, 성능 최적화
          </p>
          <p>
            <strong>❌ 단점:</strong> 구현 복잡, 높이 애니메이션 제한, 브라우저
            호환성
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 고급 UX가 필요한 경우, 모던
            브라우저 타겟
          </p>
        </div>
      </div>

      <ul className={styles.container}>
        {accordionData.map(item => {
          const isOpen = openItem === item.id;

          return (
            <li key={item.id} className={styles.itemVariants.animated}>
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

              {/* 🎯 CSS 애니메이션 제어의 핵심 */}
              <div
                className={
                  isOpen
                    ? styles.contentVariants.animatedOpen
                    : styles.contentVariants.animated
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

export default AnimatedAccordion;
