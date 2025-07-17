// src/app/[...item]/page.tsx - VanillaWrapper 전용 로딩 테스트

'use client';
import VanillaWrapper from '@/components/vanillaWrapper';
import { useState } from 'react';

// 🎯 진짜 React 아코디언 컴포넌트 (로딩 영향 없음)
const RealReactAccordion = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const items = [
    {
      id: 1,
      title: 'React 제목 1',
      content:
        '진짜 React로 만든 첫 번째 내용입니다. VanillaWrapper 로딩과 무관하게 동작합니다.',
    },
    {
      id: 2,
      title: 'React 제목 2',
      content:
        '진짜 React로 만든 두 번째 내용입니다. 항상 정상적으로 렌더링됩니다.',
    },
    {
      id: 3,
      title: 'React 제목 3',
      content:
        '진짜 React로 만든 세 번째 내용입니다. 독립적인 생명주기를 가집니다.',
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-2">
      {items.map(item => (
        <div key={item.id} className="border border-gray-200 rounded-lg">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 font-medium flex justify-between items-center"
          >
            {item.title}
            <span
              className={`transform transition-transform ${
                openItems.includes(item.id) ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          {openItems.includes(item.id) && (
            <div className="px-4 py-3 bg-white border-t border-gray-200">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AccordionPage = () => {
  const [vanillaLoading, setVanillaLoading] = useState(false);

  // 🔧 기본 Vanilla JS 아코디언 (로딩 제어됨)
  const multiToggleAccordionInitiator = (element: HTMLDivElement) => {
    const accordionData = [
      {
        id: 1,
        title: '기본 제목 1',
        content:
          'VanillaWrapper로 만든 첫 번째 내용입니다. loading 상태에 의해 제어됩니다.',
      },
      {
        id: 2,
        title: '기본 제목 2',
        content:
          'VanillaWrapper로 만든 두 번째 내용입니다. initiator 함수로 생성됩니다.',
      },
      {
        id: 3,
        title: '기본 제목 3',
        content:
          'VanillaWrapper로 만든 세 번째 내용입니다. 수동 DOM 조작 방식입니다.',
      },
    ];

    let openItems: number[] = [];

    const render = () => {
      element.innerHTML = `
        <div class="multi-toggle-accordion space-y-2">
          ${accordionData
            .map(
              item => `
            <div class="border border-gray-200 rounded-lg" data-id="${item.id}">
              <button class="accordion-header w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 font-medium flex justify-between items-center">
                ${item.title}
                <span class="accordion-arrow transform transition-transform ${
                  openItems.includes(item.id) ? 'rotate-180' : ''
                }">▼</span>
              </button>
              <div class="accordion-content px-4 py-3 bg-white border-t border-gray-200 ${
                openItems.includes(item.id) ? '' : 'hidden'
              }">
                <p class="text-gray-700">${item.content}</p>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      `;

      const headers = element.querySelectorAll('.accordion-header');
      headers.forEach(header => {
        header.addEventListener('click', handleClick);
      });
    };

    const handleClick = (e: Event) => {
      const button = e.currentTarget as HTMLButtonElement;
      const container = button.closest('[data-id]') as HTMLElement;
      const id = parseInt(container.dataset.id || '0');

      if (openItems.includes(id)) {
        openItems = openItems.filter(item => item !== id);
      } else {
        openItems = [...openItems, id];
      }

      render();
    };

    render();

    return () => {
      const headers = element.querySelectorAll('.accordion-header');
      headers.forEach(header => {
        header.removeEventListener('click', handleClick);
      });
    };
  };

  // 📝 단일 토글 아코디언 (로딩 제어됨)
  const singleToggleAccordionInitiator = (element: HTMLDivElement) => {
    element.innerHTML = `
      <div class="single-toggle-accordion">
        <div class="accordion-item">
          <h3 class="accordion-title bg-blue-100 px-4 py-2 cursor-pointer rounded-t border hover:bg-blue-200">
            단일 토글 제목 1
          </h3>
          <div class="accordion-panel px-4 py-2 bg-blue-50 border-x border-b hidden">
            한 번에 하나씩만 열립니다. 로딩 상태에 의해 초기화가 제어됩니다.
          </div>
        </div>
        <div class="accordion-item mt-2">
          <h3 class="accordion-title bg-blue-100 px-4 py-2 cursor-pointer rounded-t border hover:bg-blue-200">
            단일 토글 제목 2
          </h3>
          <div class="accordion-panel px-4 py-2 bg-blue-50 border-x border-b hidden">
            VanillaWrapper의 loading prop으로 생명주기가 관리됩니다.
          </div>
        </div>
        <div class="accordion-item mt-2">
          <h3 class="accordion-title bg-blue-100 px-4 py-2 cursor-pointer rounded-t border hover:bg-blue-200">
            단일 토글 제목 3
          </h3>
          <div class="accordion-panel px-4 py-2 bg-blue-50 border-x border-b hidden">
            로딩 중에는 이 컴포넌트들이 초기화되지 않습니다.
          </div>
        </div>
      </div>
    `;

    const titles = element.querySelectorAll('.accordion-title');
    titles.forEach(title => {
      title.addEventListener('click', e => {
        const panel = (e.target as HTMLElement)
          .nextElementSibling as HTMLElement;
        const isHidden = panel.classList.contains('hidden');

        element.querySelectorAll('.accordion-panel').forEach(p => {
          p.classList.add('hidden');
        });

        if (isHidden) {
          panel.classList.remove('hidden');
        }
      });
    });

    return () => {
      titles.forEach(title => {
        title.removeEventListener('click', () => {});
      });
    };
  };

  // 🃏 카드 스타일 아코디언 (로딩 제어됨)
  const cardStyleAccordionInitiator = (element: HTMLDivElement) => {
    element.innerHTML = `
      <div class="card-style-accordion">
        <div class="card shadow-sm border rounded mb-3">
          <div class="card-header bg-gray-100 px-4 py-3 border-b">
            <button class="toggle-btn w-full text-left font-medium flex justify-between items-center" data-target="card1">
              카드 스타일 제목 1
              <span class="toggle-icon text-lg font-bold text-gray-600">+</span>
            </button>
          </div>
          <div id="card1" class="card-content hidden">
            <div class="card-body px-4 py-3">
              카드 형태의 디자인입니다. VanillaWrapper loading에 의해 제어됩니다.
            </div>
          </div>
        </div>
        
        <div class="card shadow-sm border rounded mb-3">
          <div class="card-header bg-gray-100 px-4 py-3 border-b">
            <button class="toggle-btn w-full text-left font-medium flex justify-between items-center" data-target="card2">
              카드 스타일 제목 2
              <span class="toggle-icon text-lg font-bold text-gray-600">+</span>
            </button>
          </div>
          <div id="card2" class="card-content hidden">
            <div class="card-body px-4 py-3">
              + / - 아이콘으로 상태를 표현합니다. 로딩 중에는 초기화되지 않습니다.
            </div>
          </div>
        </div>
      </div>
    `;

    const buttons = element.querySelectorAll('.toggle-btn');
    buttons.forEach(button => {
      button.addEventListener('click', e => {
        const btn = e.currentTarget as HTMLButtonElement;
        const targetId = btn.getAttribute('data-target');
        const target = element.querySelector(`#${targetId}`) as HTMLElement;
        const icon = btn.querySelector('.toggle-icon') as HTMLElement;

        if (target.classList.contains('hidden')) {
          target.classList.remove('hidden');
          icon.textContent = '-';
          icon.classList.remove('text-gray-600');
          icon.classList.add('text-blue-600');
        } else {
          target.classList.add('hidden');
          icon.textContent = '+';
          icon.classList.remove('text-blue-600');
          icon.classList.add('text-gray-600');
        }
      });
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  };

  // 📚 코드 비교 예시
  const codeComparisonInitiator = (element: HTMLDivElement) => {
    element.innerHTML = `
      <div class="code-comparison">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="react-code">
            <h4 class="font-bold mb-3 text-green-700 text-lg">React 방식 (로딩 영향 없음)</h4>
            <pre class="text-xs bg-green-50 p-4 rounded-lg overflow-x-auto border border-green-200"><code class="language-typescript">// React 컴포넌트
const Accordion = () => {
  const [openItems, setOpenItems] = useState&lt;number[]&gt;([]);
  
  // 외부 loading 상태와 무관하게 동작
  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    &lt;div className="space-y-2"&gt;
      {items.map(item => (
        &lt;div key={item.id}&gt;
          &lt;button onClick={() => toggleItem(item.id)}&gt;
            {item.title}
          &lt;/button&gt;
          {openItems.includes(item.id) && (
            &lt;div&gt;{item.content}&lt;/div&gt;
          )}
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
};</code></pre>
            <div class="mt-3 p-3 bg-green-100 rounded text-sm">
              <strong>특징:</strong> 독립적인 생명주기, 외부 로딩 상태 무관
            </div>
          </div>
          
          <div class="vanilla-code">
            <h4 class="font-bold mb-3 text-blue-700 text-lg">VanillaWrapper 방식 (로딩 제어됨)</h4>
            <pre class="text-xs bg-blue-50 p-4 rounded-lg overflow-x-auto border border-blue-200"><code class="language-typescript">// VanillaWrapper 내부 로직
useEffect(() => {
  if (!isInit.current && wrapper.current && !loading) {
    // loading이 true면 실행 안 됨!
    const cleanupFn = initiator(wrapper.current);
    if (typeof cleanupFn === 'function') {
      cleanup.current = cleanupFn;
    }
    isInit.current = true;
  }
}, [initiator, loading]); // loading 의존성!

// 사용법
&lt;VanillaWrapper
  loading={vanillaLoading}  // 이것으로 제어
  initiator={(element) => {
    // 로딩 중에는 실행 안 됨
    element.innerHTML = '...';
  }}
/&gt;</code></pre>
            <div class="mt-3 p-3 bg-blue-100 rounded text-sm">
              <strong>특징:</strong> loading prop으로 initiator 실행 제어
            </div>
          </div>
        </div>
        
        <div class="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h4 class="font-bold text-yellow-800 mb-3">🔍 로딩 제어 메커니즘 비교</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 class="font-semibold text-green-700 mb-2">React 컴포넌트</h5>
              <ul class="text-yellow-700 space-y-1">
                <li>• 자체적인 상태와 생명주기</li>
                <li>• 부모의 loading 상태와 무관</li>
                <li>• 조건부 렌더링으로만 제어 가능</li>
                <li>• 항상 메모리에 존재</li>
              </ul>
            </div>
            <div>
              <h5 class="font-semibold text-blue-700 mb-2">VanillaWrapper</h5>
              <ul class="text-yellow-700 space-y-1">
                <li>• loading prop으로 생명주기 제어</li>
                <li>• loading=true면 initiator 실행 안 됨</li>
                <li>• 로딩 스피너 자동 표시</li>
                <li>• 초기화 지연/제어 가능</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          VanillaWrapper 로딩 제어 데모
        </h1>
        <p className="text-lg text-gray-600">
          React vs VanillaWrapper 로딩 메커니즘 비교
        </p>
      </div>

      {/* 🎯 React 아코디언 (로딩 영향 없음) */}
      <section className="bg-green-50 p-6 rounded-xl border border-green-200">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          🎯 React 아코디언 (로딩 영향 없음)
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <RealReactAccordion />
        </div>
        <div className="mt-4 p-3 bg-green-100 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>📍 특징:</strong> VanillaWrapper 로딩 상태와 무관하게 항상
            정상 동작합니다. 아래 로딩 테스트 버튼을 눌러도 이 컴포넌트는
            영향받지 않습니다.
          </p>
        </div>
      </section>

      {/* 🔬 VanillaWrapper 로딩 테스트 섹션 */}
      <section className="text-center bg-yellow-50 p-6 rounded-xl border border-yellow-200">
        <h3 className="text-2xl font-bold mb-6">
          🔬 VanillaWrapper 로딩 기능 테스트
        </h3>

        <div className="space-y-6">
          <button
            onClick={() => {
              setVanillaLoading(true);
              setTimeout(() => setVanillaLoading(false), 3000);
            }}
            className="px-8 py-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium text-lg"
            disabled={vanillaLoading}
          >
            {vanillaLoading
              ? 'VanillaWrapper 로딩 중... (3초)'
              : 'VanillaWrapper 로딩 테스트 시작!'}
          </button>

          <div className="bg-white p-6 rounded-lg text-sm max-w-2xl mx-auto">
            <h4 className="font-bold mb-4 text-lg">🎯 테스트 시나리오</h4>
            <div className="text-left space-y-3">
              <div className="flex items-start space-x-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                  1
                </span>
                <p>
                  <strong>위쪽 React 아코디언:</strong> 로딩과 무관하게 계속
                  동작 ✅
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                  2
                </span>
                <p>
                  <strong>아래쪽 VanillaWrapper들:</strong> 로딩 중에는 스피너
                  표시 🔄
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">
                  3
                </span>
                <p>
                  <strong>로딩 완료 후:</strong> VanillaWrapper들이 정상 초기화
                  🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔧 VanillaWrapper 아코디언들 (로딩 제어됨) */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          🔧 VanillaWrapper 아코디언들 (로딩 제어됨)
        </h2>

        <div className="space-y-8">
          {/* 기본 멀티 토글 */}
          <div>
            <VanillaWrapper
              title="기본 멀티 토글 아코디언"
              subTitle="로딩 상태로 제어됨"
              variant="demo"
              size="md"
              initiator={multiToggleAccordionInitiator}
              loading={vanillaLoading}
            />
            <div className="mt-2 p-3 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>상태:</strong> loading={`{${vanillaLoading}}`} -
                {vanillaLoading ? ' 초기화 대기 중' : ' 정상 동작 중'}
              </p>
            </div>
          </div>

          {/* 단일 토글 */}
          <div>
            <VanillaWrapper
              title="단일 토글 아코디언"
              subTitle="한 번에 하나만 열림"
              variant="demo"
              initiator={singleToggleAccordionInitiator}
              loading={vanillaLoading}
            />
            <div className="mt-2 p-3 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>특징:</strong> 로딩 중에는 이벤트 리스너가 등록되지
                않습니다.
              </p>
            </div>
          </div>

          {/* 카드 스타일 */}
          <div>
            <VanillaWrapper
              title="카드 스타일 아코디언"
              subTitle="+ / - 아이콘 사용"
              variant="demo"
              initiator={cardStyleAccordionInitiator}
              loading={vanillaLoading}
            />
            <div className="mt-2 p-3 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>제어:</strong> loading prop으로 initiator 함수 실행을
                제어합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📚 코드 비교 */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          📚 로딩 제어 메커니즘 코드 비교
        </h2>
        <VanillaWrapper
          title="React vs VanillaWrapper 로딩 처리 방식"
          subTitle="내부 구현 코드 분석"
          variant="code"
          size="lg"
          initiator={codeComparisonInitiator}
          loading={vanillaLoading}
        />
      </section>

      {/* 💡 학습 정리 */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          💡 VanillaWrapper 로딩 제어 학습 정리
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-3">🎓 핵심 학습 내용</h3>
            <ul className="text-sm space-y-2">
              <li>• VanillaWrapper의 loading prop 동작 원리</li>
              <li>• React 컴포넌트와 VanillaWrapper 생명주기 차이</li>
              <li>• initiator 함수 실행 타이밍 제어</li>
              <li>• 로딩 스피너 자동 표시 메커니즘</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-purple-700 mb-3">
              🚀 실무 활용 시나리오
            </h3>
            <ul className="text-sm space-y-2">
              <li>• 데이터 로딩 중 컴포넌트 초기화 지연</li>
              <li>• 외부 라이브러리 의존성 로딩 대기</li>
              <li>• 조건부 컴포넌트 렌더링 제어</li>
              <li>• 사용자 권한 확인 후 초기화</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-bold text-gray-800 mb-2">🔑 핵심 포인트</h4>
          <p className="text-sm text-gray-700">
            VanillaWrapper는 단순한 DOM 조작 도구가 아니라,{' '}
            <strong>생명주기를 제어할 수 있는 스마트한 컨테이너</strong>입니다.
            loading prop을 통해 vanilla JavaScript 코드의 실행 타이밍을 React
            방식으로 제어할 수 있어, 복잡한 초기화 로직이나 비동기 의존성을 가진
            컴포넌트를 안전하게 관리할 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccordionPage;
