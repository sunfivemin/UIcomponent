# UI요소 만들기 강의 코드 - 보일러플레이트

## 🎨 스타일링 시스템

이 프로젝트는 **Vanilla Extract**와 **CVA (Class Variance Authority)**를 사용하여 현대적이고 타입 안전한 스타일링 시스템을 구축했습니다.

### 사용된 기술

- **Vanilla Extract**: CSS-in-JS의 장점과 타입 안전성을 모두 제공
- **CVA**: 컴포넌트의 다양한 상태(variants)를 체계적으로 관리
- **Tailwind CSS**: 유틸리티 클래스 기반의 빠른 스타일링
- **clsx + tailwind-merge**: 조건부 클래스와 클래스 충돌 해결

### 디렉토리 구조

```
src/
├── styles/
│   ├── global.css.ts      # Vanilla Extract 전역 스타일
│   ├── tokens.css.ts      # CSS 변수 및 디자인 토큰
│   └── tailwind.css       # Tailwind CSS import
├── lib/
│   └── utils.ts           # CVA 유틸리티 함수
├── components/
│   ├── ui/                # 재사용 가능한 UI 컴포넌트
│   │   └── button.tsx     # CVA를 사용한 Button 컴포넌트
│   ├── examples/          # 예시 컴포넌트들
│   │   └── accordion.tsx  # 아코디언 예시
│   └── vanillaWrapper.tsx # Vanilla JS 래퍼 컴포넌트
└── app/                   # Next.js App Router
    ├── [...item]/         # 동적 라우팅
    ├── layout.tsx         # 레이아웃
    ├── page.tsx           # 메인 페이지
    └── gnb.tsx            # 네비게이션
```

### 컴포넌트 스타일링 예시

#### CVA를 사용한 Button 컴포넌트

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  // ... props
}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
```

#### Vanilla Extract를 사용한 전역 스타일

```tsx
import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  backgroundColor: "hsl(var(--background))",
  color: "hsl(var(--foreground))",
});

globalStyle("aside", {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  width: "199px",
  backgroundColor: "#222",
  color: "#fff",
});
```

### 장점

1. **타입 안전성**: TypeScript와 완벽한 통합
2. **성능**: 런타임에 CSS가 생성되어 번들 크기 최적화
3. **유지보수성**: 컴포넌트별 스타일 관리
4. **확장성**: 새로운 variant 쉽게 추가 가능
5. **개발자 경험**: 자동완성과 타입 체크

## Getting Started

### 설치

```bash
cd uiComponents
yarn install
```

### 개발 서버 실행

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)에 접속하여 결과를 확인합니다.

### 새로운 컴포넌트 추가하기

1. `src/components/examples/` 디렉토리에 새 컴포넌트 생성
2. CVA를 사용하여 variant 정의
3. `src/routes.ts`에 라우트 추가
4. Vanilla JS 버전도 함께 구현

### 스타일 가이드

- **Vanilla Extract**: 전역 스타일, CSS 변수, 복잡한 스타일 로직
- **CVA**: 컴포넌트 variant, 조건부 스타일링
- **Tailwind CSS**: 유틸리티 클래스, 빠른 프로토타이핑
- **CSS Variables**: 디자인 토큰, 테마 관리

## 라우트 구성

- `app`: app 전반에 대한 기본 view 제공
  - `[...item]/page.tsx`: `/[...item]` route의 page view. `routes`의 `key`에 매칭된 컴포넌트를 렌더링.
  - `layout.tsx`: 기본적인 html 구성
  - `page.tsx`: `/` route의 page view. `/README.md`를 보여줍니다.
  - `gnb.tsx`: 좌측 메뉴 컴포넌트
- `components`
  - `vanillaWrapper.tsx`: 독립적인 VanillaJS 환경의 wrapper 컴포넌트
- `routes.ts`: route 구성
