import { useState, useCallback } from 'react';

// 🚀 탭메뉴 전용 훅
interface UseTabMenuProps {
  defaultActiveId?: string;
  onChange?: (activeId: string) => void;
}

export const useTabMenu = ({
  defaultActiveId,
  onChange,
}: UseTabMenuProps = {}) => {
  const [activeId, setActiveId] = useState(defaultActiveId || '');

  const setActiveTab = useCallback(
    (id: string) => {
      setActiveId(id);
      onChange?.(id);
    },
    [onChange]
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

  const toggleTab = useCallback(
    (id: string) => {
      setActiveIds(prev => {
        const newIds = prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id];

        onChange?.(newIds);
        return newIds;
      });
    },
    [onChange]
  );

  const activateTab = useCallback(
    (id: string) => {
      setActiveIds(prev => {
        if (!prev.includes(id)) {
          const newIds = [...prev, id];
          onChange?.(newIds);
          return newIds;
        }
        return prev;
      });
    },
    [onChange]
  );

  const deactivateTab = useCallback(
    (id: string) => {
      setActiveIds(prev => {
        const newIds = prev.filter(item => item !== id);
        onChange?.(newIds);
        return newIds;
      });
    },
    [onChange]
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
      onChange?.(allIds);
    },
    [onChange]
  );

  const deselectAll = useCallback(() => {
    setActiveIds([]);
    onChange?.([]);
  }, [onChange]);

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
