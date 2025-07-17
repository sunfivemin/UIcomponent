---

## 🛠️ 사용 기술

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Vanilla Extract**: 타입 안전한 CSS-in-JS
- **CVA (Class Variance Authority)**: 컴포넌트 variant 관리
- **Tailwind CSS**: 빠른 유틸리티 스타일링
- **Vitest, Testing Library**: 테스트 환경
- **ESLint, Prettier**: 코드 품질 관리

---

## 🧩 컴포넌트 개발 가이드

- **기능별 폴더(01_accordion 등)**에 각 UI 컴포넌트 파일을 생성
- **공통 래퍼/유틸 컴포넌트**는 `components/` 루트에 위치 (예: `vanillaWrapper.tsx`)
- **커스텀 훅**은 `hook/`에, 바닐라 JS 유틸은 `hook/vanilla/`에 위치
- **비즈니스 로직/외부 API**는 `service/`에 위치
- **전역 상태**는 `context/`에 위치

---

## 🏃‍♂️ 시작하기

### 1. 패키지 설치

```bash
yarn install
```

### 2. 개발 서버 실행

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

---

## 📝 컴포넌트 추가/확장 방법

1. `src/components/` 하위에 기능별 폴더 생성 (예: `10_modal/Modal.tsx`)
2. CVA, Tailwind, Vanilla Extract 등으로 스타일링
3. 필요시 바닐라 JS 버전은 `vanillaWrapper.tsx`와 함께 구현
4. `src/routes.ts`에 라우트 및 컴포넌트 연결

---

## 💡 스타일 가이드

- **Vanilla Extract**: 전역 스타일, 디자인 토큰, 복잡한 스타일
- **CVA**: 컴포넌트 variant, 조건부 스타일링
- **Tailwind CSS**: 유틸리티 클래스, 빠른 프로토타이핑

---

## 📚 실무 기준의 장점

- **타입 안전성**: TypeScript 기반, 컴파일 타임 오류 방지
- **확장성**: 기능별 폴더 구조, 컴포넌트/훅/유틸 분리
- **유지보수성**: 명확한 역할 분리, 폴더만 봐도 구조 파악 가능
- **테스트**: Vitest, Testing Library로 컴포넌트 단위 테스트 가능
- **실무 협업**: Git Flow, ESLint, Prettier 등 협업 표준 적용

---

## 👏 컨트리뷰션

- 새로운 UI 컴포넌트, 훅, 서비스 로직 등 자유롭게 추가/확장 가능
- PR, 이슈 환영!

---

## 📦 기타

- **README.md**는 항상 최신 구조와 개발 가이드를 반영합니다.
- 궁금한 점은 언제든 이슈로 남겨주세요!
