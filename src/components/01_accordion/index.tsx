'use client';
import ConditionalAccordion from './1_conditional';
import DisplayAccordion from './2_display';
import AnimatedAccordion from './3_animated';
import VanillaAccordion from './4_vanilla';
import RadioAccordion from './5_radio';
import SearchableAccordion from './6_searchable';
import MultipleAccordion from './7_multiple';
import DetailsAccordion from './8_details';
import * as styles from './accordion.css';

const AccordionCollection = () => {
  return (
    <div className={`${styles.pageContainer} ${styles.themeClass}`}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>아코디언 컴포넌트 모음</h1>
        <p className={styles.pageSubtitle}>
          8가지 다른 방식으로 구현한 아코디언 예시들입니다.
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

      {/* vanilla-extract + CVA 장점 */}
      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>
          vanilla-extract + CVA를 사용하는 이유
        </h2>
        <ul className={styles.summaryList}>
          <li>
            <strong>타입 안전성:</strong> CSS 클래스명 오타나 잘못된 속성 사용을
            컴파일 타임에 잡아줍니다
          </li>
          <li>
            <strong>성능:</strong> 빌드할 때 CSS가 생성되어 런타임에 추가 작업이
            필요 없습니다
          </li>
          <li>
            <strong>유지보수:</strong> 색상, 간격 등의 디자인 토큰을 한 곳에서
            관리할 수 있습니다
          </li>
          <li>
            <strong>개발 편의성:</strong> IDE에서 자동완성과 타입 체크를
            지원합니다
          </li>
          <li>
            <strong>확장성:</strong> CVA로 컴포넌트의 다양한 상태를 체계적으로
            관리할 수 있습니다
          </li>
          <li>
            <strong>재사용성:</strong> 스타일을 컴포넌트 단위로 관리하여
            재사용하기 쉽습니다
          </li>
          <li>
            <strong>일관성:</strong> 디자인 시스템을 강제로 적용할 수 있어
            일관된 UI를 만들 수 있습니다
          </li>
          <li>
            <strong>번들 크기:</strong> 사용하지 않는 CSS는 자동으로 제거됩니다
          </li>
        </ul>
      </div>

      {/* 구현 방식 비교 */}
      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>8가지 구현 방식 비교</h2>
        <ul className={styles.summaryList}>
          <li>
            <strong>#1 조건부 렌더링:</strong>
            React의 기본 방식입니다. 열린 항목만 DOM에 렌더링해서 메모리를
            절약하지만, 애니메이션을 만들기 어렵습니다.
          </li>
          <li>
            <strong>#2 CSS display:</strong>
            CSS display 속성으로 숨기고 보여줍니다. 성능이 좋고 구현이
            간단하지만, 부드러운 애니메이션은 어렵습니다.
          </li>
          <li>
            <strong>#3 CSS 애니메이션:</strong>
            CSS transition을 사용해서 부드러운 애니메이션을 만듭니다. GPU 가속을
            활용해서 성능도 좋습니다.
          </li>
          <li>
            <strong>#4 Vanilla JavaScript:</strong>
            React 없이 순수 JavaScript로 구현합니다. 외부 라이브러리와 통합하기
            쉽고, React의 오버헤드가 없어서 성능이 좋습니다.
          </li>
          <li>
            <strong>#5 HTML radio:</strong>
            HTML radio input을 사용해서 CSS만으로 상태를 관리합니다.
            JavaScript가 필요 없고, 브라우저의 기본 기능을 그대로 사용할 수
            있습니다.
          </li>
          <li>
            <strong>#6 검색 가능:</strong>
            hidden="until-found" 속성을 사용해서 Ctrl+F로 숨겨진 내용도 검색할
            수 있습니다. 사용자가 내용을 찾기 쉬워집니다.
          </li>
          <li>
            <strong>#7 다중 선택:</strong>
            여러 항목을 동시에 열 수 있고 검색 기능도 있습니다. 복잡한
            요구사항에 적합합니다.
          </li>
          <li>
            <strong>#8 HTML details:</strong>
            HTML의 details/summary 태그를 사용합니다. 브라우저의 기본 기능을
            최대한 활용해서 접근성과 SEO에 좋습니다.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccordionCollection;
