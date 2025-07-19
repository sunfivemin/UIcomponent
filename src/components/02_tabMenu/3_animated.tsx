import React, { memo, useState, useRef, useEffect } from "react";
import { tabData } from "./data";
import { TabItemProps, TabContentProps } from "./types";
import * as styles from "./tabMenu.css";
import { useTabMenu } from "@/hooks/useTabMenu";

const TabItem = memo<TabItemProps>(({ id, title, isActive, onClick }) => (
  <li className={styles.tabItem}>
    <button
      className={styles.tabButtonVariants[isActive ? "active" : "inactive"]}
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

TabItem.displayName = "TabItem";

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

TabContent.displayName = "TabContent";

const TabMenuAnimated = () => {
  const { activeId, setActiveTab, isActive } = useTabMenu({
    defaultActiveId: tabData[0].id,
  });
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    const activeTab = document.querySelector(
      `[data-tab-id="${activeId}"]`
    ) as HTMLElement;
    if (!activeTab) return;

    const tabRect = activeTab.getBoundingClientRect();
    const containerRect = activeTab.parentElement?.getBoundingClientRect();

    if (containerRect) {
      const left = tabRect.left - containerRect.left;
      const width = tabRect.width;

      indicator.style.transform = `translateX(${left}px)`;
      indicator.style.width = `${width}px`;
    }
  }, [activeId]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <>
      <h3>#3. 애니메이션 탭메뉴</h3>
      <div className={styles.tabMenu()}>
        <ul className={styles.animatedTabList} role="tablist">
          {tabData.map((tab) => (
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
              position: "absolute",
              bottom: 0,
              height: "3px",
              backgroundColor: "hsl(var(--primary))",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 1,
            }}
          />
        </ul>
        <div className={styles.content}>
          {tabData.map((tab) => (
            <TabContent
              key={tab.id}
              id={tab.id}
              content={tab.description}
              isActive={isActive(tab.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TabMenuAnimated;
