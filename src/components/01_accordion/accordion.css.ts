import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars, componentTokens } from '../../styles/design-system.css';

// Export themeClass for components to use
export { themeClass } from '../../styles/design-system.css';

// 📦 기본 컨테이너 스타일
export const container = style({
  border: `1px solid hsl(var(--border))`,
  borderRadius: vars.radius.lg,
  margin: `${vars.space.xl} 0`,
  padding: '0',
  listStyle: 'none',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflow: 'visible',
  boxShadow: vars.shadow.md,
  backgroundColor: 'hsl(var(--card))',
  backdropFilter: 'blur(10px)',
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

// 🎯 탭 버튼 기본 스타일
export const tabBase = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderRadius: vars.radius.md,
  fontSize: vars.typography.fontSize.base,
  fontWeight: vars.typography.fontWeight.medium,
  transition: `all ${vars.transition.normal}`,
  cursor: 'pointer',
  userSelect: 'none',
  borderBottom: `1px solid hsl(var(--border))`,
  background: 'hsl(var(--card))',
  color: 'hsl(var(--foreground))',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  ...componentTokens.performance,

  ':hover': {
    background: 'hsl(var(--accent))',
    transform: 'translate3d(0, -1px, 0)',
    boxShadow: vars.shadow.sm,
  },

  ':active': {
    transform: 'translate3d(0, 0, 0)',
  },

  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '0',
      width: '4px',
      background: 'transparent',
      transition: `background-color ${vars.transition.normal}`,
    },
  },
});

// 🎯 탭 상태별 variants
export const tabVariants = styleVariants({
  default: {},
  active: {
    background: 'hsl(var(--primary))',
    color: 'hsl(var(--primary-foreground))',
    fontWeight: vars.typography.fontWeight.semibold,
    width: '100%',

    selectors: {
      '&::before': {
        background: vars.color.primary[500],
      },
    },

    ':hover': {
      background: 'hsl(var(--primary))',
      transform: 'translate3d(0, 0, 0)',
      boxShadow: 'none',
    },
  },
});

// 📝 콘텐츠 기본 스타일
export const contentBase = style({
  backgroundColor: 'hsl(var(--card))',
  borderBottom: `1px solid hsl(var(--border))`,
  position: 'relative',
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

// 📝 콘텐츠 표시 방식별 variants
export const contentVariants = styleVariants({
  // 조건부 렌더링 (기본)
  conditional: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    lineHeight: vars.typography.lineHeight.relaxed,
    color: 'hsl(var(--foreground))',
    backgroundColor: 'hsl(var(--card))',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    ...componentTokens.performance,
    ...componentTokens.themeTransition,
    overflow: 'visible',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  },

  // CSS display
  hidden: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    display: 'none',
    lineHeight: vars.typography.lineHeight.relaxed,
    color: 'hsl(var(--foreground))',
    backgroundColor: 'hsl(var(--card))',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    ...componentTokens.themeTransition,
  },

  visible: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    display: 'block',
    lineHeight: vars.typography.lineHeight.relaxed,
    color: 'hsl(var(--foreground))',
    backgroundColor: 'hsl(var(--card))',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    ...componentTokens.performance,
    ...componentTokens.themeTransition,
    overflow: 'visible',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  },

  // CSS 애니메이션
  animated: {
    padding: `0 ${vars.space.xl}`,
    borderBottomWidth: '0',
    maxHeight: '0',
    overflow: 'hidden',
    transition: `all ${vars.transition.slow}`,
    opacity: '0',
    transform: 'translate3d(0, -10px, 0)',
    willChange: 'transform, opacity, max-height, padding',
    transformOrigin: 'top',
    backgroundColor: 'hsl(var(--card))',
    color: 'hsl(var(--foreground))',
    contain: 'layout style paint',
    backfaceVisibility: 'hidden',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
  },

  animatedOpen: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    borderBottomWidth: '1px',
    maxHeight: '500px',
    opacity: '1',
    transform: 'translate3d(0, 0, 0)',
    willChange: 'transform, opacity, max-height, padding',
    transformOrigin: 'top',
    lineHeight: vars.typography.lineHeight.relaxed,
    color: 'hsl(var(--foreground))',
    backgroundColor: 'hsl(var(--card))',
    contain: 'layout style paint',
    backfaceVisibility: 'hidden',
    transition: `all ${vars.transition.slow}, color 0.3s ease, background-color 0.3s ease`,
    overflow: 'visible',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
  },
});

// 🏷️ 리스트 아이템 variants
export const itemVariants = styleVariants({
  default: {
    ...componentTokens.performance,
  },
  animated: {
    overflow: 'hidden',
    ...componentTokens.performance,
  },
});

// 📊 메인 페이지 스타일
export const pageContainer = style({
  minHeight: '100vh',
  background: 'hsl(var(--background))',
  padding: `${vars.space.xl} ${vars.space.md}`,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const pageHeader = style({
  textAlign: 'center',
  marginBottom: vars.space['2xl'],
  padding: `${vars.space.xl} 0`,
  ...componentTokens.performance,
});

export const pageTitle = style({
  fontSize: vars.typography.fontSize['4xl'],
  fontWeight: vars.typography.fontWeight.extrabold,
  background: `linear-gradient(135deg, ${vars.color.primary[600]} 0%, ${vars.color.primary[800]} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: vars.space.md,
  letterSpacing: '-0.025em',
  ...componentTokens.performance,
});

export const pageSubtitle = style({
  fontSize: vars.typography.fontSize.xl,
  color: 'hsl(var(--muted-foreground))',
  fontWeight: vars.typography.fontWeight.normal,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: vars.typography.lineHeight.normal,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const section = style({
  marginBottom: vars.space['2xl'],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  backgroundColor: 'hsl(var(--card))',
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.lg,
  backdropFilter: 'blur(10px)',
  border: `1px solid hsl(var(--border))`,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const sectionTitle = style({
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: vars.typography.fontWeight.bold,
  marginBottom: vars.space.lg,
  color: 'hsl(var(--foreground))',
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,

  selectors: {
    '&::before': {
      content: '""',
      width: '4px',
      height: '24px',
      background: `linear-gradient(135deg, ${vars.color.primary[500]} 0%, ${vars.color.primary[700]} 100%)`,
      borderRadius: vars.radius.sm,
      willChange: 'auto',
    },
  },
});

export const summary = style({
  marginTop: vars.space['2xl'],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  background: 'hsl(var(--muted))',
  borderRadius: vars.radius.xl,
  border: `1px solid hsl(var(--border))`,
  boxShadow: vars.shadow.md,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const summaryTitle = style({
  color: 'hsl(var(--foreground))',
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: vars.typography.fontWeight.bold,
  marginBottom: vars.space.lg,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,

  selectors: {
    '&::before': {
      content: '🔍',
      fontSize: vars.typography.fontSize.xl,
      willChange: 'auto',
    },
  },
});

export const summaryList = style({
  lineHeight: vars.typography.lineHeight.loose,
  color: 'hsl(var(--muted-foreground))',
  fontSize: vars.typography.fontSize.base,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const summaryItem = style({
  marginBottom: vars.space.md,
  paddingLeft: vars.space.md,
  position: 'relative',
  ...componentTokens.performance,

  selectors: {
    '&::before': {
      content: '•',
      color: vars.color.primary[500],
      fontWeight: vars.typography.fontWeight.bold,
      position: 'absolute',
      left: '0',
      top: '0',
      willChange: 'auto',
    },
  },
});

// 🎨 Details 태그 스타일
export const detailsContainer = style({
  border: `1px solid hsl(var(--border))`,
  borderRadius: vars.radius.lg,
  margin: `${vars.space.xl} 0`,
  padding: '0',
  listStyle: 'none',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflow: 'visible',
  boxShadow: vars.shadow.md,
  backgroundColor: 'hsl(var(--card))',
  backdropFilter: 'blur(10px)',
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const detailsItem = style({
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const detailsSummary = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderRadius: vars.radius.md,
  fontSize: vars.typography.fontSize.base,
  fontWeight: vars.typography.fontWeight.medium,
  transition: `all ${vars.transition.normal}`,
  cursor: 'pointer',
  userSelect: 'none',
  borderBottom: `1px solid hsl(var(--border))`,
  background: 'hsl(var(--card))',
  color: 'hsl(var(--foreground))',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  ...componentTokens.performance,

  ':hover': {
    background: 'hsl(var(--accent))',
    transform: 'translate3d(0, -1px, 0)',
    boxShadow: vars.shadow.sm,
  },

  ':active': {
    transform: 'translate3d(0, 0, 0)',
  },

  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '0',
      width: '4px',
      background: 'transparent',
      transition: `background-color ${vars.transition.normal}`,
    },
    '&::marker': {
      display: 'none',
    },
  },
});

export const detailsContent = style({
  padding: `${vars.space.lg} ${vars.space.xl}`,
  lineHeight: vars.typography.lineHeight.relaxed,
  color: 'hsl(var(--foreground))',
  backgroundColor: 'hsl(var(--card))',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '100%',
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
  overflow: 'visible',
  wordWrap: 'break-word',
  wordBreak: 'break-word',
});

// 🎯 Radio 스타일
export const radioInput = style({
  display: 'none',
});

export const radioLabel = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border.light}`,
  cursor: 'pointer',
  backgroundColor: vars.color.background.card,
  userSelect: 'none',
  fontWeight: vars.typography.fontWeight.medium,
  transition: `all ${vars.transition.normal}`,
  position: 'relative',
  color: vars.color.text.primary,
  ...componentTokens.performance,

  ':hover': {
    background: vars.color.interactive.accent,
    transform: 'translate3d(0, -1px, 0)',
  },

  selectors: {
    '&::before': {
      content: '""',
      position: 'relative',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: `2px solid ${vars.color.border.medium}`,
      marginRight: vars.space.md,
      transition: `all ${vars.transition.normal}`,
      willChange: 'border-color',
      flexShrink: 0,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      left: `${vars.space.md + 6}px`,
      top: '50%',
      transform: 'translate3d(0, -50%, 0)',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'transparent',
      transition: `all ${vars.transition.normal}`,
      willChange: 'background-color',
    },
  },
});

export const radioContent = style({
  maxHeight: '0',
  overflow: 'hidden',
  transition: `all ${vars.transition.slow}`,
  backgroundColor: vars.color.background.card,
  color: vars.color.text.primary,
  opacity: '0',
  transform: 'translate3d(0, -10px, 0)',
  willChange: 'transform, opacity, max-height, padding',
  contain: 'layout style paint',
  backfaceVisibility: 'hidden',
});

// 🎯 토글 아이콘 스타일
export const toggleIcon = style({
  marginLeft: 'auto',
  fontSize: '14px',
  fontWeight: vars.typography.fontWeight.bold,
  minWidth: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.sm,
  transition: `all ${vars.transition.normal}`,
  cursor: 'pointer',
  userSelect: 'none',
  ...componentTokens.performance,
});

export const toggleIconVariants = styleVariants({
  inactive: {
    backgroundColor: vars.color.background.muted,
    color: vars.color.text.secondary,
    transform: 'rotate3d(0, 0, 1, 0deg)',
  },
  active: {
    backgroundColor: vars.color.interactive.primary,
    color: vars.color.interactive.primaryForeground,
    transform: 'rotate3d(0, 0, 1, 180deg)',
  },
});

// 🌐 글로벌 스타일
globalStyle(`${radioInput}:checked + ${radioLabel}::before`, {
  borderColor: 'hsl(var(--secondary))',
});

globalStyle(`${radioInput}:checked + ${radioLabel}::after`, {
  background: 'hsl(var(--secondary))',
});

globalStyle(`${radioInput}:checked + ${radioLabel}`, {
  background: 'hsl(var(--primary))',
  color: 'hsl(var(--primary-foreground))',
  fontWeight: vars.typography.fontWeight.semibold,
  transform: 'translate3d(0, 0, 0)',
});

globalStyle(`${radioInput}:checked + ${radioLabel} + ${radioContent}`, {
  maxHeight: '500px',
  padding: `${vars.space.lg} ${vars.space.xl}`,
  borderBottomWidth: '1px',
  opacity: '1',
  transform: 'translate3d(0, 0, 0)',
  lineHeight: vars.typography.lineHeight.relaxed,
  color: vars.color.text.primary,
  backgroundColor: vars.color.background.card,
});

// Details 관련 글로벌 스타일
globalStyle(`details[open] ${detailsSummary}`, {
  backgroundColor: vars.color.interactive.primary,
  color: vars.color.interactive.primaryForeground,
  fontWeight: vars.typography.fontWeight.semibold,
  transform: 'translate3d(0, 0, 0)',
});

// 스크롤바 스타일링
globalStyle('*', {
  scrollbarWidth: 'thin',
  scrollbarColor: `${vars.color.border.medium} transparent`,
  boxSizing: 'border-box',
});

globalStyle('*::-webkit-scrollbar', {
  width: '6px',
  willChange: 'auto',
});

globalStyle('*::-webkit-scrollbar-track', {
  background: 'transparent',
  willChange: 'auto',
});

globalStyle('*::-webkit-scrollbar-thumb', {
  background: vars.color.border.medium,
  borderRadius: '3px',
  willChange: 'background-color',
});

globalStyle('*::-webkit-scrollbar-thumb:hover', {
  background: vars.color.border.dark,
});

// 성능 최적화 글로벌 스타일
globalStyle('html, body', {
  scrollBehavior: 'smooth',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
  perspective: '1000px',
});

globalStyle('img, video, canvas', {
  maxWidth: '100%',
  height: 'auto',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
});

globalStyle('body', {
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  transform: 'translateZ(0)',
});
