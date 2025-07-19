import React, { memo, useState, useCallback } from "react";
import { useTabMenu } from "@/hooks/useTabMenu";
import { throttle } from "@/lib/performance";

interface TabItem {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveId?: string;
  className?: string;
  onTabChange?: (activeId: string) => void;
}

const TabButton = memo<{
  item: TabItem;
  isActive: boolean;
  onClick: () => void;
}>(({ item, isActive, onClick }) => (
  <button
    className={`tab-button ${isActive ? "active" : ""}`}
    onClick={onClick}
    aria-selected={isActive}
    role="tab"
    aria-controls={`tab-${item.id}`}
    id={`tab-${item.id}`}
  >
    {item.title}
  </button>
));

TabButton.displayName = "TabButton";

const TabContent = memo<{
  item: TabItem;
  isActive: boolean;
}>(({ item, isActive }) => (
  <div
    id={`tab-${item.id}`}
    className={`tab-content ${isActive ? "active" : ""}`}
    role="tabpanel"
    aria-labelledby={`tab-${item.id}`}
    hidden={!isActive}
  >
    {item.content}
  </div>
));

TabContent.displayName = "TabContent";

const Tabs = memo<TabsProps>(
  ({ items, defaultActiveId, className = "", onTabChange }) => {
    const { activeId, setActiveTab, isActive } = useTabMenu({
      defaultActiveId: defaultActiveId || items[0]?.id,
    });

    // 🚀 쓰로틀링된 onChange 콜백
    const throttledOnChange = useCallback(
      throttle((id: string) => {
        onTabChange?.(id);
      }, 16),
      [onTabChange]
    );

    const handleTabClick = useCallback(
      (id: string) => {
        setActiveTab(id);
        throttledOnChange(id);
      },
      [setActiveTab, throttledOnChange]
    );

    return (
      <div className={`tabs ${className}`}>
        <div className="tab-list" role="tablist">
          {items.map((item) => (
            <TabButton
              key={item.id}
              item={item}
              isActive={isActive(item.id)}
              onClick={() => handleTabClick(item.id)}
            />
          ))}
        </div>
        <div className="tab-panels">
          {items.map((item) => (
            <TabContent
              key={item.id}
              item={item}
              isActive={isActive(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
);

Tabs.displayName = "Tabs";

export default Tabs;
