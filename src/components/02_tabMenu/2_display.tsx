import React, { memo } from 'react';
import { tabData } from './data';
import { TabItemProps, TabContentProps } from './types';
import { useTabMenu } from '@/hooks/useTabMenu';
import * as styles from './tabMenu.css';

const TabItem = memo<TabItemProps>(({ id, title, isActive, onClick }) => (
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
  >
    {content}
  </div>
));

TabContent.displayName = 'TabContent';

const TabMenuDisplay = () => {
  const { setActiveTab, isActive } = useTabMenu({
    defaultActiveId: tabData[0].id,
  });

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>#2. CSS Display 방식</h3>
      <div className={styles.tabMenu()}>
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

export default TabMenuDisplay;
