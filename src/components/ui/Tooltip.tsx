import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import { debounce } from "@/lib/performance";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}

const Tooltip = memo<TooltipProps>(
  ({ content, children, position = "top", delay = 300, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    // 🚀 디바운싱된 show/hide 함수
    const debouncedShow = useCallback(
      debounce(() => setIsVisible(true), delay),
      [delay]
    );

    const debouncedHide = useCallback(
      debounce(() => setIsVisible(false), delay),
      [delay]
    );

    const handleMouseEnter = useCallback(() => {
      debouncedHide.cancel();
      debouncedShow();
    }, [debouncedShow, debouncedHide]);

    const handleMouseLeave = useCallback(() => {
      debouncedShow.cancel();
      debouncedHide();
    }, [debouncedShow, debouncedHide]);

    // 툴팁 위치 계산
    const updateTooltipPosition = useCallback(() => {
      if (!triggerRef.current || !tooltipRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let x = 0;
      let y = 0;

      switch (position) {
        case "top":
          x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          y = triggerRect.top - tooltipRect.height - 8;
          break;
        case "bottom":
          x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          y = triggerRect.bottom + 8;
          break;
        case "left":
          x = triggerRect.left - tooltipRect.width - 8;
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
        case "right":
          x = triggerRect.right + 8;
          y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          break;
      }

      setTooltipPosition({ x, y });
    }, [position]);

    useEffect(() => {
      if (isVisible) {
        updateTooltipPosition();
      }
    }, [isVisible, updateTooltipPosition]);

    return (
      <div
        ref={triggerRef}
        className={`tooltip-trigger ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {isVisible && (
          <div
            ref={tooltipRef}
            className={`tooltip tooltip-${position}`}
            style={{
              position: "fixed",
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              zIndex: 1000,
            }}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
