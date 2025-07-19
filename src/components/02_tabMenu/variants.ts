import { cva } from "class-variance-authority";

// 🚀 탭메뉴 변형 정의
export const tabMenuVariants = cva(
  // 기본 클래스
  "border rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300",
  {
    variants: {
      // 크기 변형
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      // 스타일 변형
      variant: {
        default: "border-gray-200 bg-gray-50",
        primary: "border-blue-200 bg-blue-50",
        secondary: "border-purple-200 bg-purple-50",
        success: "border-green-200 bg-green-50",
        warning: "border-yellow-200 bg-yellow-50",
        danger: "border-red-200 bg-red-50",
      },
      // 방향 변형
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      orientation: "horizontal",
    },
  }
);

// 🚀 탭 버튼 변형 정의
export const tabButtonVariants = cva(
  // 기본 클래스
  "w-full px-4 py-3 text-center font-medium transition-all duration-200 cursor-pointer border-none bg-transparent",
  {
    variants: {
      // 크기 변형
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-6 py-4 text-lg",
      },
      // 상태 변형
      state: {
        inactive: "text-gray-600 hover:text-gray-800 hover:bg-gray-100",
        active:
          "text-blue-600 bg-blue-50 border-b-2 border-blue-600 font-semibold",
      },
      // 스타일 변형
      variant: {
        default: "",
        primary:
          "active:text-blue-600 active:bg-blue-50 active:border-blue-600",
        secondary:
          "active:text-purple-600 active:bg-purple-50 active:border-purple-600",
        success:
          "active:text-green-600 active:bg-green-50 active:border-green-600",
        warning:
          "active:text-yellow-600 active:bg-yellow-50 active:border-yellow-600",
        danger: "active:text-red-600 active:bg-red-50 active:border-red-600",
      },
    },
    defaultVariants: {
      size: "md",
      state: "inactive",
      variant: "default",
    },
  }
);

// 🚀 탭 콘텐츠 변형 정의
export const tabContentVariants = cva(
  // 기본 클래스
  "p-4 transition-all duration-300",
  {
    variants: {
      // 크기 변형
      size: {
        sm: "p-3 text-sm",
        md: "p-4 text-base",
        lg: "p-6 text-lg",
      },
      // 상태 변형
      state: {
        inactive: "opacity-0 pointer-events-none absolute top-0 left-0 right-0",
        active: "opacity-100 pointer-events-auto relative",
      },
      // 애니메이션 변형
      animation: {
        none: "",
        fade: "transition-opacity duration-300",
        slide: "transition-transform duration-300",
        scale: "transition-transform duration-300",
      },
    },
    defaultVariants: {
      size: "md",
      state: "inactive",
      animation: "fade",
    },
  }
);

// 🚀 탭 리스트 변형 정의
export const tabListVariants = cva(
  // 기본 클래스
  "flex m-0 p-0 list-none border-b",
  {
    variants: {
      // 방향 변형
      orientation: {
        horizontal: "flex-row border-b border-gray-200",
        vertical: "flex-col border-r border-gray-200",
      },
      // 정렬 변형
      align: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
      },
      // 크기 변형
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      align: "start",
      size: "md",
    },
  }
);
