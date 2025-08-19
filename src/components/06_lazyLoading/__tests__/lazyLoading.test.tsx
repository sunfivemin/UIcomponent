import { render, screen, act } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import ReactIntersectionPage from '../1_react-intersection';
import VanillaJSPage from '../2_vanilla';

// Intersection Observer Mock
const mockIntersectionObserver = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  // Intersection Observer Mock 설정
  global.IntersectionObserver = mockIntersectionObserver;
  mockIntersectionObserver.mockReturnValue({
    observe: vi.fn(),
    disconnect: mockDisconnect,
  });

  // HTMLImageElement.prototype.loading Mock
  Object.defineProperty(global.HTMLImageElement.prototype, 'loading', {
    writable: true,
    configurable: true,
    value: 'lazy',
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('ReactIntersectionPage - React Intersection Observer', () => {
  it('컴포넌트가 렌더링되어야 한다', () => {
    render(<ReactIntersectionPage />);

    expect(screen.getByText('React Intersection Observer')).toBeInTheDocument();
    expect(
      screen.getByText(
        '네이티브 Lazy Loading + Intersection Observer를 활용한 이미지 지연 로딩'
      )
    ).toBeInTheDocument();
  });

  it('이미지들이 올바른 속성을 가져야 한다', () => {
    render(<ReactIntersectionPage />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);

    images.forEach(img => {
      expect(img).toHaveAttribute('src');
      expect(img).toHaveAttribute('loading', 'lazy');
      expect(img).toHaveAttribute('alt', '');
    });
  });

  it('Intersection Observer가 생성되어야 한다', () => {
    render(<ReactIntersectionPage />);

    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('이미지들이 렌더링되어야 한다', () => {
    render(<ReactIntersectionPage />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });
});

describe('VanillaJSPage - Vanilla JS', () => {
  it('컴포넌트가 렌더링되어야 한다', () => {
    render(<VanillaJSPage />);

    expect(screen.getByText('Vanilla JS Lazy Loading')).toBeInTheDocument();
    expect(
      screen.getByText(
        '순수 JavaScript와 Intersection Observer를 활용한 이미지 지연 로딩'
      )
    ).toBeInTheDocument();
  });

  it('VanillaWrapper가 렌더링되어야 한다', () => {
    render(<VanillaJSPage />);

    expect(screen.getByText('Vanilla JS LazyLoading')).toBeInTheDocument();
  });
});

describe('Intersection Observer 동작 테스트', () => {
  it('Observer가 생성되어야 한다', () => {
    render(<ReactIntersectionPage />);

    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('Observer 콜백이 호출되면 이미지 src가 설정되어야 한다', async () => {
    render(<ReactIntersectionPage />);

    const images = screen.getAllByRole('img');
    const firstImage = images[0];

    // Observer 콜백 시뮬레이션
    const observerCallback = mockIntersectionObserver.mock.calls[0][0];
    const mockEntry = {
      isIntersecting: true,
      target: firstImage,
    };

    await act(async () => {
      observerCallback([mockEntry]);
    });

    expect(firstImage).toHaveAttribute('src');
  });
});

describe('브라우저 호환성 테스트', () => {
  it('loading 속성이 지원되지 않을 때 Intersection Observer를 사용해야 한다', () => {
    // loading 속성 지원하지 않는 환경 시뮬레이션
    Object.defineProperty(global.HTMLImageElement.prototype, 'loading', {
      writable: true,
      configurable: true,
      value: undefined,
    });

    render(<ReactIntersectionPage />);

    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('loading 속성이 지원될 때 네이티브 lazy loading을 사용해야 한다', () => {
    // loading 속성 지원하는 환경 시뮬레이션
    Object.defineProperty(global.HTMLImageElement.prototype, 'loading', {
      writable: true,
      configurable: true,
      value: 'lazy',
    });

    render(<ReactIntersectionPage />);

    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });
});

describe('성능 테스트', () => {
  it('Observer가 disconnect되어야 한다', async () => {
    render(<ReactIntersectionPage />);

    const images = screen.getAllByRole('img');
    const firstImage = images[0];

    // Observer 콜백 시뮬레이션
    const observerCallback = mockIntersectionObserver.mock.calls[0][0];
    const mockEntry = {
      isIntersecting: true,
      target: firstImage,
    };

    await act(async () => {
      observerCallback([mockEntry]);
    });

    expect(mockDisconnect).toHaveBeenCalled();
  });
});

describe('이미지 속성 테스트', () => {
  it('이미지들이 기본 속성을 가져야 한다', () => {
    render(<ReactIntersectionPage />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);

    images.forEach(img => {
      expect(img).toHaveAttribute('width', '400');
      expect(img).toHaveAttribute('height', '200');
      expect(img).toHaveAttribute('alt', '');
    });
  });

  it('이미지들이 CSS 클래스를 가져야 한다', () => {
    render(<ReactIntersectionPage />);

    const images = screen.getAllByRole('img');
    const firstImage = images[0];

    // CSS 모듈 클래스명 확인
    expect(firstImage.className).toContain('image');
  });
});

describe('rootMargin 설정 테스트', () => {
  it('Intersection Observer에 rootMargin이 설정되어야 한다', () => {
    render(<ReactIntersectionPage />);

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        threshold: 0,
        rootMargin: '50px',
      })
    );
  });
});
