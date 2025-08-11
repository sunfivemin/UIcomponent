import '@testing-library/jest-dom';

// 필수 모크만 유지

// matchMedia: 일부 스타일/미디어쿼리 의존 컴포넌트 보호
if (!('matchMedia' in window)) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

// ResizeObserver: 툴팁 위치/뷰포트 계산에서 사용될 수 있어 경량 모크 제공
if (!('ResizeObserver' in global)) {
  // @ts-expect-error test mock
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
}

// getBoundingClientRect: 레이아웃 측정 기본값 제공 (필요시 테스트에서 override)
const originalGetBCR = Element.prototype.getBoundingClientRect;
Element.prototype.getBoundingClientRect = function () {
  // 기본값만 제공하고, 특정 테스트가 필요하면 jest.spyOn으로 재정의
  return {
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    bottom: 100,
    right: 100,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  } as DOMRect;
};

// window.scrollTo: 호출만 가능한 더미
if (!('scrollTo' in window)) {
  // @ts-expect-error test mock
  window.scrollTo = vi.fn();
}

// react-dom portal: JSDOM에서 포털은 동일 노드 렌더로 대체
vi.mock('react-dom', async () => {
  const actual = await vi.importActual<typeof import('react-dom')>('react-dom');
  return {
    ...actual,
    createPortal: (children: any) => children,
  } as typeof import('react-dom');
});
