# UI Component Library

> React와 Vanilla JavaScript를 통합한 타입 안전한 UI 컴포넌트 라이브러리

## 📋 프로젝트 개요

이 프로젝트는 **React 컴포넌트와 Vanilla JavaScript의 통합**을 통해 실무에서 활용 가능한 UI 컴포넌트 라이브러리를 구축하는 학습 프로젝트입니다.

### 🎯 핵심 목표

- **타입 안전성**: TypeScript를 활용한 컴파일 타임 에러 방지
- **성능 최적화**: React와 Vanilla JS의 장점을 결합한 효율적인 구현
- **재사용성**: 다양한 예제를 통한 컴포넌트 활용 패턴 학습
- **접근성**: WCAG 가이드라인을 준수한 사용자 친화적 인터페이스

## 🛠️ 기술 스택

### Frontend Framework

- **Next.js 14** (App Router)
- **React 18** (Concurrent Features)
- **TypeScript 5** (Strict Mode)

### Styling & UI

- **Vanilla Extract** - 타입 안전한 CSS-in-JS
- **Class Variance Authority (CVA)** - 컴포넌트 variant 관리
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크

### Development Tools

- **Vitest** - 단위 테스트
- **Testing Library** - 컴포넌트 테스트
- **ESLint + Prettier** - 코드 품질 관리

## 🏗️ 프로젝트 구조

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 홈페이지
│   ├── gnb.tsx                  # 전역 네비게이션
│   └── [...item]/               # 동적 라우팅
│       └── page.tsx             # 컴포넌트 페이지
├── components/                   # UI 컴포넌트
│   ├── 01_accordion/            # 아코디언 컴포넌트
│   │   ├── index.tsx            # 메인 컴포넌트
│   │   ├── Accordion.tsx        # 기본 아코디언
│   │   ├── variants.ts          # 스타일 variants
│   │   ├── types.ts             # 타입 정의
│   │   ├── data.ts              # 샘플 데이터
│   │   ├── accordion.css.ts     # Vanilla Extract 스타일
│   │   └── [1-8]_*.tsx          # 8가지 구현 예제
│   ├── 02_tabMenu/              # 탭 메뉴 컴포넌트
│   │   ├── index.tsx            # 메인 컴포넌트
│   │   ├── TabMenu.tsx          # 기본 탭 메뉴
│   │   ├── variants.ts          # 스타일 variants
│   │   ├── types.ts             # 타입 정의
│   │   ├── data.ts              # 샘플 데이터
│   │   ├── tabMenu.css.ts       # Vanilla Extract 스타일
│   │   └── [1-7]_*.tsx          # 7가지 구현 예제
│   ├── 03_tooltip/              # 툴팁 컴포넌트
│   ├── 04_textBox/              # 텍스트박스 컴포넌트
│   ├── 05_lineClamp/            # 라인 클램프 컴포넌트
│   ├── 06_lazyLoading/          # 지연 로딩 컴포넌트
│   ├── 07_infiniteScroll/       # 무한 스크롤 컴포넌트
│   ├── 08_scrollBox/            # 스크롤 박스 컴포넌트
│   ├── 09_scrollSpy/            # 스크롤 스파이 컴포넌트
│   ├── 10_chart/                # 차트 컴포넌트
│   ├── vanillaWrapper.tsx       # Vanilla JS 통합 래퍼
│   └── VanillaWrapper.test.tsx  # 래퍼 테스트
├── lib/                         # 유틸리티
│   └── utils.ts                 # 공통 유틸리티 함수
├── styles/                      # 전역 스타일
│   ├── global.css.ts            # Vanilla Extract 전역 스타일
│   ├── tailwind.css             # Tailwind CSS
│   └── tokens.css.ts            # 디자인 토큰
├── routes.ts                    # 라우팅 설정
└── test/                        # 테스트 설정
    └── setup.ts                 # 테스트 환경 설정
```

## 🧩 구현된 컴포넌트

### 1. Accordion Component

**접을 수 있는 콘텐츠 영역을 제공하는 컴포넌트**

#### 주요 특징

- **8가지 구현 방식** 제공
- **타입 안전한 스타일링** (Vanilla Extract)
- **다크 테마 지원**
- **접근성 고려** (ARIA attributes)

#### 구현 예제

1. `1_conditional.tsx` - 조건부 렌더링 방식
2. `2_display.tsx` - CSS display 속성 활용
3. `3_animated.tsx` - CSS 애니메이션 효과
4. `4_vanilla.tsx` - Vanilla JavaScript 통합
5. `5_radio.tsx` - 라디오 버튼 스타일 구현
6. `6_searchable.tsx` - 검색 기능 통합
7. `7_multiple.tsx` - 다중 선택 기능
8. `8_details.tsx` - HTML details 요소 활용

### 2. TabMenu Component

**탭 기반 네비게이션을 제공하는 컴포넌트**

#### 주요 특징

- **7가지 구현 방식** 제공
- **반응형 디자인**
- **키보드 네비게이션** 지원
- **접근성 준수**

#### 구현 예제

1. `1_conditional.tsx` - 조건부 렌더링 방식
2. `2_display.tsx` - CSS display 속성 활용
3. `3_animated.tsx` - CSS 애니메이션 효과
4. `4_vanilla.tsx` - Vanilla JavaScript 통합
5. `5_radio.tsx` - 라디오 버튼 스타일 구현
6. `6_searchable.tsx` - 검색 기능 통합
7. `7_multiple.tsx` - 다중 선택 기능

## 🎯 핵심 기술 구현

### VanillaWrapper

**React와 Vanilla JavaScript를 통합하는 래퍼 컴포넌트**

```typescript
import VanillaWrapper from '@/components/vanillaWrapper';

const MyComponent = () => {
  return (
    <VanillaWrapper
      initiator={el => {
        // Vanilla JavaScript 로직
        el.addEventListener('click', () => {
          console.log('Element clicked');
        });
      }}
    >
      <button>Click me</button>
    </VanillaWrapper>
  );
};
```

### 타입 안전한 스타일링

**Vanilla Extract와 CVA를 활용한 스타일 시스템**

```typescript
// variants.ts
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
```

## 🚀 시작하기

### 환경 설정

```bash
# 저장소 클론
git clone https://github.com/sunfivemin/UIcomponent.git
cd UIcomponent

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 테스트 실행

```bash
# 단위 테스트
npm test

# 테스트 커버리지
npm run test:coverage
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 확인
npm start
```

## 🧪 테스트 전략

### 컴포넌트 테스트 예제

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Accordion from './Accordion';

describe('Accordion Component', () => {
  it('renders correctly with provided content', () => {
    render(
      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger>Title</Accordion.Trigger>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('toggles content visibility on trigger click', () => {
    render(
      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger>Title</Accordion.Trigger>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger = screen.getByText('Title');
    fireEvent.click(trigger);

    expect(screen.getByText('Content')).toBeVisible();
  });
});
```

## 🎨 디자인 시스템

### 다크 테마 지원

모든 컴포넌트는 다크 테마를 지원하며, CSS 변수를 통해 테마 전환이 가능합니다.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

[data-theme='dark'] {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

## 📊 성능 최적화

### 구현된 최적화 기법

- **React.memo**를 활용한 불필요한 리렌더링 방지
- **useCallback**과 **useMemo**를 통한 메모이제이션
- **Code Splitting**을 통한 번들 크기 최적화
- **Tree Shaking**을 통한 사용하지 않는 코드 제거

## 🚀 배포

### Vercel 배포

- **자동 배포**: main 브랜치 push 시 자동 배포
- **URL**: [ui-component-pi.vercel.app](https://ui-component-pi.vercel.app)
- **환경**: Next.js 14 + TypeScript

## 📚 학습 목표 달성

### 기술적 성과

- ✅ **TypeScript Strict Mode** 완벽 적용
- ✅ **Vanilla Extract**를 활용한 타입 안전한 스타일링
- ✅ **React와 Vanilla JS 통합** 패턴 구현
- ✅ **컴포넌트 테스트** 작성 및 실행
- ✅ **다크 테마** 시스템 구축

### 실무 적용 가능성

- ✅ **재사용 가능한 컴포넌트** 설계
- ✅ **확장 가능한 아키텍처** 구축
- ✅ **성능 최적화** 기법 적용
- ✅ **접근성** 고려한 UI 구현

## 🤝 기여 가이드

### 개발 워크플로우

```bash
# feature 브랜치 생성
git checkout -b feature/new-component

# 작업 완료 후 커밋
git add .
git commit -m "feat: 새로운 컴포넌트 추가"

# 푸시 및 PR 생성
git push origin feature/new-component
```

### 커밋 메시지 컨벤션

- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가
- `chore:` 빌드 업무 수정

## 📄 라이선스

MIT License

---

**이 프로젝트는 React와 Vanilla JavaScript의 통합을 통해 실무에서 활용 가능한 UI 컴포넌트 라이브러리를 구축하는 학습 프로젝트입니다.**
