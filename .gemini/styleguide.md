# Important

All developers on this project are Korean.  
Therefore, **please ensure all code reviews and comments are written in Korean** so that they are easily understood by the team.

# 스타일 가이드

## TypeScript
- 최대한 타입은 좁혀서 사용합니다.
- `any` 타입 사용을 지양하고 구체적인 타입을 명시합니다.
- 인터페이스와 타입을 적극 활용합니다.
- 제네릭을 활용하여 재사용 가능한 타입을 만듭니다.

## React
- 함수형 컴포넌트를 사용합니다.
- Hooks를 적절히 활용합니다.
- Props 인터페이스를 명확히 정의합니다.
- 컴포넌트는 단일 책임 원칙을 따릅니다.

## 스타일링
- Vanilla Extract를 우선적으로 사용합니다.
- CVA를 활용하여 컴포넌트 variants를 관리합니다.
- Tailwind CSS는 유틸리티 클래스로 사용합니다.
- CSS 변수를 활용하여 테마를 관리합니다.

## 테스트
- 모든 코드는 자동 테스트가 되어야 합니다.
- Vitest와 Testing Library를 사용합니다.
- 컴포넌트 테스트는 사용자 관점에서 작성합니다.
- 테스트 커버리지를 80% 이상 유지합니다.

## 성능
- React.memo를 적절히 활용합니다.
- useCallback과 useMemo를 성능 최적화에 활용합니다.
- 불필요한 리렌더링을 방지합니다.
- 번들 크기를 최적화합니다.

## 접근성
- ARIA 속성을 적절히 사용합니다.
- 키보드 네비게이션을 지원합니다.
- 색상 대비를 고려합니다.
- 스크린 리더 호환성을 확인합니다.

## 코드 품질
- ESLint 규칙을 준수합니다.
- Prettier를 사용하여 일관된 포맷팅을 유지합니다.
- 의미있는 변수명과 함수명을 사용합니다.
- 주석은 필요한 경우에만 작성합니다.

## 커밋 메시지
- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅
- `refactor:` 코드 리팩토링
- `test:` 테스트 추가
- `chore:` 빌드 업무 수정

## 리뷰 가이드라인
- 코드 리뷰는 건설적으로 작성합니다.
- 개선 사항을 구체적으로 제시합니다.
- 보안과 성능을 우선적으로 검토합니다.
- 테스트 코드도 함께 리뷰합니다. 