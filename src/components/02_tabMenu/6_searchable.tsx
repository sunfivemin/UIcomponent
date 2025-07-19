import React, { memo, useState, useRef, useEffect } from "react";
import { tabData } from "./data";
import { TabItemProps, TabContentProps } from "./types";
import * as styles from "./tabMenu.css";

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

const TabContent = memo<TabContentProps>(({ id, content, isActive }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener("beforematch", () => {
        // 검색 시 해당 탭으로 이동하는 로직
        const event = new CustomEvent("tabSearch", { detail: { tabId: id } });
        window.dispatchEvent(event);
      });
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("beforematch", () => {});
      }
    };
  }, [id]);

  return (
    <div
      ref={contentRef}
      className={isActive ? styles.contentPanelActive : styles.contentPanel}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      id={`panel-${id}`}
      hidden={!isActive}
      {...(isActive ? {} : { "data-hidden": "until-found" })}
    >
      {content}
    </div>
  );
});

TabContent.displayName = "TabContent";

const TabMenuSearchable = () => {
  const [activeId, setActiveId] = useState(tabData[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabClick = (id: string) => {
    setActiveId(id);
  };

  // 검색어에 따라 탭 필터링
  const filteredTabs = tabData.filter(
    (tab) =>
      tab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tab.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 검색 이벤트 리스너
  useEffect(() => {
    const handleTabSearch = (event: CustomEvent) => {
      setActiveId(event.detail.tabId);
    };

    window.addEventListener("tabSearch", handleTabSearch as EventListener);
    return () => {
      window.removeEventListener("tabSearch", handleTabSearch as EventListener);
    };
  }, []);

  return (
    <>
      <h3>#6. 검색 가능한 탭메뉴</h3>
      <div className={styles.tabMenu()}>
        {/* 검색 입력창 */}
        <div style={{ padding: "16px", borderBottom: "1px solid #e5e7eb" }}>
          <input
            type="search"
            placeholder="탭 내용 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          />
        </div>

        <ul className={styles.tabList} role="tablist">
          {filteredTabs.map((tab) => (
            <TabItem
              key={tab.id}
              id={tab.id}
              title={tab.title}
              isActive={activeId === tab.id}
              onClick={() => handleTabClick(tab.id)}
            />
          ))}
        </ul>
        <div className={styles.content}>
          {filteredTabs.map((tab) => (
            <TabContent
              key={tab.id}
              id={tab.id}
              content={tab.description}
              isActive={activeId === tab.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TabMenuSearchable;
