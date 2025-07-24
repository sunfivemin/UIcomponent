import React from 'react';
import Markdown from 'react-markdown';

const README_CONTENT = `# 🎨 UI 컴포넌트 모음

**다양한 방식으로 구현한 React 컴포넌트들**

안녕하세요! 이 프로젝트는 정재남 강사님의 인프런 강의를 따라하면서 만든 UI 컴포넌트 모음입니다. 같은 기능을 여러 가지 다른 방법으로 구현해보면서 각각의 장단점을 직접 체험해볼 수 있어요.

## 📚 이 프로젝트의 시작

[정재남 강사님의 인프런 강의](https://www.inflearn.com/course/react-vanillajs-ui%EC%9A%94%EC%86%8C%EB%A7%8C%EB%93%A4%EA%B8%B0-part1/dashboard) "[React / VanillaJS] UI 요소 만들기 Part 1"과 [Part 2](https://www.inflearn.com/course/react-vanillajs-ui%EC%9A%94%EC%86%8C-%EC%A7%81%EC%A0%91%EB%A7%8C%EB%93%A4%EA%B8%B0-part2/dashboard)를 보면서 만든 프로젝트예요.

### 🎯 강의에서 배운 것들
- React와 순수 JavaScript로 같은 UI를 다르게 만들어보기
- 실제로 써볼 수 있는 코드들
- 기초부터 차근차근 배우기
- TypeScript, Next.js 14 같은 최신 기술 써보기
- Headless, Compound 같은 고급 패턴도 배우기

### 📖 강의 내용

#### **Part 1** - 기본 UI 요소들 (9개)
1. **아코디언** - 6가지 방법으로 만들어보기
2. **탭메뉴** - 4가지 방법으로 만들어보기
3. **툴팁** - 6가지 방법으로 만들어보기
4. **반응형 텍스트박스** - 4가지 방법으로 만들어보기
5. **여러줄 말줄임** - 4가지 방법으로 만들어보기
6. **지연 로딩** - React랑 순수 JavaScript로
7. **무한 스크롤** - React랑 순수 JavaScript로
8. **횡 스크롤 박스** - React랑 순수 JavaScript로
9. **스크롤 스파이** - 4가지 방법으로 만들어보기

#### **Part 2** - 조금 더 복잡한 UI 요소들 (9개)
1. **스낵바** - Context, Portal, 순수 JavaScript로
2. **모달** - Context, Portal, HTML Dialog로
3. **팝오버** - Content, Portal, HTML Dialog로
4. **이미지 슬라이드** - 순수 JavaScript, React, CSS Scroll로
5. **캐러셀** - 순수 JavaScript, React, 3D 버전도
6. **갤러리** - 캐러셀 재사용해서, 이미지 뷰어도
7. **셀렉트 박스** - Headless, Compound 패턴 써보기
8. **자동 완성** - 셀렉트 박스 재사용해서, 비동기 처리도
9. **D&D 리스트** - Draggable 속성 써서 드래그 앤 드롭

## ✨ 이 프로젝트의 특징

### 🛡️ 타입 안전성
TypeScript를 써서 컴파일할 때 오류를 미리 잡아줘요. IDE에서 자동완성도 잘 되고요.

### 🎯 다양한 구현 방법
- **조건부 렌더링**: 메모리 아끼면서 DOM 관리
- **CSS Display**: 간단하고 빠르게 상태 바꾸기
- **CSS 애니메이션**: 부드럽게 전환 효과 주기
- **순수 JavaScript**: React 없이도 만들어보기
- **HTML Radio**: CSS만으로 상태 관리하기
- **검색 기능**: 동적으로 필터링하기
- **다중 선택**: 복잡한 상호작용도 해보기

### 🚀 성능 최적화
React.memo로 불필요한 리렌더링 막고, CSS-in-JS로 번들 크기도 줄이고, 지연 로딩이랑 무한 스크롤도 구현해봤어요.

## 🎨 스타일링

### 사용한 기술들

#### **Vanilla Extract** 🎯
타입 안전한 CSS-in-JS예요. 컴파일할 때 CSS가 생성되고, 런타임 오버헤드도 없어요. CSS 변수도 쓸 수 있고, 안 쓰는 스타일은 자동으로 제거해줘요.

#### **CVA (Class Variance Authority)** 🎨
컴포넌트의 다양한 상태를 체계적으로 관리해줘요. 클래스를 조합할 수 있고, 타입 안전성도 보장해줘요.

#### **Tailwind CSS** ⚡
유틸리티 클래스로 빠르게 스타일링할 수 있어요. 일관된 디자인을 강제하고, 반응형도 쉽게 만들 수 있어요.

#### **clsx + tailwind-merge** 🔧
조건부 클래스와 클래스 충돌을 해결해줘요. 타입 안전성도 있고, 중복 클래스도 제거해줘요.

## 📚 컴포넌트들

### 지금 구현된 것들

1. **아코디언** - 8가지 방법으로 구현
2. **탭메뉴** - 7가지 방법으로 구현
3. **툴팁** - 다양한 위치와 스타일
4. **반응형 텍스트박스** - 적응형 입력 필드
5. **여러줄 말줄임** - 텍스트 오버플로우 처리
6. **지연 로딩** - 성능 최적화
7. **무한 스크롤** - 대용량 데이터 처리
8. **횡 스크롤 박스** - 가로 스크롤
9. **스크롤 스파이** - 스크롤 기반 네비게이션
10. **차트** - 데이터 시각화

### 앞으로 만들 예정 (Part 2 기반)

- **스낵바** - Context, Portal, 순수 JavaScript로
- **모달** - Context, Portal, HTML Dialog로
- **팝오버** - Content, Portal, HTML Dialog로
- **이미지 슬라이드** - 순수 JavaScript, React, CSS Scroll로
- **캐러셀** - 순수 JavaScript, React, 3D 버전
- **갤러리** - 캐러셀 재사용해서, 이미지 뷰어
- **셀렉트 박스** - Headless, Compound 패턴
- **자동 완성** - 셀렉트 박스 재사용해서, 비동기 처리
- **D&D 리스트** - Draggable 속성으로 드래그 앤 드롭

## 🚀 시작하기

### 1. 프로젝트 가져오기
\`\`\`bash
git clone <repository-url>
cd UIcomponent
\`\`\`

### 2. 패키지 설치
\`\`\`bash
yarn install
\`\`\`

### 3. 개발 서버 실행
\`\`\`bash
yarn dev
\`\`\`

### 4. 브라우저에서 확인
[http://localhost:3000](http://localhost:3000)에 접속해서 확인해보세요.

## 🧪 테스트

### 테스트 실행하기
\`\`\`bash
# 전체 테스트
yarn test:run

# 특정 컴포넌트만 테스트
yarn test src/components/01_accordion/Accordion.test.tsx
yarn test src/components/02_tabMenu/TabMenu.test.tsx

# 테스트 UI로 보기
yarn test:ui
\`\`\`

### 테스트 현황
- **아코디언**: 13개 테스트
- **탭메뉴**: 48개 테스트
- **총 61개 테스트** 모두 통과! 🎉
- **Vitest + Testing Library** 사용

## 📖 학습 포인트

### 각 컴포넌트에서 배울 수 있는 것들

1. **구현 방법 비교**: 같은 기능을 다른 방법으로 만들어보기
2. **성능 분석**: 각 방법의 장단점 이해하기
3. **접근성**: ARIA 속성과 키보드 네비게이션
4. **반응형**: 다양한 화면 크기 대응하기
5. **애니메이션**: CSS와 JavaScript 애니메이션

### 코드 품질 관리

- **ESLint**: 코드 스타일 통일
- **TypeScript**: 타입 안전성
- **Vitest**: 빠른 테스트
- **Testing Library**: 사용자 관점에서 테스트

## 🤝 기여하기

1. **Fork** 하기
2. **브랜치** 만들기 (\`git checkout -b feature/새로운기능\`)
3. **커밋** 하기 (\`git commit -m '새로운 기능 추가'\`)
4. **푸시** 하기 (\`git push origin feature/새로운기능\`)
5. **Pull Request** 만들기

## 📄 라이선스

MIT 라이선스로 배포됩니다.

## 🙏 감사합니다

- **[정재남 강사님](https://www.inflearn.com/course/react-vanillajs-ui%EC%9A%94%EC%86%8C%EB%A7%8C%EB%93%A4%EA%B8%B0-part1/dashboard)** - 정말 좋은 강의 만들어주셔서 감사합니다!
- **Vanilla Extract** 팀
- **CVA** 개발자들
- **Tailwind CSS** 커뮤니티

---

**즐거운 코딩 되세요! 🎉**`;

const MainPage = () => (
  <div className="markdown">
    <Markdown>{README_CONTENT}</Markdown>
  </div>
);

export default MainPage;
