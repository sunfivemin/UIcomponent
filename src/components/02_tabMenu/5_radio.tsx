import React, { memo } from "react";
import { tabData } from "./data";
import * as styles from "./tabMenu.css";

const TabItem = memo<{ tab: (typeof tabData)[0]; index: number }>(
  ({ tab, index }) => (
    <li className={styles.tabItem}>
      <input
        type="radio"
        className={styles.radioInput}
        name="tabmenu"
        id={tab.id}
        defaultChecked={index === 0}
      />
      <label
        className={`${styles.radioLabel} ${styles.radioLabelChecked}`}
        htmlFor={tab.id}
        role="tab"
        aria-selected={index === 0}
        aria-controls={`panel-${tab.id}`}
      >
        {tab.title}
      </label>
      <div
        className={`${styles.radioContent} ${styles.radioContentChecked}`}
        role="tabpanel"
        aria-labelledby={tab.id}
        id={`panel-${tab.id}`}
      >
        {tab.description}
      </div>
    </li>
  )
);

TabItem.displayName = "TabItem";

const TabMenuRadio = () => {
  return (
    <>
      <h3>#5. 라디오 버튼 방식</h3>
      <div className={`${styles.tabMenu()} ${styles.radioTabList}`}>
        <ul className={styles.tabList} role="tablist">
          {tabData.map((tab, index) => (
            <TabItem key={tab.id} tab={tab} index={index} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TabMenuRadio;
