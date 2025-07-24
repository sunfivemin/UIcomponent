#!/bin/bash

# Accordion Component Test Runner
# 이 스크립트는 아코디언 컴포넌트의 테스트를 실행합니다.

echo "🎯 아코디언 컴포넌트 테스트 실행 중..."
echo "=================================="

# 테스트 실행
npm run test:run src/components/01_accordion/Accordion.test.tsx

# 결과 확인
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 모든 테스트가 성공적으로 통과했습니다!"
    echo ""
    echo "📊 테스트 결과 요약:"
    # ⚠️ 주의: 테스트 케이스 수가 변경될 경우 이 부분을 수동으로 업데이트해야 합니다.
    # (선택) npm run test -- --reporter=json 옵션을 사용하여 테스트 결과를 파싱하고 
    # 동적으로 요약을 생성하는 방식을 도입할 수도 있습니다.
    echo "   - ConditionalAccordion: 7개 테스트"
    echo "   - AccordionCollection: 4개 테스트"
    echo "   - Integration: 2개 테스트"
    echo "   - 총 13개 테스트 통과"
else
    echo ""
    echo "❌ 일부 테스트가 실패했습니다."
    echo "   자세한 내용은 위의 오류 메시지를 확인하세요."
fi

echo ""
echo "🔧 추가 명령어:"
echo "   - UI 모드로 테스트: npm run test:ui"
echo "   - 전체 테스트 실행: npm run test:run"
echo "   - 커버리지 확인: npm run test:coverage" 