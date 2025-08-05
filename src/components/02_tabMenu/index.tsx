'use client';
import TabMenuConditional from './1_conditional';
import TabMenuDisplay from './2_display';
import TabMenuAnimated from './3_animated';
import TabMenuVanilla from './4_vanilla';
import TabMenuRadio from './5_radio';
import TabMenuSearchable from './6_searchable';
import TabMenuMultiple from './7_multiple';
import * as styles from './tabMenu.css';

const TabMenuCollection = () => {
  return (
    <div className={`${styles.pageContainer} ${styles.themeClass}`}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>탭메뉴</h1>
        <p className={styles.pageSubtitle}>7가지 다른 방식으로 구현한 탭메뉴</p>
      </div>

      {/* 다양한 구현 방식들 */}
      <TabMenuConditional />
      <TabMenuDisplay />
      <TabMenuAnimated />
      <TabMenuVanilla />
      <TabMenuRadio />
      <TabMenuSearchable />
      <TabMenuMultiple />
    </div>
  );
};

export default TabMenuCollection;
