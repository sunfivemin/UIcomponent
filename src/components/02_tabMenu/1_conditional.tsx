'use client';

import React, { useState } from 'react';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabMenuConditional = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        조건부 렌더링 방식 <sub>React의 기본 패턴</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>{'{isActive && <TabContent />}'}</code> -
          활성 탭만 DOM에 존재
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 메모리 효율적, SEO 친화적, 접근성 좋음
          </p>
          <p>
            <strong>❌ 단점:</strong> 애니메이션 구현 어려움, 탭 전환 시
            컴포넌트 재마운트
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 간단한 탭, SEO가 중요한 콘텐츠,
            메모리 제약 환경
          </p>
        </div>
      </div>

      <div className={styles.tabMenu()}>
        <ul className={styles.tabList} role="tablist">
          {tabData.map(tab => {
            const isActive = activeTab === tab.id;

            return (
              <li key={tab.id} className={styles.tabItem}>
                <button
                  className={
                    styles.tabButtonVariants[isActive ? 'active' : 'inactive']
                  }
                  onClick={() => handleTabClick(tab.id)}
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

        <div className={styles.content}>
          {/* 🎯 조건부 렌더링의 핵심 - 활성 탭만 렌더링 */}
          {tabData.map(tab => {
            const isActive = activeTab === tab.id;

            return (
              isActive && (
                <div
                  key={tab.id}
                  className={styles.contentPanelActive}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  id={`panel-${tab.id}`}
                >
                  {tab.description}
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabMenuConditional;
