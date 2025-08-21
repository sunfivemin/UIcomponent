import * as styles from './infiniteScroll.css';
import Link from 'next/link';

const InfiniteScrollIndex = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>무한스크롤 컴포넌트</h1>
        <p className={styles.pageSubtitle}>
          스크롤이 하단에 도달하면 자동으로 새로운 콘텐츠를 로드하는 무한스크롤
          구현
        </p>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>무한스크롤 구현 방법들</div>
        <div className={styles.summary}>
          <p>
            <strong>개요:</strong> 무한스크롤은 사용자가 스크롤을 내릴 때
            자동으로 새로운 콘텐츠를 로드하는 UX 패턴입니다. 다양한 구현 방법을
            통해 최적의 성능과 사용자 경험을 제공할 수 있습니다.
          </p>
        </div>

        <div className={styles.container}>
          <Link href="/infiniteScroll/react" className={styles.section}>
            <h4>React 무한스크롤</h4>
            <p>
              React Hooks와 Intersection Observer를 활용한 컴포넌트 기반 방식
            </p>
          </Link>

          <Link href="/infiniteScroll/vanilla" className={styles.section}>
            <h4>Vanilla JS 무한스크롤</h4>
            <p>
              순수 JavaScript와 Intersection Observer를 활용한 프레임워크 독립적
              방식
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollIndex;
