import { useState, useCallback } from "react";
import { throttle } from "@/lib/performance";

// 🚀 탭메뉴 전용 훅
interface UseTabMenuProps {
  defaultActiveId?: string;
  onChange?: (activeId: string) => void;
}

export const useTabMenu = ({
  defaultActiveId,
  onChange,
}: UseTabMenuProps = {}) => {
  const [activeId, setActiveId] = useState(defaultActiveId || "");

  // 🚀 쓰로틀링된 onChange 콜백
  const throttledOnChange = useCallback(
    throttle((id: string) => {
      onChange?.(id);
    }, 16),
    [onChange]
  );

  const setActiveTab = useCallback(
    (id: string) => {
      setActiveId(id);
      throttledOnChange(id);
    },
    [throttledOnChange]
  );

  const isActive = useCallback(
    (id: string) => {
      return activeId === id;
    },
    [activeId]
  );

  return {
    activeId,
    setActiveTab,
    isActive,
  };
};

// 🚀 다중 탭메뉴 훅 (여러 탭 동시 활성화)
interface UseMultiTabMenuProps {
  defaultActiveIds?: string[];
  onChange?: (activeIds: string[]) => void;
}

export const useMultiTabMenu = ({
  defaultActiveIds = [],
  onChange,
}: UseMultiTabMenuProps = {}) => {
  const [activeIds, setActiveIds] = useState<string[]>(defaultActiveIds);

  // 🚀 쓰로틀링된 onChange 콜백
  const throttledOnChange = useCallback(
    throttle((ids: string[]) => {
      onChange?.(ids);
    }, 16),
    [onChange]
  );

  const toggleTab = useCallback(
    (id: string) => {
      setActiveIds((prev) => {
        const newIds = prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];

        throttledOnChange(newIds);
        return newIds;
      });
    },
    [throttledOnChange]
  );

  const activateTab = useCallback(
    (id: string) => {
      setActiveIds((prev) => {
        if (!prev.includes(id)) {
          const newIds = [...prev, id];
          throttledOnChange(newIds);
          return newIds;
        }
        return prev;
      });
    },
    [throttledOnChange]
  );

  const deactivateTab = useCallback(
    (id: string) => {
      setActiveIds((prev) => {
        const newIds = prev.filter((item) => item !== id);
        throttledOnChange(newIds);
        return newIds;
      });
    },
    [throttledOnChange]
  );

  const isActive = useCallback(
    (id: string) => {
      return activeIds.includes(id);
    },
    [activeIds]
  );

  const selectAll = useCallback(
    (allIds: string[]) => {
      setActiveIds(allIds);
      throttledOnChange(allIds);
    },
    [throttledOnChange]
  );

  const deselectAll = useCallback(() => {
    setActiveIds([]);
    throttledOnChange([]);
  }, [throttledOnChange]);

  return {
    activeIds,
    toggleTab,
    activateTab,
    deactivateTab,
    isActive,
    selectAll,
    deselectAll,
  };
};
