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
│   ├── Gnb.tsx           # 전역 네비게이션
│   ├── VanillaWrapper.tsx # Vanilla JS 통합 래퍼
│   └── 01_accordion/     # 기능별 컴포넌트 폴더
│       ├── Accordion.tsx
│       ├── Accordion.css.ts
│       └── Accordion.test.tsx
├── hook/                  # 커스텀 훅
│   ├── useAccordion.ts   # React 훅
│   └── vanilla/          # Vanilla JS 유틸리티
│       └── accordion.ts
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
```

### 2. 컴포넌트 구현 패턴

```typescript
// NewComponent.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import * as styles from './NewComponent.css';

const componentVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.default,
      secondary: styles.secondary,
    },
    size: {
      sm: styles.small,
      md: styles.medium,
      lg: styles.large,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

interface NewComponentProps extends VariantProps<typeof componentVariants> {
  children: React.ReactNode;
  className?: string;
}

export const NewComponent = ({
  variant,
  size,
  className,
  children,
  ...props
}: NewComponentProps) => {
  return (
    <div
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </div>
  );
};
```

### 3. 스타일링 가이드

```typescript
// NewComponent.css.ts (Vanilla Extract)
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const base = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: vars.space.md,
});

export const default = style({
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

export const secondary = style({
  backgroundColor: vars.color.secondary,
  color: vars.color.gray[900],
});
```

### 4. VanillaWrapper 통합

```typescript
// hook/vanilla/newComponent.ts
export const createNewComponent = (element: HTMLDivElement) => {
  let state = {
    /* 상태 정의 */
  };
  let eventListeners: Array<{ element: Element; handler: EventListener }> = [];

  const render = () => {
    element.innerHTML = `/* HTML 템플릿 */`;

    // 이벤트 리스너 등록
    const buttons = element.querySelectorAll('.btn');
    buttons.forEach(button => {
      const handler = () => {
        /* 이벤트 핸들러 */
      };
      button.addEventListener('click', handler);
      eventListeners.push({ element: button, handler });
    });
  };

  render();

  // cleanup 함수 (필수!)
  return () => {
    eventListeners.forEach(({ element, handler }) => {
      element.removeEventListener('click', handler);
    });
    eventListeners = [];
  };
};
```

### 5. 라우트 등록

```typescript
// routes.ts
export const routes = [
  // ... 기존 라우트
  {
    path: 'new-component',
    label: '05. 새 컴포넌트',
    component: 'NewComponent',
  },
];
```

---

## 💡 스타일링 전략

### 언제 어떤 도구를 사용할까?

| 상황                         | 도구                  | 예시                            |
| ---------------------------- | --------------------- | ------------------------------- |
| **전역 스타일, 디자인 토큰** | Vanilla Extract       | 색상 변수, 타이포그래피         |
| **컴포넌트 variant**         | CVA + Vanilla Extract | 버튼 크기/색상 변형             |
| **빠른 프로토타이핑**        | Tailwind CSS          | `className="flex items-center"` |
| **복잡한 애니메이션**        | Vanilla Extract + CSS | keyframes, transitions          |

### 예시: 버튼 컴포넌트

```typescript
// Button.css.ts
export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out',
});

// Button.tsx
const buttonVariants = cva(button, {
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
});
```

---

## 🧪 테스트 가이드

### 컴포넌트 테스트 패턴

```typescript
// NewComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { NewComponent } from './NewComponent';

describe('NewComponent', () => {
  it('렌더링이 올바르게 된다', () => {
    render(<NewComponent>테스트 내용</NewComponent>);
    expect(screen.getByText('테스트 내용')).toBeInTheDocument();
  });

  it('클릭 이벤트가 올바르게 작동한다', () => {
    const handleClick = vi.fn();
    render(<NewComponent onClick={handleClick}>클릭</NewComponent>);

    fireEvent.click(screen.getByText('클릭'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('다양한 variant가 올바르게 적용된다', () => {
    const { rerender } = render(
      <NewComponent variant="primary">버튼</NewComponent>
    );
    expect(screen.getByText('버튼')).toHaveClass('primary');

    rerender(<NewComponent variant="secondary">버튼</NewComponent>);
    expect(screen.getByText('버튼')).toHaveClass('secondary');
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

### 성능

- **번들 크기** 최적화
- **Tree-shaking** 지원
- **Code Splitting** 적용
- **이미지 최적화** (Next.js Image)

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
- `style:` 코드 포맷팅, 세미콜론 누락 등
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가
- `chore:` 빌드 업무 수정, 패키지 매니저 수정

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
- [Vanilla Extract](https://vanilla-extract.style/)
- [Class Variance Authority](https://cva.style/)

### 디자인 참고

- [Radix UI](https://www.radix-ui.com/) - 접근성 우선 컴포넌트
- [Headless UI](https://headlessui.com/) - 스타일 없는 컴포넌트
- [Arco Design](https://arco.design/) - 엔터프라이즈급 디자인 시스템

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 🙋‍♂️ 문의 및 지원

- **이슈 등록**: [GitHub Issues](https://github.com/your-repo/issues)
- **토론**: [GitHub Discussions](https://github.com/your-repo/discussions)
- **이메일**: your-email@example.com

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되셨다면 스타를 눌러주세요! ⭐**

</div>
