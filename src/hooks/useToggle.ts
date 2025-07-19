import { useState, useCallback } from "react";

// 🚀 공통 토글 훅 (Accordion, Tabs, Dropdown 등에서 사용)
interface UseToggleProps {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
}

export const useToggle = ({
  initialValue = false,
  onChange,
}: UseToggleProps = {}) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const newValue = !prev;
      onChange?.(newValue);
      return newValue;
    });
  }, [onChange]);

  const open = useCallback(() => {
    setIsOpen(true);
    onChange?.(true);
  }, [onChange]);

  const close = useCallback(() => {
    setIsOpen(false);
    onChange?.(false);
  }, [onChange]);

  return {
    isOpen,
    toggle,
    open,
    close,
  };
};
