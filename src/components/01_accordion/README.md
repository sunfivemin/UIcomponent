# Accordion Component Testing Guide

## 📋 개요

이 문서는 아코디언 컴포넌트의 테스트 설정과 실행 방법을 설명합니다.

## 🧪 테스트 파일 구조

```
src/components/01_accordion/
├── Accordion.test.tsx          # 메인 테스트 파일
├── 1_conditional.tsx           # 조건부 렌더링 아코디언
├── 2_display.tsx               # CSS display 아코디언
├── 3_animated.tsx              # CSS 애니메이션 아코디언
├── 4_vanilla.tsx               # 순수 JavaScript 아코디언
├── 5_radio.tsx                 # HTML Radio 아코디언
├── 6_searchable.tsx            # 검색 가능한 아코디언
├── 7_multiple.tsx              # 다중 선택 아코디언
├── 8_details.tsx               # HTML Details 아코디언
├── data.ts                     # 테스트 데이터
├── types.ts                    # 타입 정의
└── accordion.css.ts            # 스타일 정의
```

## 🚀 테스트 실행 방법

### 전체 테스트 실행

```bash
npm run test:run
```

### 아코디언 컴포넌트만 테스트

```bash
npm run test:run src/components/01_accordion/Accordion.test.tsx
```

### 개발 모드로 테스트 실행 (UI 포함)

```bash
npm run test:ui
```

### 특정 테스트 파일만 실행

```bash
npm run test:run -- src/components/01_accordion/Accordion.test.tsx
```

## 📝 테스트 케이스 설명

### 1. ConditionalAccordion 테스트

#### 기본 렌더링 테스트

- **`renders without crashing`**: 컴포넌트가 오류 없이 렌더링되는지 확인
- **`renders all accordion items`**: 모든 아코디언 아이템이 올바르게 표시되는지 확인

#### 상태 관리 테스트

- **`shows first item as open by default`**: 첫 번째 아이템이 기본적으로 열려있는지 확인
- **`toggles accordion items when clicked`**: 클릭 시 아이템이 토글되는지 확인
- **`only allows one item to be open at a time`**: 한 번에 하나의 아이템만 열릴 수 있는지 확인

#### UI 요소 테스트

- **`displays toggle icons correctly`**: 토글 아이콘(+, -)이 올바르게 표시되는지 확인
- **`updates toggle icons when items are clicked`**: 클릭 시 아이콘이 올바르게 변경되는지 확인

### 2. AccordionCollection 테스트

#### 페이지 렌더링 테스트

- **`renders the collection page`**: 전체 컬렉션 페이지가 올바르게 렌더링되는지 확인
- **`renders all accordion sections`**: 모든 아코디언 섹션이 표시되는지 확인

#### 콘텐츠 테스트

- **`displays implementation summary`**: 구현 요약 정보가 표시되는지 확인
- **`displays implementation comparison`**: 구현 방식 비교 정보가 표시되는지 확인

### 3. Integration 테스트

#### 복합 동작 테스트

- **`maintains state correctly across multiple interactions`**: 여러 상호작용 후에도 상태가 올바르게 유지되는지 확인
- **`handles rapid clicking correctly`**: 빠른 클릭에도 올바르게 동작하는지 확인

## 🔧 테스트 설정

### CSS 모킹

테스트에서는 vanilla-extract CSS 모듈을 모킹하여 스타일 의존성을 제거합니다:

```typescript
vi.mock('./accordion.css', () => ({
  pageContainer: 'page-container',
  themeClass: 'theme-class',
  // ... 기타 CSS 클래스들
}));
```

### 테스트 라이브러리

- **Vitest**: 테스트 러너
- **@testing-library/react**: React 컴포넌트 테스트
- **@testing-library/user-event**: 사용자 상호작용 시뮬레이션
- **@testing-library/jest-dom**: 추가 matcher

## 📊 테스트 커버리지

현재 테스트는 다음 영역을 커버합니다:

### 기능적 테스트

- ✅ 컴포넌트 렌더링
- ✅ 상태 관리 (열기/닫기)
- ✅ 사용자 상호작용 (클릭)
- ✅ UI 업데이트 (아이콘 변경)

### 통합 테스트

- ✅ 여러 컴포넌트 간 상호작용
- ✅ 복합 사용자 시나리오
- ✅ 에러 처리

### 접근성 테스트

- ✅ 키보드 네비게이션 (향후 추가 예정)
- ✅ 스크린 리더 지원 (향후 추가 예정)

## 🛠️ 테스트 작성 가이드

### 새로운 테스트 추가하기

1. **테스트 구조**

```typescript
describe('ComponentName', () => {
  it('should do something', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Component />);

    // Act
    await user.click(screen.getByText('Click me'));

    // Assert
    expect(screen.getByText('Expected result')).toBeInTheDocument();
  });
});
```

2. **비동기 테스트**

```typescript
it('should handle async operations', async () => {
  const user = userEvent.setup();
  render(<Component />);

  await user.click(screen.getByText('Button'));

  await waitFor(() => {
    expect(screen.getByText('Result')).toBeInTheDocument();
  });
});
```

3. **CSS 모킹 추가**
   새로운 CSS 클래스를 사용하는 경우, `vi.mock`에 추가해야 합니다:

```typescript
vi.mock('./accordion.css', () => ({
  // 기존 클래스들...
  newClass: 'new-class-mock',
}));
```

## 🐛 문제 해결

### 일반적인 문제들

1. **CSS 모킹 오류**

   - 오류: `No "className" export is defined on the mock`
   - 해결: `vi.mock`에 누락된 CSS 클래스 추가

2. **비동기 테스트 실패**

   - 오류: `Element not found`
   - 해결: `waitFor` 사용하여 비동기 렌더링 대기

3. **다중 요소 오류**
   - 오류: `Found multiple elements with the text`
   - 해결: `getAllByText` 사용하거나 더 구체적인 선택자 사용

### 디버깅 팁

1. **테스트 실행 시 상세 로그**

```bash
npm run test:run -- --reporter=verbose
```

2. **특정 테스트만 실행**

```bash
npm run test:run -- --grep "test name"
```

3. **테스트 UI에서 디버깅**

```bash
npm run test:ui
```

## 📈 성능 고려사항

### 테스트 최적화

- **메모이제이션**: `useMemo`, `useCallback` 사용
- **불필요한 리렌더링 방지**: `React.memo` 활용
- **비동기 작업 최적화**: `waitFor` 적절히 사용

### 실제 성능 테스트

- **렌더링 시간 측정**: `performance.now()` 사용
- **메모리 사용량**: Chrome DevTools 활용
- **번들 크기**: `webpack-bundle-analyzer` 사용

## 🔄 지속적 통합

### CI/CD 파이프라인

```yaml
# .github/workflows/test.yml 예시
- name: Run tests
  run: npm run test:run

- name: Generate coverage
  run: npm run test:coverage
```

### 품질 게이트

- 테스트 커버리지 80% 이상
- 모든 테스트 통과
- 린트 오류 없음

## 📚 추가 리소스

- [Vitest 공식 문서](https://vitest.dev/)
- [Testing Library 가이드](https://testing-library.com/docs/react-testing-library/intro/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [vanilla-extract 테스트 가이드](https://vanilla-extract.style/documentation/testing/)

---

이 가이드는 아코디언 컴포넌트의 테스트를 효과적으로 작성하고 실행하는 데 도움이 됩니다. 추가 질문이나 개선 사항이 있으면 언제든지 문의해 주세요!
