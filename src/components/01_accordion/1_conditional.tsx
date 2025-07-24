'use client';
import { memo, useMemo, useState, useCallback } from 'react';
import { accordionData } from './data';
import * as styles from './accordion.css';

// 🚀 통합된 조건부 렌더링 아코디언 컴포넌트
const ConditionalAccordion = memo(() => {
  // 🚀 메모이제이션된 데이터
  const memoizedData = useMemo(() => accordionData, []);

  // 🚀 상태 관리
  const [openItems, setOpenItems] = useState<string[]>(['1']); // 첫 번째 아이템 기본 열림

  // 🚀 토글 핸들러
  const toggleItem = useCallback((id: string) => {
    setOpenItems(
      prev => (prev.includes(id) ? prev.filter(item => item !== id) : [id]) // 단일 선택
    );
  }, []);

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        🎯 조건부 렌더링 (Conditional Rendering)
      </h2>
      <p>
        아이템이 열릴 때만 DOM에 렌더링됩니다. 메모리 효율적이지만 애니메이션이
        제한적입니다.
      </p>

      <div className={`${styles.themeClass}`}>
        <ul className={styles.container}>
          {memoizedData.map(item => {
            const isOpen = openItems.includes(item.id);

            return (
              <li key={item.id} className={styles.itemVariants.default}>
                <div
                  className={`${styles.tabBase} ${
                    styles.tabVariants[isOpen ? 'active' : 'default']
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.title}</span>
                  <span className={styles.toggleIcon}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>

                {/* 🎯 조건부 렌더링: 열린 아이템만 DOM에 존재 */}
                {isOpen && (
                  <div
                    className={`${styles.contentBase} ${styles.contentVariants.conditional}`}
                  >
                    {item.description}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

// 🚀 디스플레이 네임 설정
ConditionalAccordion.displayName = 'ConditionalAccordion';

export default ConditionalAccordion;
