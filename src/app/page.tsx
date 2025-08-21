import React from 'react';

const MainPage = () => (
  <div className="p-8 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-foreground">
      🎨 UI 컴포넌트 모음
    </h1>
    <p className="text-lg text-muted-foreground mb-8">
      다양한 방식으로 구현한 React 컴포넌트들을 확인해보세요.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="bg-card p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          📚 학습 내용
        </h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-foreground">
                React vs Vanilla JS
              </h4>
              <p className="text-sm text-muted-foreground">
                아코디언, 탭메뉴, 툴팁 등을 React Hooks와 순수 DOM 조작으로 각각
                구현
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-foreground">최신 기술 스택</h4>
              <p className="text-sm text-muted-foreground">
                TypeScript로 타입 안전성 확보, Next.js 14 App Router 활용
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-foreground">고급 패턴</h4>
              <p className="text-sm text-muted-foreground">
                Compound Components, Render Props, Custom Hooks 등 고급 React
                패턴 학습
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-foreground">성능 & 접근성</h4>
              <p className="text-sm text-muted-foreground">
                Intersection Observer, Lazy Loading, ARIA 속성으로 최적화
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          🛠️ 사용 기술
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">
                VE
              </span>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Vanilla Extract</h4>
              <p className="text-sm text-muted-foreground">
                타입 안전한 CSS-in-JS
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
              <span className="text-cyan-600 dark:text-cyan-400 text-sm font-bold">
                TW
              </span>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Tailwind CSS</h4>
              <p className="text-sm text-muted-foreground">
                유틸리티 기반 스타일링
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 text-sm font-bold">
                VT
              </span>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Vitest</h4>
              <p className="text-sm text-muted-foreground">
                Vite 기반 초고속 테스트 러너 (Jest 대체)
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">
                TL
              </span>
            </div>
            <div>
              <h4 className="font-medium text-foreground">Testing Library</h4>
              <p className="text-sm text-muted-foreground">
                React 컴포넌트 테스트 유틸리티 (render, screen, fireEvent)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-card p-6 rounded-lg mb-8 border">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        📖 구현된 컴포넌트
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-foreground mb-2">기본 UI 요소</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• 아코디언 (6가지 방법)</li>
            <li>• 탭메뉴 (4가지 방법)</li>
            <li>• 툴팁 (6가지 방법)</li>
            <li>• 반응형 텍스트박스</li>
            <li>• 여러줄 말줄임</li>
            <li>• 지연 로딩</li>
            <li>• 무한 스크롤</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-2">고급 UI 요소</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• 횡 스크롤 박스</li>
            <li>• 스크롤 스파이</li>
            <li>• 스낵바</li>
            <li>• 모달</li>
            <li>• 팝오버</li>
            <li>• 이미지 슬라이드</li>
            <li>• 캐러셀</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-card p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        🎯 구현 방법
      </h2>
      <div className="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-foreground mb-3">React 방식</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • <strong>조건부 렌더링</strong> - 상태에 따른 DOM 관리
            </li>
            <li>
              • <strong>CSS Display</strong> - 간단한 상태 전환
            </li>
            <li>
              • <strong>CSS 애니메이션</strong> - 부드러운 전환 효과
            </li>
            <li>
              • <strong>HTML Radio</strong> - CSS만으로 상태 관리
            </li>
            <li>
              • <strong>검색 기능</strong> - 동적 필터링
            </li>
            <li>
              • <strong>다중 선택</strong> - 복잡한 상호작용
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">
            Vanilla JS 방식
          </h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              • <strong>DOM 조작</strong> - 직접적인 요소 제어
            </li>
            <li>
              • <strong>이벤트 리스너</strong> - 사용자 상호작용 처리
            </li>
            <li>
              • <strong>Intersection Observer</strong> - 스크롤 감지
            </li>
            <li>
              • <strong>CSS 클래스 토글</strong> - 상태 변경
            </li>
            <li>
              • <strong>데이터 페칭</strong> - 비동기 처리
            </li>
            <li>
              • <strong>성능 최적화</strong> - 메모리 효율성
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
