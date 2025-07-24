import React, { memo, useEffect, useState } from 'react';
import { tabData } from './data';
import { TabItemProps, TabContentProps } from './types';
import { useMultiTabMenu } from '@/hooks/useTabMenu';
import * as styles from './tabMenu.css';

const TabItem = memo<{
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}>(({ id, title, isActive, onClick }) => (
  <li className={styles.tabItem}>
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
    className={isActive ? styles.contentPanelActive : styles.contentPanel}
    role="tabpanel"
    aria-labelledby={`tab-${id}`}
    id={`panel-${id}`}
    hidden={!isActive}
  >
    {content}
  </div>
));

TabContent.displayName = 'TabContent';

const TabMenuMultiple = () => {
  const { activeIds, toggleTab, isActive, selectAll, deselectAll } =
    useMultiTabMenu({
      defaultActiveIds: [tabData[0].id],
    });
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // 다크테마 감지
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDarkTheme(theme === 'dark');
    };

    checkTheme();

    // 테마 변경 감지
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id: string) => {
    toggleTab(id);
  };

  const handleSelectAll = () => {
    selectAll(tabData.map(tab => tab.id));
  };

  const handleDeselectAll = () => {
    deselectAll();
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>#7. 다중 선택 탭메뉴</h3>
      <div className={styles.tabMenu()}>
        {/* 컨트롤 버튼들 */}
        <div
          style={{
            padding: '12px 16px',
            borderBottom: '1px solid hsl(var(--border))',
            display: 'flex',
            gap: '8px',
            backgroundColor: 'hsl(var(--muted))',
          }}
        >
          <button
            onClick={handleSelectAll}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              border: '1px solid hsl(var(--border))',
              borderRadius: '4px',
              backgroundColor: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))',
              cursor: 'pointer',
            }}
          >
            모두 선택
          </button>
          <button
            onClick={handleDeselectAll}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              border: '1px solid hsl(var(--border))',
              borderRadius: '4px',
              backgroundColor: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))',
              cursor: 'pointer',
            }}
          >
            모두 해제
          </button>
          <span
            style={{
              fontSize: '12px',
              color: 'hsl(var(--muted-foreground))',
              marginLeft: 'auto',
            }}
          >
            선택된 탭: {activeIds.length}개
          </span>
        </div>

        <ul className={styles.tabList} role="tablist">
          {tabData.map(tab => (
            <TabItem
              key={tab.id}
              id={tab.id}
              title={tab.title}
              isActive={isActive(tab.id)}
              onClick={() => handleTabClick(tab.id)}
            />
          ))}
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

export default TabMenuMultiple;
