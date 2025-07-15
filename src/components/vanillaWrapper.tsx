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
  initiator: (wrapper: HTMLDivElement) => void;
  className?: string;
}

const VanillaWrapper = ({
  title = "",
  subTitle = "",
  initiator,
  variant,
  size,
  className,
}: VanillaWrapperProps) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef(false);

  useEffect(() => {
    if (!isInit.current && !!wrapper.current) {
      initiator(wrapper.current);
      isInit.current = true;
    }
  }, [initiator]);

  return (
    <div className={cn(wrapperVariants({ variant, size, className }))}>
      {title && (
        <h3 className={cn(titleVariants({ variant }))}>
          {title}. Vanilla{" "}
          {subTitle && <sub className="text-gray-500 ml-2">{subTitle}</sub>}
        </h3>
      )}
      <div ref={wrapper} className="vanilla-content" />
    </div>
  );
};

export default VanillaWrapper;
