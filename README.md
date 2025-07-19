# UI 컴포넌트 스터디 프로젝트

> React와 VanillaWrapper 구현 방식을 비교하며 학습하는 UI 컴포넌트 라이브러리

## 🎯 프로젝트 목표

- **React vs VanillaWrapper** 구현 방식 비교 학습
- **실무 수준**의 타입 안전한 컴포넌트 개발
- **외부 라이브러리 통합** 패턴 학습 (D3.js, Chart.js 등)
- **접근성과 성능**을 고려한 컴포넌트 설계

---

## 🛠️ 기술 스택

### 핵심 프레임워크

- **Next.js 14** (App Router) - 최신 React 메타 프레임워크
- **React 18** - 함수형 컴포넌트와 Hooks 기반
- **TypeScript** - 타입 안전성과 개발자 경험 향상

### 스타일링

- **CVA (Class Variance Authority)** - 컴포넌트 variant 관리
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크

### 개발 도구

- **Vitest + Testing Library** - 컴포넌트 테스트
- **ESLint + Prettier** - 코드 품질 및 포맷팅
- **TypeScript Strict Mode** - 엄격한 타입 검사

---

## 📁 프로젝트 구조 (실무 스타일)

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 전체 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── [...item]/         # 동적 라우팅
│       └── page.tsx       # 각 컴포넌트 페이지
├── components/            # UI 컴포넌트 (간단한 구조)
│   ├── Accordion.tsx      # 간단한 아코디언 컴포넌트
│   ├── AccordionExample.tsx # 사용 예제
│   ├── gnb.tsx           # 전역 네비게이션
│   └── vanillaWrapper.tsx # Vanilla JS 통합 래퍼
├── lib/                   # 유틸리티
│   └── utils.ts          # 공통 유틸리티 함수
├── styles/               # 전역 스타일
│   └── globals.css       # Tailwind CSS
└── routes.ts            # 라우팅 설정
```

---

## 🧩 컴포넌트 목록

### ✅ 완성된 컴포넌트

- **Accordion** - 접을 수 있는 콘텐츠 영역
  - 🎯 **간단한 버전**: [데모](http://localhost:3001/simple-accordion) - 실무에서 바로 사용 가능
  - 🚀 **복잡한 버전**: [데모](http://localhost:3001/accordion) - 학습용 (성능 최적화, 다양한 구현 방식)

### 🔄 개발 예정 컴포넌트

- **Tabs** - 탭 네비게이션
- **Modal** - 모달 다이얼로그
- **Tooltip** - 툴팁 및 팝오버
- **Dropdown** - 드롭다운 메뉴
- **Carousel** - 이미지/콘텐츠 슬라이더
- **Toast** - 알림 메시지
- **Pagination** - 페이지네이션
- **DatePicker** - 날짜 선택기
- **Chart** - D3.js/Chart.js 통합 차트

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

브라우저에서 [http://localhost:3001](http://localhost:3001) 접속

### 3. 테스트 실행

```bash
# 단위 테스트 실행
yarn test

# 테스트 커버리지 확인
yarn test:coverage
```

---

## 📝 컴포넌트 개발 가이드 (실무 스타일)

### 1. 새 컴포넌트 생성

```bash
# 간단하게 하나의 파일로 생성
touch src/components/Button.tsx
```

### 2. 실무에서 사용하는 컴포넌트 패턴

```typescript
// Button.tsx - 실무에서 바로 사용 가능한 간단한 구조
"use client";
import { memo } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = memo(
  ({ variant, size, className, children, onClick, ...props }: ButtonProps) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
```

### 3. 사용 예제

```typescript
// ButtonExample.tsx
import Button from "./Button";

const ButtonExample = () => {
  return (
    <div className="space-x-4">
      <Button>기본 버튼</Button>
      <Button variant="secondary">보조 버튼</Button>
      <Button variant="destructive" size="lg">
        삭제 버튼
      </Button>
    </div>
  );
};
```

### 4. 라우트 등록

```typescript
// routes.ts
import ButtonExample from "@/components/ButtonExample";

export const routes = {
  "/button": {
    key: "/button",
    link: "/button",
    name: "버튼 컴포넌트",
    children: ButtonExample,
  },
};
```

---

## 💡 실무에서의 스타일링 전략

### 언제 어떤 도구를 사용할까?

| 상황                  | 도구           | 예시                            |
| --------------------- | -------------- | ------------------------------- |
| **컴포넌트 variant**  | CVA + Tailwind | 버튼 크기/색상 변형             |
| **빠른 프로토타이핑** | Tailwind CSS   | `className="flex items-center"` |
| **복잡한 애니메이션** | CSS Modules    | keyframes, transitions          |

### 실무에서 선호하는 조합

```typescript
// ✅ 실무에서 가장 많이 사용하는 패턴
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
  }
);
```

---

## 🧪 테스트 가이드

### 간단한 컴포넌트 테스트

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("렌더링이 올바르게 된다", () => {
    render(<Button>테스트 버튼</Button>);
    expect(screen.getByText("테스트 버튼")).toBeInTheDocument();
  });

  it("클릭 이벤트가 올바르게 작동한다", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>클릭</Button>);

    fireEvent.click(screen.getByText("클릭"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("variant가 올바르게 적용된다", () => {
    render(<Button variant="secondary">버튼</Button>);
    expect(screen.getByText("버튼")).toHaveClass("bg-secondary");
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

- **번들 크기** 최적화
- **Tree-shaking** 지원
- **Code Splitting** 적용
- **로딩 시간** 빠른 초기 로딩

### 개발 경험

- **Hot Reload** 지원
- **타입 안전성** 보장
- **자동 완성** 및 IntelliSense
- **디버깅** 도구 지원

---

## 🤝 컨트리뷰션 가이드

### 브랜치 전략

```bash
# feature 브랜치 생성
git checkout -b feature/new-component

# 작업 완료 후 커밋
git add .
git commit -m "feat: 새로운 컴포넌트 추가"

# 푸시 및 PR 생성
git push origin feature/new-component
```

### 커밋 메시지 규칙

- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가
- `chore:` 빌드 업무 수정

### PR 체크리스트

- [ ] 타입 에러 없음
- [ ] ESLint 통과
- [ ] 테스트 작성 및 통과
- [ ] 접근성 검증
- [ ] 문서 업데이트

---

## 📚 참고 자료

### 공식 문서

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Class Variance Authority](https://cva.style/)
- [Tailwind CSS](https://tailwindcss.com/)

### 디자인 참고

- [Radix UI](https://www.radix-ui.com/) - 접근성 우선 컴포넌트
- [Headless UI](https://headlessui.com/) - 스타일 없는 컴포넌트
- [shadcn/ui](https://ui.shadcn.com/) - CVA 기반 컴포넌트 라이브러리

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되셨다면 스타를 눌러주세요! ⭐**

**🎯 실무에서 바로 사용할 수 있는 간단하고 강력한 UI 컴포넌트! 🎯**

</div>
