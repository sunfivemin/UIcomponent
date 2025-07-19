import { style, styleVariants, globalStyle } from "@vanilla-extract/css";
import { createTheme } from "@vanilla-extract/css";

// 🎨 모던한 디자인 토큰 - 다크테마 지원
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
      tab: "hsl(var(--card))",
      tabHover: "hsl(var(--accent))",
      tabActive: "hsl(var(--primary))",
      content: "hsl(var(--card))",
      page: "hsl(var(--background))",
    },
    text: {
      primary: "hsl(var(--foreground))",
      secondary: "hsl(var(--muted-foreground))",
      accent: "hsl(var(--primary))",
    },
    border: {
      light: "hsl(var(--border))",
      medium: "hsl(var(--border))",
      dark: "hsl(var(--border))",
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

// 📦 기본 컨테이너 스타일 (성능 최적화 + 다크테마)
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
  // 🌙 다크테마 전환
  transition:
    "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
});

// 🎯 탭 버튼 기본 스타일 (성능 최적화 + 다크테마)
export const tabBase = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border.light}`,
  cursor: "pointer",
  userSelect: "none",
  background: "hsl(var(--card))",
  transition: `all ${vars.transition.normal}`,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1rem",
  fontWeight: "500",
  color: "hsl(var(--foreground))",
  // 🚀 성능 최적화
  willChange: "transform, background-color",
  transform: "translateZ(0)", // GPU 가속 활성화
  backfaceVisibility: "hidden", // 3D 렌더링 최적화

  ":hover": {
    background: "hsl(var(--accent))",
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

// 🎯 탭 상태별 variants (다크테마)
export const tabVariants = styleVariants({
  default: {},
  active: {
    background: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
    fontWeight: "600",

    selectors: {
      "&::before": {
        background: vars.color.primary[500],
      },
    },

    ":hover": {
      background: "hsl(var(--primary))",
      transform: "translate3d(0, 0, 0)", // GPU 가속 transform
      boxShadow: "none",
    },
  },
});

// 📝 콘텐츠 기본 스타일 (다크테마)
export const contentBase = style({
  backgroundColor: vars.color.background.content,
  borderBottom: `1px solid ${vars.color.border.light}`,
  position: "relative",
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  // 🌙 다크테마 전환
  transition: "background-color 0.3s ease, border-color 0.3s ease",
});

// 📝 콘텐츠 표시 방식별 variants (성능 최적화 + 다크테마)
export const contentVariants = styleVariants({
  // #1: 조건부 렌더링 (기본)
  conditional: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    lineHeight: "1.7",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card))",
    // 🚀 성능 최적화
    contain: "layout style paint",
    // 🌙 다크테마 전환
    transition: "color 0.3s ease, background-color 0.3s ease",
  },

  // #2: CSS display
  hidden: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    display: "none",
    lineHeight: "1.7",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card))",
    transition: "color 0.3s ease, background-color 0.3s ease",
  },

  visible: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    display: "block",
    lineHeight: "1.7",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card))",
    // 🚀 성능 최적화
    contain: "layout style paint",
    transition: "color 0.3s ease, background-color 0.3s ease",
  },

  // #3: CSS 애니메이션 (성능 최적화 + 다크테마)
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
    backgroundColor: "hsl(var(--card))",
    color: "hsl(var(--foreground))",
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
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card))",
    willChange: "transform, opacity, max-height, padding",
    transformOrigin: "top",
    // 🚀 성능 최적화
    contain: "layout style paint",
    backfaceVisibility: "hidden",
    // 🌙 다크테마 전환
    transition: `all ${vars.transition.slow}, color 0.3s ease, background-color 0.3s ease`,
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

// 📊 메인 페이지 스타일 (성능 최적화 + 다크테마)
export const pageContainer = style({
  minHeight: "100vh",
  background: vars.color.background.page,
  padding: `${vars.space.xl} ${vars.space.md}`,
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  // 🌙 다크테마 전환
  transition: "background-color 0.3s ease",
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
  color: "hsl(var(--muted-foreground))",
  fontWeight: "400",
  maxWidth: "600px",
  margin: "0 auto",
  lineHeight: "1.6",
  // 🚀 성능 최적화
  contain: "layout style paint",
  // 🌙 다크테마 전환
  transition: "color 0.3s ease",
});

export const section = style({
  marginBottom: vars.space["2xl"],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  backgroundColor: "hsl(var(--card))",
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.lg,
  backdropFilter: "blur(10px)",
  border: `1px solid ${vars.color.border.light}`,
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  contain: "layout style paint",
  // 🌙 다크테마 전환
  transition:
    "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
});

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: vars.space.lg,
  color: "hsl(var(--foreground))",
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  // 🚀 성능 최적화
  contain: "layout style paint",
  // 🌙 다크테마 전환
  transition: "color 0.3s ease",

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
  background: "hsl(var(--muted))",
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border.light}`,
  boxShadow: vars.shadow.md,
  // 🚀 성능 최적화
  willChange: "auto",
  transform: "translateZ(0)", // GPU 가속 활성화
  contain: "layout style paint",
  // 🌙 다크테마 전환
  transition: "background-color 0.3s ease, border-color 0.3s ease",
});

export const summaryTitle = style({
  color: "hsl(var(--foreground))",
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: vars.space.lg,
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  // 🚀 성능 최적화
  contain: "layout style paint",
  // 🌙 다크테마 전환
  transition: "color 0.3s ease",

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
  color: "hsl(var(--muted-foreground))",
  fontSize: "1rem",
  // 🚀 성능 최적화
  contain: "layout style paint",
  // 🌙 다크테마 전환
  transition: "color 0.3s ease",
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

// 🎨 Details 태그 스타일 (성능 최적화 + 다크테마)
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
  // 🌙 다크테마 전환
  transition: "background-color 0.3s ease, border-color 0.3s ease",
});

export const detailsItem = style({
  borderBottom: `1px solid ${vars.color.border.light}`,
  // 🚀 성능 최적화
  contain: "layout style paint",
  // 🌙 다크테마 전환
  transition: "border-color 0.3s ease",
});

export const detailsSummary = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  cursor: "pointer",
  background: "hsl(var(--card))",
  userSelect: "none",
  fontWeight: "500",
  transition: `all ${vars.transition.normal}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "hsl(var(--foreground))",
  // 🚀 성능 최적화
  willChange: "background-color, transform",
  transform: "translateZ(0)", // GPU 가속 활성화
  backfaceVisibility: "hidden",

  ":hover": {
    background: "hsl(var(--accent))",
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
  backgroundColor: "hsl(var(--card))",
  lineHeight: "1.7",
  color: "hsl(var(--foreground))",
  // 🚀 성능 최적화
  contain: "layout style paint",
  // 🌙 다크테마 전환
  transition: "background-color 0.3s ease, color 0.3s ease",
});

// 🎯 Radio 스타일 (성능 최적화 + 다크테마)
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
  backgroundColor: "hsl(var(--card))",
  userSelect: "none",
  fontWeight: "500",
  transition: `all ${vars.transition.normal}`,
  position: "relative",
  color: "hsl(var(--foreground))",
  // 🚀 성능 최적화
  willChange: "background-color, transform",
  transform: "translateZ(0)", // GPU 가속 활성화
  backfaceVisibility: "hidden",

  ":hover": {
    background: "hsl(var(--accent))",
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
  backgroundColor: "hsl(var(--card))",
  color: "hsl(var(--foreground))",
  opacity: "0",
  transform: "translate3d(0, -10px, 0)", // GPU 가속 transform
  // 🚀 성능 최적화
  willChange: "transform, opacity, max-height, padding",
  contain: "layout style paint",
  backfaceVisibility: "hidden",
});

// 🎯 토글 아이콘 스타일 (성능 최적화 + 다크테마)
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
    backgroundColor: "hsl(var(--muted))",
    color: "hsl(var(--muted-foreground))",
    transform: "rotate3d(0, 0, 1, 0deg)", // GPU 가속 transform
  },
  active: {
    backgroundColor: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
    transform: "rotate3d(0, 0, 1, 180deg)", // GPU 가속 transform
  },
});

// 🌐 글로벌 스타일 (성능 최적화 + 다크테마)
globalStyle(`${radioInput}:checked + ${radioLabel}::before`, {
  borderColor: vars.color.primary[500],
  background: vars.color.primary[50],
});

globalStyle(`${radioInput}:checked + ${radioLabel}::after`, {
  background: vars.color.primary[500],
});

globalStyle(`${radioInput}:checked + ${radioLabel}`, {
  backgroundColor: "hsl(var(--primary))",
  color: "hsl(var(--primary-foreground))",
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
  color: "hsl(var(--foreground))",
  backgroundColor: "hsl(var(--card))",
});

// Details 관련 글로벌 스타일 (다크테마)
globalStyle(`details[open] ${detailsSummary}`, {
  backgroundColor: "hsl(var(--primary))",
  color: "hsl(var(--primary-foreground))",
  fontWeight: "600",
  transform: "translate3d(0, 0, 0)", // GPU 가속 transform
});

// 스크롤바 스타일링 (성능 최적화 + 다크테마)
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
