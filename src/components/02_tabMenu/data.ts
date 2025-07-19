export interface TabData {
  id: string;
  title: string;
  description: string;
}

export const tabData: TabData[] = [
  {
    id: "tab1",
    title: "첫 번째 탭",
    description:
      "첫 번째 탭의 내용입니다. 여기에 상세한 설명이나 컴포넌트가 들어갈 수 있습니다. React와 TypeScript를 사용한 모던한 웹 개발에 대한 내용을 다룹니다.",
  },
  {
    id: "tab2",
    title: "두 번째 탭",
    description:
      "두 번째 탭의 내용입니다. Vanilla Extract와 CVA를 활용한 스타일링 방법에 대해 알아봅니다. CSS-in-JS의 장점과 실무에서의 활용 사례를 살펴봅니다.",
  },
  {
    id: "tab3",
    title: "세 번째 탭",
    description:
      "세 번째 탭의 내용입니다. 성능 최적화와 접근성에 대한 내용을 다룹니다. React.memo, useMemo, useCallback 등의 활용법과 웹 접근성 가이드라인을 알아봅니다.",
  },
  {
    id: "tab4",
    title: "네 번째 탭",
    description:
      "네 번째 탭의 내용입니다. 컴포넌트 설계 패턴과 아키텍처에 대해 알아봅니다. 재사용 가능한 컴포넌트 설계, 커스텀 훅 활용, 그리고 프로젝트 구조화 방법을 다룹니다.",
  },
];
