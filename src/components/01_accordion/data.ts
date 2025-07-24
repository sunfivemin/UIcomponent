// src/components/01_accordion/data.ts
import { AccordionItemData } from "./types";

export const accordionData: AccordionItemData[] = [
  {
    id: "1",
    title: "조건부 렌더링 방식",
    description:
      "React의 조건부 렌더링을 사용하여 열린 아이템만 DOM에 존재시킵니다. 메모리 효율적이지만 애니메이션이 제한적입니다. {isOpen && <Content />} 형태로 구현합니다.",
  },
  {
    id: "2",
    title: "CSS Display 방식",
    description:
      "CSS의 display 속성을 사용하여 콘텐츠를 숨기거나 보여줍니다. 모든 아이템이 DOM에 존재하지만 display: none/block으로 제어합니다. 간단하고 빠르지만 애니메이션은 어렵습니다.",
  },
  {
    id: "3",
    title: "CSS 애니메이션 방식",
    description:
      "CSS transition과 transform을 사용하여 부드러운 애니메이션을 구현합니다. max-height, opacity, transform 등을 조합하여 자연스러운 전환 효과를 만듭니다.",
  },
  {
    id: "4",
    title: "순수 JavaScript 방식",
    description:
      "React 없이 순수 JavaScript로 DOM을 직접 조작합니다. 외부 라이브러리와의 통합이 쉽고, React의 가상 DOM 오버헤드가 없어 성능이 우수합니다.",
  },
  {
    id: "5",
    title: "HTML Radio 방식",
    description:
      "HTML의 radio input을 사용하여 CSS만으로 상태를 관리합니다. JavaScript 없이도 동작하며, 브라우저의 기본 기능을 활용하여 접근성이 우수합니다.",
  },
];
