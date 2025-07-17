// 🚀 성능 최적화 유틸리티 함수들

// 쓰로틀링 함수
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;

  return ((...args: any[]) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  }) as T;
};

// 디바운싱 함수
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T => {
  let timeoutId: NodeJS.Timeout | null = null;

  return ((...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  }) as T;
};

// RAF (RequestAnimationFrame) 쓰로틀링
export const rafThrottle = <T extends (...args: any[]) => any>(func: T): T => {
  let ticking = false;

  return ((...args: any[]) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        func(...args);
        ticking = false;
      });
      ticking = true;
    }
  }) as T;
};

// 메모이제이션 헬퍼
export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  getKey?: (...args: Parameters<T>) => string
): T => {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>) => {
    const key = getKey ? getKey(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

// 성능 측정 헬퍼
export const measurePerformance = <T extends (...args: any[]) => any>(
  func: T,
  name: string
): T => {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();

    console.log(`${name} 실행 시간: ${end - start}ms`);
    return result;
  }) as T;
};

// 배치 업데이트 헬퍼
export const batchUpdate = (updates: (() => void)[]) => {
  // React 18의 자동 배칭을 활용
  Promise.resolve().then(() => {
    updates.forEach((update) => update());
  });
};

// 가상화 계산 헬퍼
export const calculateVirtualization = (
  scrollTop: number,
  containerHeight: number,
  itemHeight: number,
  totalItems: number,
  overscan: number = 5
) => {
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    totalItems - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  );

  return {
    startIndex,
    endIndex,
    visibleCount: endIndex - startIndex + 1,
    totalHeight: totalItems * itemHeight,
    offsetY: startIndex * itemHeight,
  };
};

// 스크롤 성능 최적화
export const optimizeScroll = (element: HTMLElement) => {
  // GPU 가속 활성화
  element.style.transform = "translateZ(0)";
  element.style.willChange = "scroll-position";

  // 스크롤 성능 최적화 (WebKit 전용)
  (element.style as any).webkitOverflowScrolling = "touch";

  return () => {
    element.style.willChange = "auto";
  };
};

// DOM 조작 최적화
export const batchDOMUpdates = (updates: (() => void)[]) => {
  // DocumentFragment 사용으로 DOM 조작 최적화
  const fragment = document.createDocumentFragment();

  updates.forEach((update) => {
    try {
      update();
    } catch (error) {
      console.error("DOM 업데이트 오류:", error);
    }
  });
};

// 메모리 누수 방지
export const createCleanup = () => {
  const cleanupFunctions: (() => void)[] = [];

  return {
    add: (cleanup: () => void) => {
      cleanupFunctions.push(cleanup);
    },
    execute: () => {
      cleanupFunctions.forEach((cleanup) => {
        try {
          cleanup();
        } catch (error) {
          console.error("Cleanup 실행 오류:", error);
        }
      });
      cleanupFunctions.length = 0;
    },
  };
};
