'use client';

import React, { useState } from 'react';
import { accordionData } from './data';
import { contentVariants } from './accordion.css';
import * as styles from './accordion.css';

const SearchableAccordion = () => {
  const [openItem, setOpenItem] = useState<string | null>('1');

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        검색 가능한 아코디언 <sub>브라우저 검색과 연동</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>hidden="until-found"</code> - 브라우저
          검색으로 숨겨진 콘텐츠도 찾을 수 있음
        </p>
        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            color: 'hsl(var(--muted-foreground))',
          }}
        >
          <p>
            <strong>✅ 장점:</strong> 검색 친화적, 사용자 경험 향상, SEO 최적화
          </p>
          <p>
            <strong>❌ 단점:</strong> 브라우저 호환성 제한, 구현 복잡성
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 긴 문서, FAQ 페이지, 검색이
            중요한 콘텐츠
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

              {/* 🎯 검색 가능한 콘텐츠의 핵심 */}
              <div
                className={contentVariants.conditional}
                hidden={isOpen ? undefined : ('until-found' as any)}
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

export default SearchableAccordion;
