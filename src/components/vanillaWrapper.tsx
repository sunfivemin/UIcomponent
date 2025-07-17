// components/VanillaWrapper.tsx - vanilla-extract 스타일에 맞춘 버전

import React, { useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const wrapperVariants = cva("vanilla-wrapper", {
  variants: {
    variant: {
      default: "border border-gray-200 rounded-lg p-4 bg-white",
      code: "border border-gray-300 rounded-lg p-6 bg-gray-50 font-mono text-sm",
      demo: "border-2 border-dashed border-blue-300 rounded-lg p-8 bg-blue-50",
    },
    size: {
      sm: "min-h-[200px]",
      md: "min-h-[300px]",
      lg: "min-h-[400px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const titleVariants = cva("mb-4 font-semibold", {
  variants: {
    variant: {
      default: "text-gray-900",
      code: "text-gray-800",
      demo: "text-blue-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface VanillaWrapperProps extends VariantProps<typeof wrapperVariants> {
  title?: string;
  subTitle?: string;
  initiator: (wrapper: HTMLDivElement) => void | (() => void);
  className?: string;
  loading?: boolean;
}

const VanillaWrapper = ({
  title = "",
  subTitle = "",
  initiator,
  variant,
  size,
  className,
  loading = false,
}: VanillaWrapperProps) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef(false);
  const cleanup = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!isInit.current && wrapper.current && !loading) {
      try {
        const cleanupFn = initiator(wrapper.current);
        if (typeof cleanupFn === "function") {
          cleanup.current = cleanupFn;
        }
        isInit.current = true;
      } catch (error) {
        console.error("VanillaWrapper initiator error:", error);
        if (wrapper.current) {
          wrapper.current.innerHTML = `
            <div class="error-message">
              <div class="error-title">컴포넌트 로딩 중 오류가 발생했습니다.</div>
              <div class="error-detail">${
                error instanceof Error ? error.message : "알 수 없는 오류"
              }</div>
            </div>
          `;
        }
      }
    }

    return () => {
      if (cleanup.current) {
        try {
          cleanup.current();
        } catch (error) {
          console.error("VanillaWrapper cleanup error:", error);
        }
      }
    };
  }, [initiator, loading]);

  useEffect(() => {
    return () => {
      isInit.current = false;
      if (wrapper.current) {
        wrapper.current.innerHTML = "";
      }
    };
  }, [initiator]);

  return (
    <div
      className={cn(wrapperVariants({ variant, size }), className)}
      data-variant={variant}
    >
      {title && (
        <h3 className={cn(titleVariants({ variant }))}>
          {title}. Vanilla {subTitle && <sub>{subTitle}</sub>}
        </h3>
      )}

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "120px",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div className="loading-spinner"></div>
          <span style={{ color: "#666", fontSize: "14px" }}>로딩 중...</span>
        </div>
      ) : (
        <div ref={wrapper} className="vanilla-content" />
      )}
    </div>
  );
};

export default VanillaWrapper;
