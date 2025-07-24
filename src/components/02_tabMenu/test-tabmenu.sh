#!/bin/bash

echo "🧪 탭메뉴 컴포넌트 테스트 실행 중..."
echo "=================================="

# 탭메뉴 테스트 실행
npm run test:run src/components/02_tabMenu/TabMenu.test.tsx

echo ""
echo "✅ 탭메뉴 테스트 완료!"
echo ""
echo "📊 테스트 결과 요약:"
echo "- TabMenu (기본 컴포넌트): 6개 테스트"
echo "- TabMenuConditional (조건부 렌더링): 3개 테스트"
echo "- TabMenuDisplay (CSS Display): 3개 테스트"
echo "- TabMenuAnimated (애니메이션): 3개 테스트"
echo "- TabMenuVanilla (Vanilla JS): 2개 테스트"
echo "- TabMenuRadio (라디오 버튼): 3개 테스트"
echo "- TabMenuSearchable (검색 가능): 4개 테스트"
echo "- TabMenuMultiple (다중 선택): 6개 테스트"
echo "- TabMenu Integration: 2개 테스트"
echo ""
echo "총 32개 테스트 케이스" 