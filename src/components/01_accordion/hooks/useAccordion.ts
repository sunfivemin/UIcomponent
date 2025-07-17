import { useState, useCallback, useRef, useEffect } from "react";

interface UseAccordionProps {
  defaultOpenId?: string | null;
  multiple?: boolean;
  onChange?: (openItems: string[]) => void;
}

// 🚀 쓰로틀링 유틸리티 함수
const throttle = <T extends (...args: any[]) => any>(
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

export const useAccordion = ({
  defaultOpenId = null,
  multiple = false,
  onChange,
}: UseAccordionProps = {}) => {
  const [openItems, setOpenItems] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  // 🚀 onChange 콜백 참조 저장
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // 🚀 쓰로틀링된 onChange 콜백
  const throttledOnChange = useRef(
    throttle((items: string[]) => {
      onChangeRef.current?.(items);
    }, 16) // 60fps에 맞춘 쓰로틀링
  );

  const toggleItem = useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const newOpenItems = multiple
          ? prev.includes(id)
            ? prev.filter((item) => item !== id)
            : [...prev, id]
          : prev.includes(id)
          ? []
          : [id];

        // 🚀 쓰로틀링된 onChange 호출
        throttledOnChange.current(newOpenItems);

        return newOpenItems;
      });
    },
    [multiple]
  );

  const isItemOpen = useCallback(
    (id: string) => {
      return openItems.includes(id);
    },
    [openItems]
  );

  const openItem = useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const newOpenItems = multiple
          ? prev.includes(id)
            ? prev
            : [...prev, id]
          : [id];

        // 🚀 쓰로틀링된 onChange 호출
        throttledOnChange.current(newOpenItems);

        return newOpenItems;
      });
    },
    [multiple]
  );

  const closeItem = useCallback((id: string) => {
    setOpenItems((prev) => {
      const newOpenItems = prev.filter((item) => item !== id);

      // 🚀 쓰로틀링된 onChange 호출
      throttledOnChange.current(newOpenItems);

      return newOpenItems;
    });
  }, []);

  const closeAll = useCallback(() => {
    setOpenItems([]);
    // 🚀 쓰로틀링된 onChange 호출
    throttledOnChange.current([]);
  }, []);

  // 🚀 메모이제이션된 유틸리티 함수들
  const openAll = useCallback(() => {
    // 이 함수는 실제 구현에서 아이템 목록이 필요하므로
    // 필요시 별도로 구현
  }, []);

  const getOpenCount = useCallback(() => {
    return openItems.length;
  }, [openItems]);

  const hasOpenItems = useCallback(() => {
    return openItems.length > 0;
  }, [openItems]);

  return {
    openItems,
    toggleItem,
    isItemOpen,
    openItem,
    closeItem,
    closeAll,
    openAll,
    getOpenCount,
    hasOpenItems,
  };
};
