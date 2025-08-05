'use client';

import React, { useState } from 'react';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabMenuMultiple = () => {
  const [activeIds, setActiveIds] = useState<string[]>([tabData[0].id]);

  // 탭 토글 함수
  const toggleTab = (id: string) => {
    setActiveIds(prev =>
      prev.includes(id) ? prev.filter(tabId => tabId !== id) : [...prev, id]
    );
  };

  // 모든 탭 선택/해제
  const selectAll = () => {
    setActiveIds(tabData.map(tab => tab.id));
  };

  const deselectAll = () => {
    setActiveIds([]);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        다중 선택 탭메뉴 <sub>조건부 렌더링 + 배열 상태 관리</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>{'useState(배열) + 조건부 렌더링'}</code> - 여러 탭을 동시에
          선택하고 해당 콘텐츠들을 조건부로 렌더링
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 다중 선택 가능, 유연한 상태 관리, 사용자
            경험 향상
          </p>
          <p>
            <strong>❌ 단점:</strong> 복잡한 상태 로직, 성능 고려 필요
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 여러 정보를 동시에 비교하거나
            보고 싶을 때, 대시보드 형태의 UI
          </p>
        </div>
      </div>

      <div className={styles.tabMenu()}>
        {/* 컨트롤 버튼들 */}
        <div className={styles.controlContainer}>
          <button onClick={selectAll} className={styles.controlButton}>
            모두 선택
          </button>
          <button onClick={deselectAll} className={styles.controlButton}>
            모두 해제
          </button>
          <span className={styles.selectedCount}>
            선택된 탭: {activeIds.length}개
          </span>
        </div>

        {/* 탭 버튼들 - 조건부 렌더링으로 활성 상태 표시 */}
        <ul className={styles.tabList} role="tablist">
          {tabData.map(tab => {
            const isActive = activeIds.includes(tab.id);
            return (
              <li key={tab.id} className={styles.tabItem}>
                <button
                  className={
                    styles.tabButtonVariants[isActive ? 'active' : 'inactive']
                  }
                  onClick={() => toggleTab(tab.id)}
                  aria-selected={isActive}
                  role="tab"
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                >
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>

        {/* 콘텐츠 영역 - 조건부 렌더링으로 선택된 탭들의 콘텐츠 표시 */}
        <div className={styles.content}>
          {activeIds.length > 0 ? (
            <div className={styles.multipleContentContainer}>
              {activeIds.map(activeId => {
                const tab = tabData.find(t => t.id === activeId);
                if (!tab) return null;

                return (
                  <div key={activeId} className={styles.multipleContentItem}>
                    <h4 className={styles.multipleContentTitle}>{tab.title}</h4>
                    <div className={styles.multipleContentDescription}>
                      {tab.description}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.emptyState}>
              선택된 탭이 없습니다. 탭을 선택해보세요!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabMenuMultiple;
