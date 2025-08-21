# UI Component Library

React와 Vanilla JavaScript를 통합한 타입 안전한 UI 컴포넌트 라이브러리

## 🎯 프로젝트 개요

다양한 방식으로 UI 컴포넌트를 구현해보며 React와 Vanilla JavaScript의 장단점을 학습하는 프로젝트입니다.

## 🛠️ 기술 스택

- **Framework**: Next.js 14, React 18
- **Language**: TypeScript
- **Styling**: Vanilla Extract, Tailwind CSS
- **Testing**: Vitest, Testing Library

## 📦 구현된 컴포넌트

### 기본 UI 요소

- **아코디언** (8가지 방법) - 조건부 렌더링, CSS 애니메이션, Vanilla JS 등
- **탭메뉴** (7가지 방법) - React Hooks, DOM 조작, 검색 기능 등
- **툴팁** (6가지 방법) - 포털, 뷰포트 감지, 단일 열림 등
- **텍스트박스** (5가지 방법) - 제어/비제어, DOM 복제, 명령형 등
- **여러줄 말줄임** (3가지 방법) - Canvas API, DOM 복제, MutationObserver
- **지연 로딩** (2가지 방법) - Intersection Observer, 네이티브 lazy loading
- **무한 스크롤** (2가지 방법) - React Hooks, Vanilla JS

### 고급 UI 요소

- 횡 스크롤 박스, 스크롤 스파이, 스낵바, 모달, 팝오버, 이미지 슬라이더, 캐러셀

## 🚀 시작하기

```bash
# 저장소 클론
git clone https://github.com/sunfivemin/UIcomponent.git
cd UIcomponent

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 🧪 테스트

```bash
# 테스트 실행
npm test

# 테스트 커버리지
npm run test:coverage
```

## 🎨 주요 특징

- **타입 안전성**: TypeScript Strict Mode 적용
- **다양한 구현**: React와 Vanilla JS로 같은 기능을 다르게 구현
- **다크테마**: 완전한 다크테마 지원
- **접근성**: ARIA 속성과 키보드 네비게이션 지원
- **성능 최적화**: React.memo, useCallback, Code Splitting 적용

## 📚 학습 내용

- React Hooks와 순수 DOM 조작의 비교
- TypeScript와 Next.js 14 활용
- Compound Components, Render Props, Custom Hooks 등 고급 패턴
- Intersection Observer, Lazy Loading, ARIA 속성으로 성능 및 접근성 최적화

## 🌐 배포

- **URL**: [ui-component-pi.vercel.app](https://ui-component-pi.vercel.app)
- **플랫폼**: Vercel (자동 배포)

## 📄 라이선스

MIT License
