import VanillaWrapper from '@/components/common/vanillaWrapper';
import vanillaScrollBox from './scrollBox';
import * as styles from '../scrollBox.css';

const initiator = (wrapper: HTMLDivElement) => {
  const $scrollBox = vanillaScrollBox();
  wrapper.append($scrollBox);
};

const ScrollBoxVanilla = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        Vanilla JS 방식 <sub>DOM 조작</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>순수 JavaScript + DOM API</code> -
          프레임워크 없이 순수 JavaScript로 직접 DOM을 조작하여 스크롤박스 구현
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 가벼운 번들 크기, 빠른 실행 속도,
            프레임워크 의존성 없음, 직접적인 DOM 제어, 높은 성능
          </p>
          <p>
            <strong>❌ 단점:</strong> 수동 DOM 관리, 메모리 누수 위험, 코드
            재사용성 낮음, 유지보수 어려움
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 가벼운 웹사이트, 성능이 중요한
            프로젝트, 프레임워크 사용 불가능한 환경
          </p>
          <p>
            <strong>🔧 동작 방식:</strong> <code>IntersectionObserver</code>
            API로 스크롤 경계를 감지하고, <code>classList</code>로 네비게이션
            버튼 상태를 제어하며, <code>scrollIntoView</code>로 부드러운 스크롤
            이동 구현
          </p>
        </div>
      </div>

      <VanillaWrapper title="Vanilla JS ScrollBox" initiator={initiator} />
    </div>
  );
};

export default ScrollBoxVanilla;
