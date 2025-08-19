import { renderHook, act } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { useRef } from 'react';
import useIntersectionObserver from '../useIntersectionObserver';

// Intersection Observer Mock
const mockIntersectionObserver = vi.fn();
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  global.IntersectionObserver = mockIntersectionObserver;
  mockIntersectionObserver.mockReturnValue({
    observe: mockObserve,
    disconnect: mockDisconnect,
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('useIntersectionObserver', () => {
  it('훅이 초기화되어야 한다', () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref);
    });

    expect(result.current.entries).toEqual([]);
    expect(result.current.observerRef.current).toBeDefined();
  });

  it('Intersection Observer가 생성되어야 한다', () => {
    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref);
    });

    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('기본 옵션으로 Observer가 생성되어야 한다', () => {
    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      { threshold: 0 }
    );
  });

  it('커스텀 옵션으로 Observer가 생성되어야 한다', () => {
    const customOptions = {
      threshold: 0.5,
      rootMargin: '10px',
    };

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref, customOptions);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      customOptions
    );
  });

  it('onIntersect 콜백이 제공되면 Observer가 생성되어야 한다', () => {
    const mockOnIntersect = vi.fn();

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref, { threshold: 0 }, mockOnIntersect);
    });

    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it('ref가 null이면 Observer가 생성되지 않아야 한다', () => {
    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref);
    });

    // ref가 null이므로 observe가 호출되지 않음
    expect(mockObserve).not.toHaveBeenCalled();
  });

  it('Observer 콜백이 호출되면 entries가 업데이트되어야 한다', () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref);
    });

    // Observer 콜백 시뮬레이션
    const observerCallback = mockIntersectionObserver.mock.calls[0][0];
    const mockEntries = [
      {
        isIntersecting: true,
        target: document.createElement('div'),
      },
    ];

    act(() => {
      observerCallback(mockEntries);
    });

    expect(result.current.entries).toEqual(mockEntries);
  });

  it('onIntersect 콜백이 제공되면 isIntersecting일 때 호출되어야 한다', () => {
    const mockOnIntersect = vi.fn();

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref, { threshold: 0 }, mockOnIntersect);
    });

    // Observer 콜백 시뮬레이션
    const observerCallback = mockIntersectionObserver.mock.calls[0][0];
    const mockEntries = [
      {
        isIntersecting: true,
        target: document.createElement('div'),
      },
    ];

    act(() => {
      observerCallback(mockEntries);
    });

    expect(mockOnIntersect).toHaveBeenCalledWith(mockEntries[0]);
  });

  it('onIntersect 콜백이 제공되면 isIntersecting이 false일 때 호출되지 않아야 한다', () => {
    const mockOnIntersect = vi.fn();

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref, { threshold: 0 }, mockOnIntersect);
    });

    // Observer 콜백 시뮬레이션
    const observerCallback = mockIntersectionObserver.mock.calls[0][0];
    const mockEntries = [
      {
        isIntersecting: false,
        target: document.createElement('div'),
      },
    ];

    act(() => {
      observerCallback(mockEntries);
    });

    expect(mockOnIntersect).not.toHaveBeenCalled();
  });

  it('onIntersect 콜백이 호출되면 Observer가 disconnect되어야 한다', () => {
    const mockOnIntersect = vi.fn();

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref, { threshold: 0 }, mockOnIntersect);
    });

    // Observer 콜백 시뮬레이션
    const observerCallback = mockIntersectionObserver.mock.calls[0][0];
    const mockEntries = [
      {
        isIntersecting: true,
        target: document.createElement('div'),
      },
    ];

    act(() => {
      observerCallback(mockEntries);
    });

    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('컴포넌트가 언마운트되면 Observer가 disconnect되어야 한다', () => {
    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(null);
      return useIntersectionObserver(ref);
    });

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});
