import { useEffect, useRef, useState } from 'react';
import * as styles from './lazyLoading.css';
import data from './data';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ioOptions: IntersectionObserverInit = {
  threshold: 0,
  rootMargin: '50px', // 뷰포트 50px 전에 미리 로딩 시작
};

export const LazyImage = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  const handleIntersect = () => {
    if (!imageSrc) {
      setImageSrc(src);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // 브라우저가 네이티브 lazy loading을 지원하는 경우
    if ('loading' in HTMLImageElement.prototype) {
      setImageSrc(src);
      return;
    }
  }, [src, isClient]);

  // 네이티브 지원이 없는 경우에만 Intersection Observer 사용
  const { entries, observerRef } = useIntersectionObserver(
    imgRef,
    ioOptions,
    handleIntersect
  );

  useEffect(() => {
    if (!isClient) return;

    if (!('loading' in HTMLImageElement.prototype)) {
      const entry = entries[0];
      if (entry?.isIntersecting && !imageSrc) {
        setImageSrc(src);
        observerRef.current?.disconnect();
      }
    }
  }, [entries, src, imageSrc, observerRef, isClient]);

  const supportsNativeLazy =
    isClient && 'loading' in HTMLImageElement.prototype;

  return (
    <img
      ref={imgRef}
      className={`${styles.image} ${!loaded ? styles.lazy : ''}`}
      width={width}
      height={height}
      src={supportsNativeLazy ? src : imageSrc}
      loading={supportsNativeLazy ? 'lazy' : undefined}
      onLoad={onLoad}
      alt=""
    />
  );
};

const ReactIntersectionPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>React Intersection Observer</h1>
        <p className={styles.pageSubtitle}>
          네이티브 Lazy Loading + Intersection Observer를 활용한 이미지 지연
          로딩
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          #1. React
          <sub>Intersection Observer - 개별 이미지 지연 로딩</sub>
        </h3>
        <div className={styles.summary}>
          <p>
            <strong>핵심:</strong>
            <code>하이브리드 Lazy Loading</code> - 최신 브라우저는 네이티브
            <code>loading="lazy"</code> 사용, 구형 브라우저는 Intersection
            Observer로 폴백
          </p>
          <div className={styles.summaryDetails}>
            <p>
              <strong>✅ 장점:</strong> 최적의 성능 (네이티브), 완벽한 브라우저
              호환성 (Observer 폴백), 메모리 효율성, 네트워크 대역폭 절약, 자동
              폴백 처리
            </p>
            <p>
              <strong>❌ 단점:</strong> 초기 로딩 시 빈 공간, 복잡한 조건부
              로직, 브라우저별 동작 방식 차이
            </p>
            <p>
              <strong>💡 사용 시나리오:</strong> 이미지 갤러리, 소셜 미디어
              피드, 상품 목록, 뉴스 피드, 대규모 이미지 목록
            </p>
            <p>
              <strong>🔧 동작 방식:</strong>
              <code>loading</code> 속성 지원 여부를 확인하여 네이티브 lazy
              loading 또는 Intersection Observer를 선택적으로 사용
            </p>
          </div>
        </div>

        <div className={styles.container}>
          {data.map((src, index) => (
            <LazyImage src={src} key={index} width={400} height={200} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactIntersectionPage;
