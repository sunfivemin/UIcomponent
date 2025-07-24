import React, { memo, useState, useRef, useEffect } from 'react';
import { tabData } from './data';
import { TabItemProps, TabContentProps } from './types';
import * as styles from './tabMenu.css';
import { useTabMenu } from '@/hooks/useTabMenu';

const TabItem = memo<TabItemProps>(({ id, title, isActive, onClick }) => (
  <li className={styles.tabItem} data-tab-id={id}>
    <button
      className={styles.tabButtonVariants[isActive ? 'active' : 'inactive']}
      onClick={onClick}
      aria-selected={isActive}
      role="tab"
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
    >
      {title}
    </button>
  </li>
));

TabItem.displayName = 'TabItem';

const TabContent = memo<TabContentProps>(({ id, content, isActive }) => (
  <div
    className={styles.content}
    style={{
      display: isActive ? 'block' : 'none',
      padding: '24px',
      minHeight: '120px',
      width: '100%',
      backgroundColor: 'hsl(var(--card))',
      color: 'hsl(var(--foreground))',
      transition: 'background-color 0.3s, color 0.3s',
      boxSizing: 'border-box',
    }}
    role="tabpanel"
    aria-labelledby={`tab-${id}`}
    id={`panel-${id}`}
  >
    {content}
  </div>
));

TabContent.displayName = 'TabContent';

const TabMenuAnimated = () => {
  const [activeId, setActiveId] = useState('tab1'); // 명시적으로 첫 번째 탭 설정
  const indicatorRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // 초기 활성 탭 확인

  const isActive = (id: string) => id === activeId;

  const setActiveTab = (id: string) => {
    setActiveId(id);
  };

  // 초기화 완료 후에만 인디케이터 위치 계산
  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator || !isInitialized) return;

    // DOM이 완전히 렌더링된 후 실행
    const timeoutId = setTimeout(() => {
      // 현재 활성 탭의 인덱스 찾기
      const activeIndex = tabData.findIndex(tab => tab.id === activeId);

      if (activeIndex === -1) {
        return;
      }

      // 모든 탭 요소 가져오기
      const allTabs = document.querySelectorAll('[data-tab-id]');

      if (allTabs.length === 0) {
        return;
      }

      const activeTab = allTabs[activeIndex] as HTMLElement;

      if (!activeTab) {
        return;
      }

      const tabRect = activeTab.getBoundingClientRect();
      const container = activeTab.closest('ul');
      const containerRect = container?.getBoundingClientRect();

      if (containerRect) {
        const left = tabRect.left - containerRect.left;
        const width = tabRect.width;

        indicator.style.transform = `translateX(${left}px)`;
        indicator.style.width = `${width}px`;
      }
    }, 100); // 더 긴 지연시간

    return () => clearTimeout(timeoutId);
  }, [activeId]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>#3. 애니메이션 탭메뉴</h3>
      <div className={styles.tabMenu()}>
        <ul className={styles.animatedTabList} role="tablist">
          {tabData.map(tab => (
            <TabItem
              key={tab.id}
              id={tab.id}
              title={tab.title}
              isActive={isActive(tab.id)}
              onClick={() => handleTabClick(tab.id)}
            />
          ))}
          <div
            ref={indicatorRef}
            style={{
              position: 'absolute',
              bottom: 0,
              height: '3px',
              backgroundColor: '#374151', // 짙은 회색
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 1,
            }}
          />
        </ul>
        <div className={styles.content}>
          {tabData.map(tab => (
            <TabContent
              key={tab.id}
              id={tab.id}
              content={tab.description}
              isActive={isActive(tab.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenuAnimated;
