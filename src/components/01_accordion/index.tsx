// src/components/01_accordion/index.tsx
"use client";
import ConditionalAccordion from "./1_conditional";
import DisplayAccordion from "./2_display";
import AnimatedAccordion from "./3_animated";
import VanillaAccordion from "./4_vanilla";
import RadioAccordion from "./5_radio";
import SearchableAccordion from "./6_searchable";
import MultipleAccordion from "./7_multiple";
import DetailsAccordion from "./8_details";
import * as styles from "./accordion.css";

const AccordionCollection = () => {
  return (
    <div className={`${styles.pageContainer} ${styles.themeClass}`}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>아코디언 컴포넌트 모음</h1>
        <p className={styles.pageSubtitle}>
          vanilla-extract + CVA로 구현한 8가지 아코디언 예시들
        </p>
      </div>

      <ConditionalAccordion />
      <DisplayAccordion />
      <AnimatedAccordion />
      <VanillaAccordion />
      <RadioAccordion />
      <SearchableAccordion />
      <MultipleAccordion />
      <DetailsAccordion />

      {/* 구현 방식 요약 */}
      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>📚 vanilla-extract + CVA 장점</h2>
        <ul className={styles.summaryList}>
          <li>
            <strong>타입 안전성:</strong> 컴파일 타임 CSS 검증
          </li>
          <li>
            <strong>성능:</strong> 빌드 타임 CSS 생성, 런타임 오버헤드 없음
          </li>
          <li>
            <strong>유지보수성:</strong> 중앙화된 디자인 토큰 관리
          </li>
          <li>
            <strong>개발 경험:</strong> 자동 완성, 타입 체크 지원
          </li>
          <li>
            <strong>확장성:</strong> CVA로 체계적인 variant 관리
          </li>
          <li>
            <strong>재사용성:</strong> 컴포넌트 기반 스타일 시스템
          </li>
          <li>
            <strong>일관성:</strong> 디자인 시스템 강제
          </li>
          <li>
            <strong>번들 최적화:</strong> 사용되지 않는 CSS 자동 제거
          </li>
        </ul>
      </div>

      {/* 구현 방식 비교 */}
      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>🔍 8가지 구현 방식 비교</h2>
        <ul className={styles.summaryList}>
          <li>
            <strong>#1 조건부 렌더링:</strong> React 기본 방식, DOM 추가/제거
          </li>
          <li>
            <strong>#2 CSS display:</strong> 성능 우수, 애니메이션 없음
          </li>
          <li>
            <strong>#3 CSS 애니메이션:</strong> 부드러운 전환 효과
          </li>
          <li>
            <strong>#4 VanillaWrapper:</strong> 순수 JavaScript, 외부 라이브러리
            통합에 유리
          </li>
          <li>
            <strong>#5 HTML radio:</strong> CSS만으로 상태 관리, JavaScript
            불필요
          </li>
          <li>
            <strong>#6 검색 가능:</strong> hidden="until-found"로 Ctrl+F 지원
          </li>
          <li>
            <strong>#7 다중 선택:</strong> 여러 항목 동시 열기 + 검색 기능
          </li>
          <li>
            <strong>#8 HTML details:</strong> 시맨틱 HTML, 브라우저 기본 기능
            활용
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccordionCollection;
