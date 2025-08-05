'use client';

import React, { useState } from 'react';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabMenuDisplay = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        CSS Display 방식 <sub>모든 탭이 DOM에 존재</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>{'className={isActive ? "active" : "inactive"}'}</code> - 모든
          탭이 DOM에 존재하지만 CSS로 표시/숨김
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 애니메이션 구현 쉬움, 탭 전환 빠름, 상태
            유지
          </p>
          <p>
            <strong>❌ 단점:</strong> 메모리 사용량 높음, SEO 불리, 모든 콘텐츠
            로딩
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 부드러운 전환 효과, 복잡한 탭,
            상태 유지 필요
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
          {/* 🎯 CSS Display 방식의 핵심 - 모든 탭이 DOM에 존재 */}
          {tabData.map(tab => {
            const isActive = activeTab === tab.id;

            return (
              <div
                key={tab.id}
                className={
                  isActive ? styles.contentPanelActive : styles.contentPanel
                }
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                id={`panel-${tab.id}`}
              >
                {tab.description}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabMenuDisplay;
