import React, { memo, useState } from 'react';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabItem = memo<{
  tab: (typeof tabData)[0];
  index: number;
  activeId: string;
  onTabChange: (id: string) => void;
}>(({ tab, index, activeId, onTabChange }) => (
  <li className={styles.tabItem}>
    <input
      type="radio"
      className={styles.radioInput}
      name="tabmenu"
      id={tab.id}
      checked={tab.id === activeId}
      onChange={() => onTabChange(tab.id)}
    />
    <label
      className={styles.radioLabel}
      htmlFor={tab.id}
      role="tab"
      aria-selected={tab.id === activeId}
      aria-controls={`panel-${tab.id}`}
    >
      {tab.title}
    </label>
  </li>
));

TabItem.displayName = 'TabItem';

const TabMenuRadio = () => {
  const [activeId, setActiveId] = useState(tabData[2].id); // CSS 애니메이션 탭을 기본 활성화

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>#5. 라디오 버튼 방식</h3>
      <div className={styles.tabMenu()}>
        <ul className={styles.tabList} role="tablist">
          {tabData.map((tab, index) => (
            <TabItem
              key={tab.id}
              tab={tab}
              index={index}
              activeId={activeId}
              onTabChange={setActiveId}
            />
          ))}
        </ul>
        {/* 콘텐츠 영역을 별도로 분리 */}
        <div className={styles.content}>
          {tabData.map((tab, index) => (
            <div
              key={tab.id}
              className={styles.radioContent}
              style={{
                display: tab.id === activeId ? 'block' : 'none',
              }}
              role="tabpanel"
              aria-labelledby={tab.id}
              id={`panel-${tab.id}`}
            >
              {tab.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenuRadio;
