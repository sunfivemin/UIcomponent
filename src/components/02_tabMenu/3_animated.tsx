'use client';

import React, { useState } from 'react';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabMenuAnimated = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        애니메이션 탭메뉴 <sub>조건부 렌더링 + CSS 전환</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>{'{isActive && <TabContent />} + CSS transition'}</code> - 활성
          탭만 DOM에 존재하지만 CSS로 부드러운 전환 효과
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 메모리 효율적, 부드러운 전환 효과,
            SEO/접근성 좋음
          </p>
          <p>
            <strong>❌ 단점:</strong> 복잡한 애니메이션 구현 어려움, 탭 전환 시
            재마운트
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 간단한 전환 효과, SEO/접근성
            중시, 메모리 효율성
          </p>
        </div>
      </div>

      <div className={styles.tabMenu()}>
        <ul className={styles.tabList} role="tablist">
          {tabData.map(tab => (
            <li key={tab.id} className={styles.tabItem}>
              <button
                className={
                  styles.tabButtonVariants[
                    activeTab === tab.id ? 'active' : 'inactive'
                  ]
                }
                onClick={() => setActiveTab(tab.id)}
                aria-selected={activeTab === tab.id}
                role="tab"
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.content}>
          {/* 🎯 조건부 렌더링 + CSS 트랜지션 */}
          {tabData.map(tab => {
            const isActive = activeTab === tab.id;

            return (
              <div
                key={tab.id}
                className={
                  isActive
                    ? styles.animatedContentPanelActive
                    : styles.animatedContentPanel
                }
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                id={`panel-${tab.id}`}
                hidden={!isActive}
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

export default TabMenuAnimated;
