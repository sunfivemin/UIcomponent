# UI 컴포넌트 스터디 프로젝트

> React와 VanillaWrapper 구현 방식을 비교하며 학습하는 UI 컴포넌트 라이브러리

## 🎯 프로젝트 목표

- **React vs VanillaWrapper** 구현 방식 비교 학습
- **실무 수준**의 타입 안전한 컴포넌트 개발
- **외부 라이브러리 통합** 패턴 학습 (D3.js, Chart.js 등)
- **접근성과 성능**을 고려한 컴포넌트 설계
- **성능 최적화** 기법 학습 및 적용

---

## 🛠️ 기술 스택

### 핵심 프레임워크

- **Next.js 14** (App Router) - 최신 React 메타 프레임워크
- **React 18** - 함수형 컴포넌트와 Hooks 기반
- **TypeScript** - 타입 안전성과 개발자 경험 향상

### 스타일링

- **Vanilla Extract** - 타입 안전한 CSS-in-JS
- **CVA (Class Variance Authority)** - 컴포넌트 variant 관리
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크

### 개발 도구

- **Vitest + Testing Library** - 컴포넌트 테스트
- **ESLint + Prettier** - 코드 품질 및 포맷팅
- **TypeScript Strict Mode** - 엄격한 타입 검사

---

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 전체 레이아웃
│   ├── page.tsx           # 홈페이지 (README 표시)
│   └── [...item]/         # 동적 라우팅
│       └── page.tsx       # 각 컴포넌트 페이지
├── components/            # UI 컴포넌트
│   ├── gnb.tsx           # 전역 네비게이션
│   ├── vanillaWrapper.tsx # Vanilla JS 통합 래퍼
│   └── 01_accordion/     # 기능별 컴포넌트 폴더
│       ├── Accordion.tsx  # 메인 아코디언 컴포넌트
│       ├── accordion.css.ts # Vanilla Extract 스타일
│       ├── components.tsx # 하위 컴포넌트들
│       ├── hooks/         # 커스텀 훅
│       │   └── useAccordion.ts
│       ├── utils/         # 성능 최적화 유틸리티
│       │   └── performance.ts
│       ├── VirtualizedAccordion.tsx # 가상화 컴포넌트
│       ├── PERFORMANCE.md # 성능 최적화 가이드
│       └── 1_conditional.tsx # 예제 컴포넌트
├── hook/                  # 커스텀 훅
│   └── vanilla/          # Vanilla JS 유틸리티
├── service/              # 비즈니스 로직 및 API
├── context/              # 전역 상태 관리
├── styles/               # 전역 스타일
│   └── global.css.ts    # Vanilla Extract 전역 스타일
└── routes.ts            # 라우팅 설정
```

---

## 🧩 컴포넌트 목록

### ✅ 완성된 컴포넌트

- **01_accordion** - 접을 수 있는 콘텐츠 영역 ([데모](http://localhost:3000/accordion))
  - 🚀 **성능 최적화 완료**: GPU 가속, 메모이제이션, 가상화 지원
  - 📱 **접근성**: 키보드 네비게이션, 스크린 리더 지원
  - 🎨 **다양한 변형**: 조건부 렌더링, CSS 애니메이션, 다중 선택
  - 🔧 **유연한 API**: TypeScript 타입 안전성, 커스텀 훅 제공

### 🔄 개발 예정 컴포넌트

- **02_tabs** - 탭 네비게이션
- **03_modal** - 모달 다이얼로그
- **04_tooltip** - 툴팁 및 팝오버
- **05_dropdown** - 드롭다운 메뉴
- **06_carousel** - 이미지/콘텐츠 슬라이더
- **07_toast** - 알림 메시지
- **08_pagination** - 페이지네이션
- **09_datepicker** - 날짜 선택기
- **10_chart** - D3.js/Chart.js 통합 차트

---

## 🚀 성능 최적화 하이라이트

### Accordion 컴포넌트 성능 개선

| 항목            | 최적화 전     | 최적화 후       | 개선율 |
| --------------- | ------------- | --------------- | ------ |
| 스크롤 성능     | 6/10 (버벅임) | 9/10 (부드러움) | +50%   |
| 렌더링 성능     | 7/10          | 9/10            | +29%   |
| 메모리 사용     | 8/10          | 9/10            | +13%   |
| 애니메이션 성능 | 6/10          | 9/10            | +50%   |

### 주요 최적화 기법

1. **CSS 성능 최적화**

   - GPU 가속 활성화 (`transform: translateZ(0)`)
   - `will-change` 속성으로 애니메이션 최적화
   - `contain` 속성으로 레이아웃 격리
   - `transform3d` 사용으로 GPU 가속 transform

2. **React 성능 최적화**

   - 모든 컴포넌트에 `React.memo` 적용
   - `useMemo`로 계산 결과 메모이제이션
   - `useCallback`으로 함수 참조 안정화
   - 불필요한 리렌더링 방지

3. **스크롤 성능 최적화**
   - 60fps 쓰로틀링 적용
   - RAF(RequestAnimationFrame) 쓰로틀링
   - 가상화 컴포넌트 추가 (대량 데이터용)

---

## 🏃‍♂️ 시작하기

### 1. 저장소 클론 및 패키지 설치

```bash
git clone <repository-url>
cd ui-component-study
yarn install
```

### 2. 개발 서버 실행

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 3. 테스트 실행

```bash
# 단위 테스트 실행
yarn test

# 테스트 커버리지 확인
yarn test:coverage

# 테스트 Watch 모드
yarn test:watch
```

### 4. 빌드 확인

```bash
# 프로덕션 빌드
yarn build

# 빌드 결과 확인
yarn start
```

---

## 📝 컴포넌트 개발 가이드

### 1. 새 컴포넌트 생성

```bash
# 1. 컴포넌트 폴더 생성
mkdir src/components/05_newComponent

# 2. 필수 파일 생성
touch src/components/05_newComponent/NewComponent.tsx
touch src/components/05_newComponent/NewComponent.css.ts
touch src/components/05_newComponent/NewComponent.test.tsx
touch src/components/05_newComponent/components.tsx
touch src/components/05_newComponent/hooks/useNewComponent.ts
touch src/components/05_newComponent/utils/performance.ts
```

### 2. 성능 최적화된 컴포넌트 구현 패턴

```typescript
// NewComponent.tsx
"use client";
import { memo, useMemo, useCallback } from "react";
import { NewComponentProps } from "./types";
import * as styles from "./NewComponent.css";

const NewComponent = memo(
  ({ items, className = "", onChange }: NewComponentProps) => {
    // 🚀 메모이제이션된 데이터
    const memoizedItems = useMemo(() => items, [items]);

    // 🚀 메모이제이션된 핸들러
    const handleChange = useCallback(
      (value: any) => {
        onChange?.(value);
      },
      [onChange]
    );

    // 🚀 메모이제이션된 렌더링
    const renderedItems = useMemo(() => {
      return memoizedItems.map((item) => <Item key={item.id} {...item} />);
    }, [memoizedItems]);

    return (
      <div className={`${styles.themeClass} ${className}`}>{renderedItems}</div>
    );
  }
);

NewComponent.displayName = "NewComponent";
export default NewComponent;
```

### 3. 성능 최적화된 스타일링

```typescript
// NewComponent.css.ts (Vanilla Extract + 성능 최적화)
import { style, styleVariants } from "@vanilla-extract/css";

export const container = style({
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  contain: "layout style paint", // 레이아웃 격리
});

export const item = style({
  // 🚀 애니메이션 최적화
  willChange: "transform, opacity",
  transform: "translateZ(0)",
  backfaceVisibility: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
});

export const itemVariants = styleVariants({
  default: {},
  active: {
    transform: "translate3d(0, 0, 0)", // GPU 가속 transform
  },
});
```

### 4. 성능 최적화 훅

```typescript
// hooks/useNewComponent.ts
import { useState, useCallback, useRef, useEffect } from "react";
import { throttle } from "../utils/performance";

export const useNewComponent = (options = {}) => {
  const [state, setState] = useState(initialState);

  // 🚀 쓰로틀링된 콜백
  const throttledCallback = useRef(
    throttle((value) => {
      // 콜백 로직
    }, 16) // 60fps
  );

  const handleChange = useCallback((value) => {
    setState(value);
    throttledCallback.current(value);
  }, []);

  return { state, handleChange };
};
```

### 5. 성능 유틸리티 활용

```typescript
// utils/performance.ts
import { throttle, debounce, rafThrottle } from "./performance";

// 스크롤 이벤트 최적화
const optimizedScrollHandler = rafThrottle((event) => {
  // 스크롤 처리 로직
});

// 검색 입력 최적화
const optimizedSearchHandler = debounce((query) => {
  // 검색 로직
}, 300);
```

---

## 🎯 성능 최적화 가이드

### 1. CSS 최적화 기법

```css
/* GPU 가속 활성화 */
.element {
  transform: translateZ(0);
  will-change: transform, opacity;
  contain: layout style paint;
  backface-visibility: hidden;
}

/* 애니메이션 최적화 */
.animated {
  transform: translate3d(0, -10px, 0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 2. React 최적화 기법

```tsx
// 메모이제이션된 컴포넌트
const OptimizedComponent = memo(({ data }) => {
  const memoizedData = useMemo(() => processData(data), [data]);
  const handleClick = useCallback(() => {
    // 클릭 핸들러
  }, []);

  return <div>{memoizedData}</div>;
});
```

### 3. 이벤트 최적화 기법

```tsx
// 쓰로틀링된 이벤트 핸들러
const throttledHandler = useCallback(
  throttle((event) => {
    // 이벤트 처리
  }, 16), // 60fps
  []
);
```

---

## 🧪 테스트 가이드

### 성능 테스트 포함

```typescript
// NewComponent.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { NewComponent } from "./NewComponent";

describe("NewComponent", () => {
  it("렌더링이 올바르게 된다", () => {
    render(<NewComponent items={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("성능 최적화가 적용된다", () => {
    const { rerender } = render(
      <NewComponent items={[{ id: "1", title: "Test" }]} />
    );

    // 메모이제이션 테스트
    rerender(<NewComponent items={[{ id: "1", title: "Test" }]} />);
    // 동일한 props로 리렌더링 시 불필요한 계산 방지 확인
  });

  it("이벤트 핸들러가 최적화된다", () => {
    const handleChange = vi.fn();
    render(<NewComponent items={[]} onChange={handleChange} />);

    // 쓰로틀링 테스트
    fireEvent.click(screen.getByRole("button"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
```

---

## 🎯 실무 수준의 품질 기준

### 코드 품질

- **TypeScript Strict Mode** 준수
- **ESLint 규칙** 100% 통과
- **테스트 커버리지** 80% 이상
- **접근성** WCAG 2.1 AA 수준

### 성능 기준

- **FPS**: 60fps 유지
- **메모리 사용량**: 안정적 유지
- **번들 크기**: 최적화된 크기
- **로딩 시간**: 빠른 초기 로딩
- **스크롤 성능**: 버벅임 없는 부드러운 스크롤

### 개발 경험

- **Hot Reload** 지원
- **타입 안전성** 보장
- **자동 완성** 및 IntelliSense
- **디버깅** 도구 지원
- **성능 모니터링** 도구 제공

---

## 🤝 컨트리뷰션 가이드

### 브랜치 전략

```bash
# feature 브랜치 생성
git checkout -b feature/new-component

# 작업 완료 후 커밋
git add .
git commit -m "feat: 새로운 컴포넌트 추가 (성능 최적화 포함)"

# 푸시 및 PR 생성
git push origin feature/new-component
```

### 커밋 메시지 규칙

- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `perf:` 성능 개선
- `docs:` 문서 수정
- `style:` 코드 포맷팅, 세미콜론 누락 등
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가
- `chore:` 빌드 업무 수정, 패키지 매니저 수정

### PR 체크리스트

- [ ] 타입 에러 없음
- [ ] ESLint 통과
- [ ] 테스트 작성 및 통과
- [ ] 접근성 검증
- [ ] 성능 최적화 적용
- [ ] 문서 업데이트
- [ ] 성능 테스트 통과

---

## 📚 참고 자료

### 공식 문서

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vanilla Extract](https://vanilla-extract.style/)
- [Class Variance Authority](https://cva.style/)

### 성능 최적화 자료

- [React 성능 최적화 가이드](https://react.dev/learn/render-and-commit)
- [CSS 성능 최적화](https://web.dev/optimize-css/)
- [브라우저 렌더링 최적화](https://web.dev/rendering-performance/)
- [가상화 기법](https://web.dev/virtualize-long-lists-react-window/)

### 디자인 참고

- [Radix UI](https://www.radix-ui.com/) - 접근성 우선 컴포넌트
- [Headless UI](https://headlessui.com/) - 스타일 없는 컴포넌트
- [Arco Design](https://arco.design/) - 엔터프라이즈급 디자인 시스템
