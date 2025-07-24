'use client';
import TabMenuConditional from './1_conditional';
import TabMenuDisplay from './2_display';
import TabMenuAnimated from './3_animated';
import TabMenuVanilla from './4_vanilla';
import TabMenuRadio from './5_radio';
import TabMenuSearchable from './6_searchable';
import TabMenuMultiple from './7_multiple';
import TabMenu from './TabMenu';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabMenuCollection = () => {
  return (
    <div className={`${styles.pageContainer} ${styles.themeClass}`}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>탭메뉴 컴포넌트 모음</h1>
        <p className={styles.pageSubtitle}>
          7가지 다른 방식으로 구현한 탭메뉴 예시들입니다.
        </p>
      </div>

      {/* 기본 탭메뉴 컴포넌트 */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>기본 탭메뉴 컴포넌트</h3>
        <TabMenu
          data={tabData}
          onTabChange={id => console.log('탭 변경:', id)}
        />
      </div>

      {/* 다양한 구현 방식들 */}
      <TabMenuConditional />
      <TabMenuDisplay />
      <TabMenuAnimated />
      <TabMenuVanilla />
      <TabMenuRadio />
      <TabMenuSearchable />
      <TabMenuMultiple />

      {/* 구현 방식 비교 */}
      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>7가지 구현 방식 비교</h2>
        <ul className={styles.summaryList}>
          <li>
            <strong>#1 조건부 렌더링:</strong>
            React의 기본 패턴입니다. 활성 탭만 DOM에 렌더링해서 메모리를
            절약하지만, 탭 전환 시 컴포넌트가 새로 마운트되어 애니메이션이
            제한적입니다.
            {'{isActive && <TabContent />}'} 형태로 간단하게 구현할 수 있습니다.
          </li>
          <li>
            <strong>#2 CSS display:</strong>
            모든 탭 콘텐츠를 미리 렌더링하고 CSS display 속성으로 숨기거나
            보여줍니다. DOM에는 모든 탭이 존재하지만 display: none/block으로
            제어합니다. 간단하고 빠르지만 부드러운 애니메이션은 구현하기
            어렵습니다.
          </li>
          <li>
            <strong>#3 CSS 애니메이션:</strong>
            CSS transition과 transform을 활용해서 부드러운 탭 전환 애니메이션을
            구현합니다. opacity, transform, position을 조합하여 자연스러운
            슬라이드나 페이드 효과를 만들 수 있습니다. GPU 가속을 활용해서
            성능도 우수합니다.
          </li>
          <li>
            <strong>#4 Vanilla JavaScript:</strong>
            React 없이 순수 JavaScript로 DOM을 직접 조작합니다. createElement,
            addEventListener 등을 활용해서 외부 라이브러리와의 통합이 쉽고,
            React의 가상 DOM 오버헤드가 없어서 성능이 우수합니다.
          </li>
          <li>
            <strong>#5 HTML radio:</strong>
            HTML radio input을 사용해서 CSS만으로 상태를 관리합니다.
            JavaScript가 필요 없고, 브라우저의 기본 기능을 그대로 활용할 수
            있습니다. 접근성이 우수하고 SEO에도 좋으며, 라디오 버튼의 기본
            동작을 그대로 사용합니다.
          </li>
          <li>
            <strong>#6 검색 가능:</strong>
            hidden="until-found" 속성을 사용해서 Ctrl+F로 숨겨진 내용도 검색할
            수 있습니다. 사용자가 내용을 찾기 쉬워지고, 복잡한 탭 구조에서도
            효율적으로 검색할 수 있습니다. 검색어에 따라 탭을 필터링하는 기능도
            포함됩니다.
          </li>
          <li>
            <strong>#7 다중 선택:</strong>
            여러 탭을 동시에 활성화할 수 있고 검색 기능도 포함합니다. 복잡한
            요구사항에 적합하며, "모두 선택", "모두 해제" 등의 컨트롤 기능을
            제공합니다. 선택된 탭 개수를 실시간으로 표시하고 관리할 수 있습니다.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabMenuCollection;
