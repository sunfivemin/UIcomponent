import { style, styleVariants, globalStyle } from "@vanilla-extract/css";
import { createTheme } from "@vanilla-extract/css";

// 🎨 모던한 디자인 토큰
export const [themeClass, vars] = createTheme({
  color: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    background: {
      tab: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      tabHover: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
      tabActive: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
      content: "#ffffff",
      page: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
      accent: "#3b82f6",
    },
    border: {
      light: "#e2e8f0",
      medium: "#cbd5e1",
      dark: "#94a3b8",
    },
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  radius: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  transition: {
    fast: "0.15s cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

// 📦 기본 컨테이너 스타일 (성능 최적화)
export const container = style({
  border: `1px solid ${vars.color.border.light}`,
  borderRadius: vars.radius.lg,
  margin: `${vars.space.xl} 0`,
  padding: "0",
  listStyle: "none",
  width: "100%",
  overflow: "hidden",
  boxShadow: vars.shadow.md,
  backgroundColor: vars.color.background.content,
  backdropFilter: "blur(10px)",
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  contain: "layout style paint", // 레이아웃 격리
});

// 🎯 탭 버튼 기본 스타일 (성능 최적화)
export const tabBase = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border.light}`,
  cursor: "pointer",
  userSelect: "none",
  background: vars.color.background.tab,
  transition: `all ${vars.transition.normal}`,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1rem",
  fontWeight: "500",
  color: vars.color.text.primary,
  // 🚀 성능 최적화
  willChange: "transform, background-color",
  transform: "translateZ(0)", // GPU 가속 활성화
  backfaceVisibility: "hidden", // 3D 렌더링 최적화

  ":hover": {
    background: vars.color.background.tabHover,
    transform: "translate3d(0, -1px, 0)", // GPU 가속 transform
    boxShadow: vars.shadow.sm,
  },

  ":active": {
    transform: "translate3d(0, 0, 0)", // GPU 가속 transform
  },

  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: "0",
      top: "0",
      bottom: "0",
      width: "4px",
      background: "transparent",
      transition: `background ${vars.transition.normal}`,
      willChange: "background-color",
    },
    "&:hover::before": {
      background: vars.color.primary[400],
    },
  },
});

// 🎯 탭 상태별 variants
export const tabVariants = styleVariants({
  default: {},
  active: {
    background: vars.color.background.tabActive,
    color: vars.color.primary[700],
    fontWeight: "600",

    selectors: {
      "&::before": {
        background: vars.color.primary[500],
      },
    },

    ":hover": {
      background: vars.color.background.tabActive,
      transform: "translate3d(0, 0, 0)", // GPU 가속 transform
      boxShadow: "none",
    },
  },
});

// 📝 콘텐츠 기본 스타일
export const contentBase = style({
  backgroundColor: vars.color.background.content,
  borderBottom: `1px solid ${vars.color.border.light}`,
  position: "relative",
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
});

// 📝 콘텐츠 표시 방식별 variants (성능 최적화)
export const contentVariants = styleVariants({
  // #1: 조건부 렌더링 (기본)
  conditional: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    lineHeight: "1.7",
    color: vars.color.text.secondary,
    // 🚀 성능 최적화
    contain: "layout style paint",
  },

  // #2: CSS display
  hidden: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    display: "none",
    lineHeight: "1.7",
    color: vars.color.text.secondary,
  },

  visible: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    display: "block",
    lineHeight: "1.7",
    color: vars.color.text.secondary,
    // 🚀 성능 최적화
    contain: "layout style paint",
  },

  // #3: CSS 애니메이션 (성능 최적화)
  animated: {
    padding: `0 ${vars.space.xl}`,
    borderBottomWidth: "0",
    maxHeight: "0",
    overflow: "hidden",
    transition: `all ${vars.transition.slow}`,
    opacity: "0",
    transform: "translate3d(0, -10px, 0)", // GPU 가속 transform
    willChange: "transform, opacity, max-height, padding",
    transformOrigin: "top",
    // 🚀 성능 최적화
    contain: "layout style paint",
    backfaceVisibility: "hidden",
  },

  animatedOpen: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    borderBottomWidth: "1px",
    maxHeight: "500px",
    opacity: "1",
    transform: "translate3d(0, 0, 0)", // GPU 가속 transform
    lineHeight: "1.7",
    color: vars.color.text.secondary,
    willChange: "transform, opacity, max-height, padding",
    transformOrigin: "top",
    // 🚀 성능 최적화
    contain: "layout style paint",
    backfaceVisibility: "hidden",
  },
});

// 🏷️ 리스트 아이템 variants (성능 최적화)
export const itemVariants = styleVariants({
  default: {
    // 🚀 성능 최적화
    contain: "layout style paint",
  },
  animated: {
    overflow: "hidden",
    // 🚀 성능 최적화
    contain: "layout style paint",
    willChange: "auto",
  },
});

// 📊 메인 페이지 스타일 (성능 최적화)
export const pageContainer = style({
  minHeight: "100vh",
  background: vars.color.background.page,
  padding: `${vars.space.xl} ${vars.space.md}`,
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
});

export const pageHeader = style({
  textAlign: "center",
  marginBottom: vars.space["2xl"],
  padding: `${vars.space.xl} 0`,
  // 🚀 성능 최적화
  contain: "layout style paint",
});

export const pageTitle = style({
  fontSize: "3rem",
  fontWeight: "800",
  background: `linear-gradient(135deg, ${vars.color.primary[600]} 0%, ${vars.color.primary[800]} 100%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: vars.space.md,
  letterSpacing: "-0.025em",
  // 🚀 성능 최적화
  willChange: "auto",
});

export const pageSubtitle = style({
  fontSize: "1.25rem",
  color: vars.color.text.secondary,
  fontWeight: "400",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: "1.6",
  // 🚀 성능 최적화
  contain: "layout style paint",
});

export const section = style({
  marginBottom: vars.space["2xl"],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.lg,
  backdropFilter: "blur(10px)",
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  contain: "layout style paint",
});

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: vars.space.lg,
  color: vars.color.text.primary,
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  // 🚀 성능 최적화
  contain: "layout style paint",

  selectors: {
    "&::before": {
      content: '""',
      width: "4px",
      height: "24px",
      background: `linear-gradient(135deg, ${vars.color.primary[500]} 0%, ${vars.color.primary[700]} 100%)`,
      borderRadius: vars.radius.sm,
      willChange: "auto",
    },
  },
});

export const summary = style({
  marginTop: vars.space["2xl"],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  background: `linear-gradient(135deg, ${vars.color.gray[50]} 0%, ${vars.color.gray[100]} 100%)`,
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border.light}`,
  boxShadow: vars.shadow.md,
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  contain: "layout style paint",
});

export const summaryTitle = style({
  color: vars.color.text.primary,
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: vars.space.lg,
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  // 🚀 성능 최적화
  contain: "layout style paint",

  selectors: {
    "&::before": {
      content: "🔍",
      fontSize: "1.25rem",
      willChange: "auto",
    },
  },
});

export const summaryList = style({
  lineHeight: "1.8",
  color: vars.color.text.secondary,
  fontSize: "1rem",
  // 🚀 성능 최적화
  contain: "layout style paint",
});

export const summaryListItem = style({
  marginBottom: vars.space.sm,
  paddingLeft: vars.space.md,
  position: "relative",
  // 🚀 성능 최적화
  contain: "layout style paint",

  selectors: {
    "&::before": {
      content: "•",
      color: vars.color.primary[500],
      fontWeight: "bold",
      position: "absolute",
      left: "0",
      willChange: "auto",
    },
  },
});

// 🎨 Details 태그 스타일 (성능 최적화)
export const detailsContainer = style({
  border: `1px solid ${vars.color.border.light}`,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  boxShadow: vars.shadow.md,
  backgroundColor: vars.color.background.content,
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  contain: "layout style paint",
});

export const detailsItem = style({
  borderBottom: `1px solid ${vars.color.border.light}`,
  // 🚀 성능 최적화
  contain: "layout style paint",
});

export const detailsSummary = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  cursor: "pointer",
  background: vars.color.background.tab,
  userSelect: "none",
  fontWeight: "500",
  transition: `all ${vars.transition.normal}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // 🚀 성능 최적화
  willChange: "background-color, transform",
  transform: "translateZ(0)", // GPU 가속 활성화
  backfaceVisibility: "hidden",

  ":hover": {
    background: vars.color.background.tabHover,
    transform: "translate3d(0, -1px, 0)", // GPU 가속 transform
  },

  selectors: {
    "&::marker": {
      color: vars.color.primary[500],
      fontWeight: "bold",
      willChange: "auto",
    },
  },
});

export const detailsContent = style({
  padding: `${vars.space.lg} ${vars.space.xl}`,
  backgroundColor: vars.color.background.content,
  lineHeight: "1.7",
  color: vars.color.text.secondary,
  // 🚀 성능 최적화
  contain: "layout style paint",
});

// 🎯 Radio 스타일 (성능 최적화)
export const radioInput = style({
  display: "none",
});

export const radioLabel = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border.light}`,
  cursor: "pointer",
  backgroundColor: vars.color.background.tab,
  userSelect: "none",
  fontWeight: "500",
  transition: `all ${vars.transition.normal}`,
  position: "relative",
  // 🚀 성능 최적화
  willChange: "background-color, transform",
  transform: "translateZ(0)", // GPU 가속 활성화
  backfaceVisibility: "hidden",

  ":hover": {
    background: vars.color.background.tabHover,
    transform: "translate3d(0, -1px, 0)", // GPU 가속 transform
  },

  selectors: {
    "&::before": {
      content: '""',
      width: "20px",
      height: "20px",
      border: `2px solid ${vars.color.border.medium}`,
      borderRadius: "50%",
      marginRight: vars.space.md,
      transition: `all ${vars.transition.normal}`,
      position: "relative",
      willChange: "border-color, background-color",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      left: `${vars.space.lg + 6}px`,
      top: "50%",
      transform: "translate3d(0, -50%, 0)", // GPU 가속 transform
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "transparent",
      transition: `all ${vars.transition.normal}`,
      willChange: "background-color",
    },
  },
});

export const radioContent = style({
  padding: `0 ${vars.space.lg}`,
  borderBottomWidth: "0",
  maxHeight: "0",
  overflow: "hidden",
  transition: `all ${vars.transition.slow}`,
  backgroundColor: vars.color.background.content,
  opacity: "0",
  transform: "translate3d(0, -10px, 0)", // GPU 가속 transform
  // 🚀 성능 최적화
  willChange: "transform, opacity, max-height, padding",
  contain: "layout style paint",
  backfaceVisibility: "hidden",
});

// 🎯 토글 아이콘 스타일 (성능 최적화)
export const toggleIcon = style({
  fontSize: "14px",
  fontWeight: "bold",
  minWidth: "20px",
  height: "20px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: `all ${vars.transition.fast}`,
  cursor: "pointer",
  userSelect: "none",
  // 🚀 성능 최적화
  willChange: "transform, background-color, color",
  transform: "translateZ(0)", // GPU 가속 활성화
  backfaceVisibility: "hidden",
});

export const toggleIconVariants = styleVariants({
  inactive: {
    backgroundColor: vars.color.gray[100],
    color: vars.color.gray[500],
    transform: "rotate3d(0, 0, 1, 0deg)", // GPU 가속 transform
  },
  active: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
    transform: "rotate3d(0, 0, 1, 180deg)", // GPU 가속 transform
  },
});

// 🌐 글로벌 스타일 (성능 최적화)
globalStyle(`${radioInput}:checked + ${radioLabel}::before`, {
  borderColor: vars.color.primary[500],
  background: vars.color.primary[50],
});

globalStyle(`${radioInput}:checked + ${radioLabel}::after`, {
  background: vars.color.primary[500],
});

globalStyle(`${radioInput}:checked + ${radioLabel}`, {
  backgroundColor: vars.color.background.tabActive,
  color: vars.color.primary[700],
  fontWeight: "600",
  transform: "translate3d(0, 0, 0)", // GPU 가속 transform
});

globalStyle(`${radioInput}:checked ~ ${radioContent}`, {
  padding: `${vars.space.lg} ${vars.space.lg}`,
  maxHeight: "500px",
  borderBottomWidth: "1px",
  opacity: "1",
  transform: "translate3d(0, 0, 0)", // GPU 가속 transform
  lineHeight: "1.7",
  color: vars.color.text.secondary,
});

// Details 관련 글로벌 스타일
globalStyle(`details[open] ${detailsSummary}`, {
  backgroundColor: vars.color.background.tabActive,
  color: vars.color.primary[700],
  fontWeight: "600",
  transform: "translate3d(0, 0, 0)", // GPU 가속 transform
});

// 스크롤바 스타일링 (성능 최적화)
globalStyle("*", {
  scrollbarWidth: "thin",
  scrollbarColor: `${vars.color.border.medium} transparent`,
  // 🚀 성능 최적화
  boxSizing: "border-box",
});

globalStyle("*::-webkit-scrollbar", {
  width: "6px",
  // 🚀 성능 최적화
  willChange: "auto",
});

globalStyle("*::-webkit-scrollbar-track", {
  background: "transparent",
  // 🚀 성능 최적화
  willChange: "auto",
});

globalStyle("*::-webkit-scrollbar-thumb", {
  background: vars.color.border.medium,
  borderRadius: "3px",
  // 🚀 성능 최적화
  willChange: "background-color",
});

globalStyle("*::-webkit-scrollbar-thumb:hover", {
  background: vars.color.border.dark,
});

// 🚀 추가 성능 최적화 글로벌 스타일
globalStyle("html, body", {
  // 스크롤 성능 최적화
  scrollBehavior: "smooth",
  // GPU 가속 활성화
  transform: "translateZ(0)",
  backfaceVisibility: "hidden",
  perspective: "1000px",
});

// 리플로우 방지를 위한 최적화
globalStyle("img, video, canvas", {
  maxWidth: "100%",
  height: "auto",
  // GPU 가속 활성화
  transform: "translateZ(0)",
  backfaceVisibility: "hidden",
});

// 폰트 렌더링 최적화
globalStyle("body", {
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  // GPU 가속 활성화
  transform: "translateZ(0)",
});
