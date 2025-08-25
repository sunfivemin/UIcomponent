import ScrollBoxReact from './react';
import ScrollBoxVanilla from './vanilla';
import * as styles from './scrollBox.css';

const ScrollBox = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>스크롤박스 컴포넌트</h1>
        <p className={styles.pageSubtitle}>
          가로 스크롤과 네비게이션 버튼을 활용한 이미지 갤러리 구현
        </p>
      </div>

      {/* 다양한 구현 방식들 */}
      <ScrollBoxReact />
      <ScrollBoxVanilla />
    </div>
  );
};

export default ScrollBox;
