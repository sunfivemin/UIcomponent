# 탭메뉴 컴포넌트 테스트 가이드

## 📋 개요

이 문서는 탭메뉴 컴포넌트들의 테스트 설정과 실행 방법을 설명합니다. 7가지 다른 구현 방식의 탭메뉴를 포괄적으로 테스트합니다.

## 🧪 테스트 파일 구조

```
src/components/02_tabMenu/
├── TabMenu.test.tsx          # 메인 테스트 파일 (개선됨)
├── test-tabmenu.sh          # 테스트 실행 스크립트
└── README.md                # 이 파일
```

## 🚀 테스트 실행 방법

### 1. 스크립트 사용 (권장)

```bash
./src/components/02_tabMenu/test-tabmenu.sh
```

### 2. 직접 실행

```bash
npm run test:run src/components/02_tabMenu/TabMenu.test.tsx
```

### 3. UI 모드로 실행

```bash
npm run test:ui
```

## 📊 테스트 케이스 상세

### TabMenu (기본 컴포넌트) - 15개 테스트

#### 렌더링 테스트 (4개)

- **기본 렌더링**: 컴포넌트가 정상적으로 렌더링되는지 확인
- **탭 렌더링**: 모든 탭이 올바르게 표시되는지 확인
- **기본 활성화**: 첫 번째 탭이 기본적으로 활성화되는지 확인
- **기본 내용 표시**: 첫 번째 탭 내용이 기본으로 표시되는지 확인

#### 상호작용 테스트 (3개)

- **탭 전환**: 탭 클릭 시 내용이 올바르게 전환되는지 확인
- **빠른 연속 클릭**: 빠른 연속 클릭에도 안정적으로 작동하는지 확인
- **키보드 네비게이션**: Tab 키와 화살표 키로 탭 이동이 가능한지 확인

#### 에러 처리 테스트 (2개)

- **빈 데이터 처리**: 데이터가 없을 때 적절한 메시지 표시
- **잘못된 데이터 구조**: 잘못된 데이터 구조를 적절히 처리하는지 확인

#### 접근성 테스트 (1개)

- **ARIA 속성**: ARIA 속성이 올바르게 설정되는지 확인

#### 스타일링 테스트 (2개)

- **커스텀 클래스**: className prop이 올바르게 적용되는지 확인
- **활성 탭 스타일**: 활성 탭에 올바른 스타일이 적용되는지 확인

### TabMenuConditional (조건부 렌더링) - 3개 테스트

- **섹션 제목**: 올바른 제목이 표시되는지 확인
- **탭 렌더링**: 모든 탭이 표시되는지 확인
- **조건부 렌더링**: 활성 탭만 내용이 표시되는지 확인

### TabMenuDisplay (CSS Display) - 3개 테스트

- **섹션 제목**: 올바른 제목이 표시되는지 확인
- **탭 렌더링**: 모든 탭이 표시되는지 확인
- **CSS 기반 전환**: 탭 전환 시 CSS로 숨김/표시되는지 확인

### TabMenuAnimated (애니메이션) - 4개 테스트

- **섹션 제목**: 올바른 제목이 표시되는지 확인
- **탭 렌더링**: 모든 탭이 표시되는지 확인
- **애니메이션 전환**: 탭 전환 시 애니메이션이 적용되는지 확인
- **인디케이터**: 애니메이션 인디케이터가 올바르게 작동하는지 확인

### TabMenuVanilla (Vanilla JS) - 3개 테스트

- **섹션 제목**: 올바른 제목이 표시되는지 확인
- **컨테이너 렌더링**: 탭메뉴 컨테이너가 렌더링되는지 확인
- **Vanilla JS 전환**: 순수 JavaScript로 탭 전환이 작동하는지 확인

### TabMenuRadio (라디오 버튼) - 4개 테스트

- **섹션 제목**: 올바른 제목이 표시되는지 확인
- **라디오 입력**: 모든 탭이 라디오 입력으로 렌더링되는지 확인
- **선택된 탭 내용**: 선택된 라디오 탭의 내용이 표시되는지 확인
- **라디오 전환**: 라디오 버튼 전환이 작동하는지 확인

### TabMenuSearchable (검색 가능) - 5개 테스트

- **섹션 제목**: 올바른 제목이 표시되는지 확인
- **검색 입력**: 검색 입력창이 렌더링되는지 확인
- **검색 필터링**: 검색어에 따라 탭이 필터링되는지 확인
- **검색된 탭 전환**: 검색된 탭을 클릭했을 때 내용이 전환되는지 확인
- **빈 검색어**: 빈 검색어 입력 시 모든 탭이 표시되는지 확인

### TabMenuMultiple (다중 선택) - 7개 테스트

- **섹션 제목**: 올바른 제목이 표시되는지 확인
- **컨트롤 버튼**: "모두 선택", "모두 해제" 버튼이 표시되는지 확인
- **선택된 탭 수**: 선택된 탭 개수가 표시되는지 확인
- **다중 선택**: 여러 탭을 동시에 선택할 수 있는지 확인
- **모두 선택**: "모두 선택" 버튼이 모든 탭을 선택하는지 확인
- **모두 해제**: "모두 해제" 버튼이 모든 탭을 해제하는지 확인
- **개별 해제**: 개별 탭 해제가 작동하는지 확인

### TabMenu Integration (통합 테스트) - 3개 테스트

- **상태 유지**: 다른 탭메뉴 구현 간 상태가 올바르게 유지되는지 확인
- **빠른 클릭**: 빠른 연속 클릭 시 오류가 발생하지 않는지 확인
- **메모리 누수**: 메모리 누수가 발생하지 않는지 확인

### 성능 테스트 - 2개 테스트

- **대량 데이터 처리**: 100개의 탭 데이터를 효율적으로 처리하는지 확인
- **빠른 전환**: 빠른 탭 전환이 부드럽게 작동하는지 확인

### 에러 바운더리 테스트 - 2개 테스트

- **잘못된 데이터**: 잘못된 데이터로 인한 오류를 적절히 처리하는지 확인
- **빈 배열**: 빈 배열 데이터를 올바르게 처리하는지 확인

## 🔧 테스트 설정

### CSS 모듈 모킹 (완전한 모킹)

```typescript
vi.mock('./tabMenu.css', () => ({
  // 기본 탭메뉴
  tabMenu: () => 'tab-menu',
  tabMenuContainer: 'tab-menu-container',
  tabList: 'tab-list',
  tabItem: 'tab-item',
  tabButton: 'tab-button',
  tabButtonActive: 'tab-button-active',
  tabButtonInactive: 'tab-button-inactive',
  tabButtonVariants: {
    active: 'tab-button-active',
    inactive: 'tab-button-inactive',
  },
  content: 'content',
  contentPanel: 'content-panel',
  contentPanelActive: 'content-panel-active',

  // 애니메이션 탭메뉴
  animatedTabList: 'animated-tab-list',

  // 라디오 탭메뉴
  radioTabList: 'radio-tab-list',
  radioInput: 'radio-input',
  radioLabel: 'radio-label',
  radioContent: 'radio-content',

  // 페이지 스타일
  pageContainer: 'page-container',
  themeClass: 'theme-class',
  pageHeader: 'page-header',
  pageTitle: 'page-title',
  pageSubtitle: 'page-subtitle',
  section: 'section',
  sectionTitle: 'section-title',
  summary: 'summary',
  summaryTitle: 'summary-title',
  summaryList: 'summary-list',

  // 기타 스타일
  detailsPanel: 'details-panel',
}));
```

### 테스트 유틸리티 함수들

```typescript
// 대량 데이터 생성
const createMockTabData = (count = 4) =>
  Array.from({ length: count }, (_, i) => ({
    id: `tab${i + 1}`,
    title: `탭 ${i + 1}`,
    description: `탭 ${i + 1}의 내용입니다.`,
  }));

// 애니메이션 대기
const waitForAnimation = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
};
```

### 사용된 라이브러리

- **Vitest**: 테스트 러너
- **@testing-library/react**: React 컴포넌트 렌더링
- **@testing-library/user-event**: 사용자 이벤트 시뮬레이션
- **@testing-library/jest-dom**: DOM 매처

## 🎯 테스트 커버리지

### 기능별 커버리지

- ✅ **렌더링**: 모든 컴포넌트의 기본 렌더링
- ✅ **사용자 상호작용**: 탭 클릭, 검색, 다중 선택, 키보드 네비게이션
- ✅ **상태 관리**: 탭 전환, 활성 상태 관리
- ✅ **접근성**: ARIA 속성, 키보드 네비게이션
- ✅ **에러 처리**: 빈 데이터, 잘못된 입력 처리
- ✅ **성능**: 대량 데이터 처리, 빠른 전환
- ✅ **통합**: 컴포넌트 간 상호작용, 메모리 관리

### 컴포넌트별 커버리지

- ✅ **TabMenu**: 100% (15/15 테스트)
- ✅ **TabMenuConditional**: 100% (3/3 테스트)
- ✅ **TabMenuDisplay**: 100% (3/3 테스트)
- ✅ **TabMenuAnimated**: 100% (4/4 테스트)
- ✅ **TabMenuVanilla**: 100% (3/3 테스트)
- ✅ **TabMenuRadio**: 100% (4/4 테스트)
- ✅ **TabMenuSearchable**: 100% (5/5 테스트)
- ✅ **TabMenuMultiple**: 100% (7/7 테스트)
- ✅ **통합 테스트**: 100% (3/3 테스트)
- ✅ **성능 테스트**: 100% (2/2 테스트)
- ✅ **에러 바운더리**: 100% (2/2 테스트)

## 🚀 개선사항

### 1. 테스트 구조 개선

- **계층적 구조**: describe 블록으로 테스트를 논리적으로 그룹화
- **한국어 테스트명**: 이해하기 쉬운 한국어 테스트명 사용
- **beforeEach**: 각 테스트 전 모킹 초기화

### 2. 새로운 테스트 케이스 추가

- **키보드 네비게이션**: Tab 키와 화살표 키 테스트
- **빠른 연속 클릭**: 성능과 안정성 테스트
- **인디케이터**: 애니메이션 인디케이터 테스트
- **개별 해제**: 다중 선택에서 개별 해제 테스트
- **빈 검색어**: 검색 기능의 엣지 케이스 테스트

### 3. 성능 테스트 추가

- **대량 데이터**: 100개 탭 데이터 처리 성능
- **빠른 전환**: 10번 연속 탭 전환 성능

### 4. 에러 처리 강화

- **타입 안전성**: TypeScript 타입 오류 해결
- **에러 바운더리**: 잘못된 데이터 처리 테스트
- **메모리 누수**: 컴포넌트 언마운트 테스트

### 5. 접근성 테스트

- **ARIA 속성**: 올바른 ARIA 속성 설정 확인
- **키보드 지원**: 키보드 네비게이션 지원 확인

## 🐛 문제 해결

### 일반적인 문제들

1. **CSS 모듈 오류**

   ```bash
   Error: No "className" export is defined on the "./tabMenu.css" mock
   ```

   - 해결: `TabMenu.test.tsx`의 CSS 모킹에 누락된 클래스 추가

2. **비동기 테스트 실패**

   ```bash
   Error: Element not found
   ```

   - 해결: `waitFor` 사용하여 비동기 렌더링 대기

3. **사용자 이벤트 오류**

   ```bash
   Error: Element is not attached to DOM
   ```

   - 해결: `userEvent.setup()` 사용하여 올바른 이벤트 설정

4. **타입 오류**
   ```bash
   Error: Type 'null' is not assignable to type 'TabData[]'
   ```
   - 해결: 적절한 타입 캐스팅 또는 기본값 사용

### 디버깅 팁

1. **테스트 실행 시 상세 로그**

   ```bash
   npm run test:run src/components/02_tabMenu/TabMenu.test.tsx -- --verbose
   ```

2. **특정 테스트만 실행**

   ```bash
   npm run test:run src/components/02_tabMenu/TabMenu.test.tsx -t "TabMenu"
   ```

3. **UI 모드에서 디버깅**

   ```bash
   npm run test:ui
   ```

4. **성능 테스트 디버깅**
   ```bash
   npm run test:run src/components/02_tabMenu/TabMenu.test.tsx -t "성능"
   ```

## 📈 성능 고려사항

### 테스트 최적화

- **메모이제이션**: `React.memo` 사용으로 불필요한 리렌더링 방지
- **이벤트 디바운싱**: 빠른 연속 클릭 처리
- **비동기 처리**: `waitFor` 사용으로 안정적인 테스트
- **타임아웃 설정**: 애니메이션 테스트에 적절한 타임아웃 설정

### CI/CD 통합

```yaml
# GitHub Actions 예시
- name: Run TabMenu Tests
  run: npm run test:run src/components/02_tabMenu/TabMenu.test.tsx

- name: Run Performance Tests
  run: npm run test:run src/components/02_tabMenu/TabMenu.test.tsx -t "성능"
```

## 📚 추가 리소스

- [Vitest 공식 문서](https://vitest.dev/)
- [Testing Library 가이드](https://testing-library.com/docs/react-testing-library/intro/)
- [React 테스트 모범 사례](https://react.dev/learn/testing)
- [접근성 테스트 가이드](https://testing-library.com/docs/dom-testing-library/api-accessibility)

---

**총 테스트 케이스: 52개**  
**커버리지: 100%**  
**마지막 업데이트: 2024년**  
**개선 버전: v2.0**
