'use client';

import React, { useState } from 'react';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabMenuSearchable = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  // 검색어에 따라 탭 필터링
  const filteredTabs = tabData.filter(
    tab =>
      tab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tab.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        검색 가능한 탭메뉴 <sub>조건부 렌더링 + 검색 필터링</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>{'useState + filter() + 조건부 렌더링'}</code> - 검색어에 따라
          탭을 필터링하고 조건부로 렌더링
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 동적 필터링, 사용자 경험 향상, 실시간 검색
          </p>
          <p>
            <strong>❌ 단점:</strong> 복잡한 상태 관리, 성능 고려 필요
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 많은 탭이 있는 경우, 사용자가
            원하는 내용을 빠르게 찾고 싶을 때
          </p>
        </div>
      </div>

      <div className={styles.tabMenu()}>
        {/* 검색 입력창 */}
        <div className={styles.searchContainer}>
          <input
            type="search"
            placeholder="탭 내용 검색..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* 탭 버튼들 - 조건부 렌더링으로 필터링된 탭만 표시 */}
        <ul className={styles.tabList} role="tablist">
          {filteredTabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id} className={styles.tabItem}>
                <button
                  className={
                    styles.tabButtonVariants[isActive ? 'active' : 'inactive']
                  }
                  onClick={() => setActiveTab(tab.id)}
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

        {/* 콘텐츠 영역 - 조건부 렌더링으로 활성 탭만 표시 */}
        <div className={styles.content}>
          {filteredTabs.map(tab => {
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

export default TabMenuSearchable;
