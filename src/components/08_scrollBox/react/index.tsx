import React, { useRef } from 'react';
import ScrollBox, { ScrollBoxHandle } from './scrollBox';
import data from '../data';
import * as styles from '../scrollBox.css';

interface ItemProps {
  id: string;
  description: string;
  imgUrl: string;
}

const Item = ({ description, imgUrl }: ItemProps) => (
  <div className={styles.scrollBoxPageItem}>
    <img
      src={imgUrl}
      width={250}
      height={400}
      alt=""
      className={styles.image}
    />
    <span className={styles.scrollBoxPageSpan}>{description}</span>
  </div>
);

const ScrollBoxReact = () => {
  const ref = useRef<ScrollBoxHandle>(null);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        React 방식 <sub>Intersection Observer</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>Intersection Observer + React Hooks</code> - React의 상태 관리와
          Intersection Observer를 결합하여 스마트한 네비게이션 버튼 제어
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 선언적 상태 관리, 컴포넌트 재사용성, 자동
            메모리 정리, 타입 안전성, 개발자 경험 우수
          </p>
          <p>
            <strong>❌ 단점:</strong> 번들 크기 증가, 런타임 오버헤드, 학습
            곡선, 복잡한 상태 관리
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> React 기반 프로젝트, 복잡한 상태
            관리가 필요한 경우, 팀 개발 환경
          </p>
          <p>
            <strong>🔧 동작 방식:</strong>
            <code>useIntersectionObserverV2</code> 훅으로 스크롤 경계를
            감지하고, <code>useState</code>로 네비게이션 버튼 상태를 관리하며,
            <code>useCallback</code>으로 스크롤 함수 최적화
          </p>
        </div>
      </div>

      <ScrollBox list={data} Item={Item} ref={ref} />
    </div>
  );
};

export default ScrollBoxReact;
