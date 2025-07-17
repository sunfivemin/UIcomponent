// src/components/01_accordion/data.ts
import { AccordionItemData } from './types';

export const accordionData: AccordionItemData[] = [
  {
    id: '1',
    title: 'vanilla-extract + CVA란?',
    description:
      'vanilla-extract는 타입 안전한 CSS-in-JS 라이브러리이고, CVA는 컴포넌트 variant를 관리하는 도구입니다. 둘을 조합하면 강력한 스타일링 시스템을 구축할 수 있습니다.',
  },
  {
    id: '2',
    title: '타입 안전한 스타일링',
    description:
      'vanilla-extract는 컴파일 타임에 CSS를 생성하고 타입 체크를 수행합니다. 이를 통해 런타임 오류를 방지하고 개발자 경험을 향상시킵니다.',
  },
  {
    id: '3',
    title: 'CVA로 variant 관리',
    description:
      'Class Variance Authority(CVA)를 사용하면 컴포넌트의 다양한 상태와 변형을 체계적으로 관리할 수 있습니다. 조건부 클래스명 적용이 간편해집니다.',
  },
  {
    id: '4',
    title: '성능 최적화',
    description:
      '빌드 타임에 CSS가 생성되어 런타임 오버헤드가 없습니다. 사용되지 않는 스타일은 자동으로 제거되어 번들 크기가 최적화됩니다.',
  },
  {
    id: '5',
    title: '개발자 경험',
    description:
      'TypeScript 지원으로 자동 완성, 타입 체크, Go to Definition 등 뛰어난 개발자 경험을 제공합니다. 스타일 코드의 유지보수성이 크게 향상됩니다.',
  },
];
