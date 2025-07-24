import { TabData } from './types';

export const tabData: TabData[] = [
  {
    id: 'tab1',
    title: '조건부 렌더링',
    description:
      'React의 조건부 렌더링을 사용하여 활성 탭만 DOM에 존재시킵니다. 메모리 효율적이지만 애니메이션이 제한적입니다. {isActive && <TabContent />} 형태로 구현하며, 탭 전환 시 컴포넌트가 완전히 새로 마운트됩니다.',
  },
  {
    id: 'tab2',
    title: 'CSS Display',
    description:
      'CSS의 display 속성을 사용하여 모든 탭 콘텐츠를 렌더링하고 CSS로 숨기거나 보여줍니다. 모든 탭이 DOM에 존재하지만 display: none/block으로 제어합니다. 간단하고 빠르지만 부드러운 애니메이션은 어렵습니다.',
  },
  {
    id: 'tab3',
    title: 'CSS 애니메이션',
    description:
      'CSS transition과 transform을 사용하여 부드러운 탭 전환 애니메이션을 구현합니다. opacity, transform, position 등을 조합하여 자연스러운 슬라이드 효과와 페이드 효과를 만듭니다. GPU 가속을 활용하여 성능도 우수합니다.',
  },
  {
    id: 'tab4',
    title: 'Vanilla JavaScript',
    description:
      'React 없이 순수 JavaScript로 DOM을 직접 조작하여 탭메뉴를 구현합니다. 외부 라이브러리와의 통합이 쉽고, React의 가상 DOM 오버헤드가 없어 성능이 우수합니다. createElement, addEventListener 등을 활용합니다.',
  },
];
