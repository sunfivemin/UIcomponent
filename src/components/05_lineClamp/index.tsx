import LineClamp1 from './1_react-canvas';
import LineClamp2 from './2_react-clone';
import LineClamp3 from './3_vanilla';
import * as styles from './lineClamp.css';

const LineClamps = () => (
  <div className={styles.pageContainer}>
    <div className={styles.pageHeader}>
      <h1 className={styles.pageTitle}>여러줄 말줄임</h1>
      <p className={styles.pageSubtitle}>
        3가지 방식으로 구현한 동적 말줄임 컴포넌트
      </p>
    </div>
    <LineClamp1 />
    <LineClamp2 />
    <LineClamp3 />
  </div>
);

export default LineClamps;
