import React, { memo, useState, useCallback } from "react";
import * as styles from "./tabMenu.css";

interface TabData {
  id: string;
  title: string;
  description: string;
}

interface TabMenuProps {
  data: TabData[];
  defaultActiveId?: string;
  className?: string;
  onTabChange?: (activeId: string) => void;
}

const TabMenu = memo<TabMenuProps>(
  ({ data, defaultActiveId, className = "", onTabChange }) => {
    const [activeId, setActiveId] = useState(
      defaultActiveId || data[0]?.id || ""
    );

    const handleTabClick = useCallback(
      (id: string) => {
        setActiveId(id);
        onTabChange?.(id);
      },
      [onTabChange]
    );

    if (!data.length) {
      return <div>탭 데이터가 없습니다.</div>;
    }

    return (
      <div className={`${styles.tabMenu()} ${className}`}>
        <ul className={styles.tabList} role="tablist">
          {data.map((tab) => (
            <li key={tab.id} className={styles.tabItem}>
              <button
                className={
                  styles.tabButtonVariants[
                    activeId === tab.id ? "active" : "inactive"
                  ]
                }
                onClick={() => handleTabClick(tab.id)}
                aria-selected={activeId === tab.id}
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
          {data.map((tab) => (
            <div
              key={tab.id}
              className={
                activeId === tab.id
                  ? styles.contentPanelActive
                  : styles.contentPanel
              }
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              id={`panel-${tab.id}`}
              hidden={activeId !== tab.id}
            >
              {tab.description}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

TabMenu.displayName = "TabMenu";

export default TabMenu;
