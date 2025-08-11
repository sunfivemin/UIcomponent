import Tooltip1 from './1_conditional';
import Tooltip2 from './2_singleOpen';
import Tooltip3 from './3_html-details';
import Tooltip4 from './4_viewport';
import Tooltip5 from './5_vanilla-js';
import Tooltip6 from './6_portal';
import * as styles from './tooltip.css';

const Tooltips = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>툴팁</h1>
        <p className={styles.pageSubtitle}>6가지 다른 방식으로 구현한 툴팁</p>
      </header>

      <main>
        <Tooltip1 />
        <Tooltip2 />
        <Tooltip3 />
        <Tooltip4 />
        <Tooltip5 />
        <Tooltip6 />
      </main>
    </div>
  );
};

export default Tooltips;
