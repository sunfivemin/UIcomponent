'use client';

import React, { useState } from 'react';
import { accordionData } from './data';
import * as styles from './accordion.css';

const ConditionalAccordion = () => {
  const [openItem, setOpenItem] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        조건부 렌더링 방식 <sub>React의 기본 패턴</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>{'{isOpen && <Content />}'}</code> - 열린
          아이템만 DOM에 존재
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 메모리 효율적, SEO 친화적, 접근성 좋음
          </p>
          <p>
            <strong>❌ 단점:</strong> 애니메이션 구현 어려움, DOM 재생성으로
            인한 성능 이슈
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 간단한 토글, SEO가 중요한 콘텐츠,
            메모리 제약 환경
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

              {/* 🎯 조건부 렌더링의 핵심 */}
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

export default ConditionalAccordion;
