import React from "react";
import Markdown from "react-markdown";

const README_CONTENT = `# UI요소 만들기 강의 코드 - 보일러플레이트

## 🎨 스타일링 시스템

이 프로젝트는 **Vanilla Extract**와 **CVA (Class Variance Authority)**를 사용하여 현대적이고 타입 안전한 스타일링 시스템을 구축했습니다.

### 사용된 기술

- **Vanilla Extract**: CSS-in-JS의 장점과 타입 안전성을 모두 제공
- **CVA**: 컴포넌트의 다양한 상태(variants)를 체계적으로 관리
- **Tailwind CSS**: 유틸리티 클래스 기반의 빠른 스타일링
- **clsx + tailwind-merge**: 조건부 클래스와 클래스 충돌 해결

### Getting Started

\`\`\`bash
cd uiComponents
yarn install
yarn dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)에 접속하여 결과를 확인합니다.`;
const MainPage = () => (
  <div className="markdown">
    <Markdown>{README_CONTENT}</Markdown>
  </div>
);

export default MainPage;
