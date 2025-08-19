import * as styles from './lazyLoading.css';
import Link from 'next/link';

const LazyLoadingIndex = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>LazyLoading 컴포넌트</h1>
        <p className={styles.pageSubtitle}>
          이미지 지연 로딩과 무한 스크롤 구현 방법들
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>지연 로딩 구현 방법들</h3>
        <div className={styles.summary}>
          <p>
            <strong>개요:</strong> 이미지 지연 로딩은 웹 성능 최적화의 핵심 기술
            중 하나입니다. 다양한 구현 방법을 통해 최적의 사용자 경험을 제공할
            수 있습니다.
          </p>
        </div>

        <div className={styles.container}>
          <Link
            href="/lazyLoading/react-intersection"
            className={styles.section}
          >
            <h4>React Intersection Observer</h4>
            <p>
              네이티브 Lazy Loading + Intersection Observer를 활용한 하이브리드
              방식
            </p>
          </Link>

          <Link href="/lazyLoading/vanilla-js" className={styles.section}>
            <h4>Vanilla JS Lazy Loading</h4>
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

export default LazyLoadingIndex;
