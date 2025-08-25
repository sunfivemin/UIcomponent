import VanillaWrapper from '../common/vanillaWrapper';
import * as styles from './lazyLoading.css';
import data from './data';

const lazyLoad = ($elem: HTMLImageElement, src: string) => {
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('src', src);
        observer?.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0,
    rootMargin: '50px', // 뷰포트 50px 전에 미리 로딩 시작
  });
  observer.observe($elem);
};

const lazyImageBuilder = (src: string, width: number, height: number) => {
  const $elem = document.createElement('img');
  $elem.classList.add(styles.lazy, styles.image);
  $elem.setAttribute('width', width + 'px');
  $elem.setAttribute('height', height + 'px');
  $elem.setAttribute('alt', '');

  const onLoad = () => {
    $elem.classList.remove(styles.lazy);
  };
  $elem.addEventListener('load', onLoad);

  lazyLoad($elem, src);

  return $elem;
};

const initLazyLoading = (wrapper: HTMLDivElement) => {
  // 컨테이너에 그리드 스타일 적용
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
  wrapper.style.gap = '20px';
  wrapper.style.marginTop = '20px';

  // 모든 이미지 데이터를 사용하여 더 많은 이미지 생성
  const $imgs = data.map(src => lazyImageBuilder(src, 400, 200));
  wrapper.append(...$imgs);
};

const VanillaJSPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Vanilla JS Lazy Loading</h1>
        <p className={styles.pageSubtitle}>
          순수 JavaScript와 Intersection Observer를 활용한 이미지 지연 로딩
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          #2. Vanilla JS
          <sub>Intersection Observer - 순수 JavaScript</sub>
        </h3>
        <div className={styles.summary}>
          <p>
            <strong>핵심:</strong>
            <code>Vanilla JS + Intersection Observer</code> - 순수 JavaScript로
            직접 DOM 요소에 lazy loading 적용, <code>rootMargin: '50px'</code>로
            뷰포트 50px 전에 미리 로딩 시작
          </p>
          <div className={styles.summaryDetails}>
            <p>
              <strong>✅ 장점:</strong> 간단한 구현, 가벼운 번들 크기, 직접적인
              DOM 제어, 성능 최적화, 프레임워크 의존성 없음, 미리 로딩으로
              부드러운 UX
            </p>
            <p>
              <strong>❌ 단점:</strong> 모던 브라우저 필요 (Intersection
              Observer API), 초기 로딩 시 빈 공간, 수동 DOM 관리, 추가 네트워크
              요청
            </p>
            <p>
              <strong>💡 사용 시나리오:</strong> 가벼운 웹사이트, 성능이 중요한
              프로젝트, 프레임워크 사용 불가능한 환경, 정확한 로딩 시점 제어가
              필요한 경우
            </p>
            <p>
              <strong>🔧 동작 방식:</strong>
              <code>threshold: 0</code>으로 요소가 1픽셀이라도 보이면 감지,
              <code>rootMargin: '50px'</code>로 뷰포트 경계 50px 전에 미리 로딩
              시작
            </p>
          </div>
        </div>

        <VanillaWrapper
          title="Vanilla JS LazyLoading"
          initiator={initLazyLoading}
        />
      </div>
    </div>
  );
};

export default VanillaJSPage;
