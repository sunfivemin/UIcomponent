// 실제 D3.js & Chart.js 구현 예시

'use client';
import { useState, useEffect, useRef } from 'react';
import VanillaWrapper from '@/components/common/vanillaWrapper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartExamplesPage = () => {
  // 📊 실제 Chart.js 데이터
  const lineChartData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '매출',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1,
      },
      {
        label: '비용',
        data: [8, 15, 2, 4, 1, 2],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // 🎨 다양한 색상 옵션들
  const gradientBarData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '그라데이션 바',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.8)', // 단일 색상
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const rainbowBarData = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [
      {
        label: '무지개 색상',
        data: [30, 45, 60, 35, 50, 25],
        backgroundColor: [
          '#FF6B6B', // 빨강
          '#4ECDC4', // 청록
          '#45B7D1', // 하늘색
          '#96CEB4', // 연두
          '#FFEAA7', // 연노랑
          '#DDA0DD', // 연보라
        ],
        borderColor: [
          '#FF5252',
          '#26A69A',
          '#29B6F6',
          '#66BB6A',
          '#FFD54F',
          '#AB47BC',
        ],
        borderWidth: 2,
      },
    ],
  };

  const pastelBarData = {
    labels: ['봄', '여름', '가을', '겨울'],
    datasets: [
      {
        label: '파스텔 톤',
        data: [40, 70, 55, 30],
        backgroundColor: [
          'rgba(255, 182, 193, 0.7)', // 파스텔 핑크
          'rgba(173, 216, 230, 0.7)', // 파스텔 블루
          'rgba(255, 218, 185, 0.7)', // 파스텔 오렌지
          'rgba(221, 160, 221, 0.7)', // 파스텔 보라
        ],
        borderColor: [
          'rgba(255, 182, 193, 1)',
          'rgba(173, 216, 230, 1)',
          'rgba(255, 218, 185, 1)',
          'rgba(221, 160, 221, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js 차트 예시',
      },
    },
  };

  // 📊 방법 1: React + D3.js (npm install 방식)
  const ReactD3Chart = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
      if (!svgRef.current) return;

      // 실제 환경에서는 import * as d3 from 'd3';
      // 여기서는 시뮬레이션
      const mockD3Implementation = () => {
        const svg = svgRef.current!;
        const data = [12, 5, 6, 6, 9, 10];

        // SVG 초기화
        svg.innerHTML = '';
        svg.setAttribute('width', '300');
        svg.setAttribute('height', '200');

        // 바 차트 그리기 (D3 스타일 시뮬레이션)
        data.forEach((value, index) => {
          const rect = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'rect'
          );
          rect.setAttribute('x', (index * 40 + 10).toString());
          rect.setAttribute('y', (200 - value * 10).toString());
          rect.setAttribute('width', '30');
          rect.setAttribute('height', (value * 10).toString());
          rect.setAttribute('fill', '#3b82f6');
          svg.appendChild(rect);
        });
      };

      mockD3Implementation();
    }, []);
    // D3.js는 element.appendChild(), element.setAttribute() 같은 DOM API를 직접 사용
    // React는 Virtual DOM을 통해 DOM을 관리하므로 충돌 발생
    // React가 모르는 사이에 DOM이 변경되면 예상치 못한 버그 발생
    return (
      <div>
        <h4 className="font-bold mb-2">React + D3.js (npm install)</h4>
        <svg ref={svgRef} className="border border-gray-300 rounded"></svg>
        <p className="text-xs text-gray-600 mt-2">
          실제: import * as d3 from 'd3'; 필요
        </p>
      </div>
    );
  };

  // 📈 방법 2: React + Chart.js (실제 라이브러리 사용)
  const ReactChartJS = () => {
    return (
      <div>
        <h4 className="font-bold mb-2">React + Chart.js (실제 라이브러리)</h4>
        <div className="space-y-6">
          <div>
            <h5 className="text-sm font-semibold mb-2">라인 차트</h5>
            <Line data={lineChartData} options={chartOptions} />
          </div>

          <div>
            <h5 className="text-sm font-semibold mb-2">
              기본 바 차트 (개별 색상)
            </h5>
            <Bar data={barChartData} options={chartOptions} />
          </div>

          <div>
            <h5 className="text-sm font-semibold mb-2">단일 색상 바 차트</h5>
            <Bar data={gradientBarData} options={chartOptions} />
          </div>

          <div>
            <h5 className="text-sm font-semibold mb-2">무지개 색상 바 차트</h5>
            <Bar data={rainbowBarData} options={chartOptions} />
          </div>

          <div>
            <h5 className="text-sm font-semibold mb-2">파스텔 톤 바 차트</h5>
            <Bar data={pastelBarData} options={chartOptions} />
          </div>

          <div>
            <h5 className="text-sm font-semibold mb-2">도넛 차트</h5>
            <Doughnut data={doughnutChartData} options={chartOptions} />
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          실제 Chart.js 라이브러리 사용 중
        </p>
      </div>
    );
  };

  // 🔧 방법 3: VanillaWrapper + D3.js (npm install)
  const vanillaD3WithNPM = (element: HTMLDivElement) => {
    element.innerHTML = `
      <div>
        <h4 class="font-bold mb-2">VanillaWrapper + D3.js (npm install)</h4>
        <svg id="d3-chart" width="300" height="200" class="border border-gray-300 rounded"></svg>
        <p class="text-xs text-gray-600 mt-2">실제: import * as d3 from 'd3'; 후 VanillaWrapper에서 사용</p>
      </div>
    `;

    // 실제 환경에서는 이렇게:
    // import * as d3 from 'd3';
    // const svg = d3.select(element.querySelector('#d3-chart'));

    // 시뮬레이션
    const svg = element.querySelector('#d3-chart') as SVGElement;
    const data = [8, 12, 7, 14, 10];

    data.forEach((value, index) => {
      const circle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
      circle.setAttribute('cx', (index * 50 + 30).toString());
      circle.setAttribute('cy', (200 - value * 10).toString());
      circle.setAttribute('r', value.toString());
      circle.setAttribute('fill', '#8b5cf6');
      svg.appendChild(circle);
    });

    return () => {
      svg.innerHTML = '';
    };
  };

  // 🌐 방법 4: VanillaWrapper + CDN 로드
  const vanillaWithCDN = (element: HTMLDivElement) => {
    element.innerHTML = `
      <div>
        <h4 class="font-bold mb-2">VanillaWrapper + CDN 방식</h4>
        <div id="cdn-chart" class="border border-gray-300 rounded h-48 flex items-center justify-center">
          <span class="text-gray-500">라이브러리 로딩 중...</span>
        </div>
        <p class="text-xs text-gray-600 mt-2">CDN에서 동적으로 D3.js 로드</p>
      </div>
    `;

    // CDN 스크립트 동적 로드 시뮬레이션
    const loadLibrarySimulation = () => {
      const chartDiv = element.querySelector('#cdn-chart') as HTMLDivElement;

      // 실제로는 이렇게:
      // const script = document.createElement('script');
      // script.src = 'https://d3js.org/d3.v7.min.js';
      // script.onload = () => { /* D3 코드 */ };
      // document.head.appendChild(script);

      // 시뮬레이션: 2초 후 차트 표시
      setTimeout(() => {
        chartDiv.innerHTML = `
          <div class="p-4">
            <div class="flex space-x-2 items-end">
              <div class="bg-red-500 w-8" style="height: 60px;"></div>
              <div class="bg-red-500 w-8" style="height: 80px;"></div>
              <div class="bg-red-500 w-8" style="height: 40px;"></div>
              <div class="bg-red-500 w-8" style="height: 100px;"></div>
            </div>
            <p class="text-sm text-gray-600 mt-2">CDN에서 로드된 차트</p>
          </div>
        `;
      }, 2000);
    };

    loadLibrarySimulation();

    return () => {
      // CDN 스크립트 정리 (실제 환경에서)
    };
  };

  // 🔗 방법 5: 레거시 Vanilla JS 통합
  const legacyVanillaIntegration = (element: HTMLDivElement) => {
    element.innerHTML = `
      <div>
        <h4 class="font-bold mb-2">레거시 Vanilla JS 통합</h4>
        <div id="legacy-chart" class="border border-gray-300 rounded p-4"></div>
        <p class="text-xs text-gray-600 mt-2">기존 Vanilla JS 차트 라이브러리 재사용</p>
      </div>
    `;

    // 레거시 차트 라이브러리 시뮬레이션
    const legacyChartLib = {
      create: (container: HTMLElement, data: number[]) => {
        const maxValue = Math.max(...data);
        container.innerHTML = `
          <div class="space-y-2">
            ${data
              .map(
                (value, index) => `
              <div class="flex items-center space-x-2">
                <span class="w-12 text-sm">Item ${index + 1}</span>
                <div class="flex-1 bg-gray-200 rounded h-4">
                  <div class="bg-yellow-500 h-4 rounded transition-all duration-1000" 
                       style="width: ${(value / maxValue) * 100}%"></div>
                </div>
                <span class="text-sm">${value}</span>
              </div>
            `
              )
              .join('')}
          </div>
        `;
      },
    };

    const chartContainer = element.querySelector(
      '#legacy-chart'
    ) as HTMLElement;
    legacyChartLib.create(chartContainer, [30, 80, 45, 60, 90]);

    return () => {
      chartContainer.innerHTML = '';
    };
  };

  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          실제 차트 라이브러리 통합 방법들
        </h1>
        <p className="text-lg text-gray-600">
          D3.js, Chart.js를 React와 VanillaWrapper에서 사용하는 다양한 방법
        </p>
      </div>

      {/* React 방식들 */}
      <section className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          React 방식 (npm install)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <ReactD3Chart />
            <div className="mt-4 bg-green-50 p-3 rounded text-sm">
              <strong>설치:</strong> npm install d3 @types/d3
              <br />
              <strong>특징:</strong> React 생명주기와 완전 통합
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <ReactChartJS />
            <div className="mt-4 bg-green-50 p-3 rounded text-sm">
              <strong>설치:</strong> npm install chart.js react-chartjs-2
              <br />
              <strong>특징:</strong> React 래퍼 컴포넌트 제공
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg">
          <h3 className="font-bold text-green-700 mb-2">
            React 방식 코드 예시
          </h3>
          <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
            <code>{`// package.json
{
  "dependencies": {
    "d3": "^7.8.5",
    "@types/d3": "^7.4.0",
    "chart.js": "^4.4.0",
    "react-chartjs-2": "^5.2.0"
  }
}

// React D3 컴포넌트
import * as d3 from 'd3';

const D3Chart = ({ data }) => {
  const svgRef = useRef();
  
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    // D3 차트 로직
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', d => d.value * 10)
      .attr('height', 20);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

// React Chart.js 컴포넌트
import { Line } from 'react-chartjs-2';

const ChartJSComponent = ({ data }) => {
  return <Line data={data} options={options} />;
};`}</code>
          </pre>
        </div>
      </section>

      {/* VanillaWrapper 방식들 */}
      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          VanillaWrapper 방식들
        </h2>

        <div className="space-y-6">
          {/* npm install 방식 */}
          <div className="bg-white p-4 rounded-lg">
            <VanillaWrapper
              title="VanillaWrapper + npm install"
              initiator={vanillaD3WithNPM}
            />
            <div className="mt-4 bg-blue-50 p-3 rounded text-sm">
              <strong>장점:</strong> 타입 안전성, 번들러 최적화
              <br />
              <strong>단점:</strong> 여전히 npm install 필요
            </div>
          </div>

          {/* CDN 방식 */}
          <div className="bg-white p-4 rounded-lg">
            <VanillaWrapper
              title="VanillaWrapper + CDN"
              initiator={vanillaWithCDN}
            />
            <div className="mt-4 bg-blue-50 p-3 rounded text-sm">
              <strong>장점:</strong> npm install 불필요, 동적 로드
              <br />
              <strong>단점:</strong> 네트워크 의존, 타입 안전성 부족
            </div>
          </div>

          {/* 레거시 통합 */}
          <div className="bg-white p-4 rounded-lg">
            <VanillaWrapper
              title="레거시 JS 라이브러리 통합"
              initiator={legacyVanillaIntegration}
            />
            <div className="mt-4 bg-blue-50 p-3 rounded text-sm">
              <strong>장점:</strong> 기존 코드 재사용, 마이그레이션 용이
              <br />
              <strong>사용 예:</strong> jQuery 플러그인, 기존 Vanilla JS 차트
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg">
          <h3 className="font-bold text-blue-700 mb-2">
            VanillaWrapper 방식 코드 예시
          </h3>
          <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
            <code>{`// 방법 1: npm install + VanillaWrapper
import * as d3 from 'd3';

const d3Initiator = (element: HTMLDivElement) => {
  const svg = d3.select(element).append('svg');
  svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r', 5);
    
  return () => svg.remove(); // cleanup
};

// 방법 2: CDN + VanillaWrapper
const cdnInitiator = (element: HTMLDivElement) => {
  const script = document.createElement('script');
  script.src = 'https://d3js.org/d3.v7.min.js';
  script.onload = () => {
    // @ts-ignore
    const svg = d3.select(element).append('svg');
    // 차트 로직
  };
  document.head.appendChild(script);
  
  return () => {
    // 스크립트 정리
    document.head.removeChild(script);
  };
};

// 방법 3: 레거시 라이브러리 통합
const legacyInitiator = (element: HTMLDivElement) => {
  // 기존 jQuery 플러그인이나 Vanilla JS 라이브러리 사용
  window.legacyChartLib.create(element, options);
  
  return () => {
    window.legacyChartLib.destroy(element);
  };
};

// 사용법
<VanillaWrapper initiator={d3Initiator} />
<VanillaWrapper initiator={cdnInitiator} />
<VanillaWrapper initiator={legacyInitiator} />`}</code>
          </pre>
        </div>
      </section>

      {/* 비교 및 권장사항 */}
      <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6">
          어떤 방식을 선택할까?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-semibold">방식</th>
                <th className="text-left p-3 font-semibold">npm install</th>
                <th className="text-left p-3 font-semibold">타입 안전성</th>
                <th className="text-left p-3 font-semibold">번들 크기</th>
                <th className="text-left p-3 font-semibold">추천 상황</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">React + npm</td>
                <td className="p-3">✅ 필요</td>
                <td className="p-3">✅ 완벽</td>
                <td className="p-3">🔶 보통</td>
                <td className="p-3">일반적인 프로젝트</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">VanillaWrapper + npm</td>
                <td className="p-3">✅ 필요</td>
                <td className="p-3">✅ 완벽</td>
                <td className="p-3">🔶 보통</td>
                <td className="p-3">복잡한 차트, 세밀한 제어</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">VanillaWrapper + CDN</td>
                <td className="p-3">❌ 불필요</td>
                <td className="p-3">❌ 부족</td>
                <td className="p-3">✅ 작음</td>
                <td className="p-3">프로토타입, 간단한 차트</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">레거시 통합</td>
                <td className="p-3">🔶 상황따라</td>
                <td className="p-3">❌ 부족</td>
                <td className="p-3">🔶 상황따라</td>
                <td className="p-3">기존 코드 재사용, 마이그레이션</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-3">
              ✅ React + npm 추천
            </h3>
            <ul className="text-sm space-y-1">
              <li>• 새로운 프로젝트</li>
              <li>• 팀 개발 환경</li>
              <li>• 타입 안전성 중요</li>
              <li>• 장기 유지보수</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-3">
              🔧 VanillaWrapper 추천
            </h3>
            <ul className="text-sm space-y-1">
              <li>• 기존 Vanilla JS 차트 재사용</li>
              <li>• 매우 복잡한 커스터마이징</li>
              <li>• React 래퍼가 없는 라이브러리</li>
              <li>• 성능이 극도로 중요한 경우</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChartExamplesPage;
