import { style, styleVariants } from '@vanilla-extract/css';
import { vars, componentTokens } from '../../styles/design-system.css';

// Export themeClass for components to use
export { themeClass } from '../../styles/design-system.css';

// 공통 페이지 컨테이너 스타일
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
  overflow: 'visible', // 툴팁이 잘리지 않도록
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

export const summaryDetails = style({
  ...componentTokens.summaryDetails,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

// 툴팁 전용 스타일
export const tooltipsContainer = style({
  padding: vars.space.lg,
  ...componentTokens.performance,
});

// 🎯 컨테이너 스타일
export const container = style({
  display: 'flex',
  flexDirection: 'column', // 세로 배치로 변경
  gap: vars.space.md,
  margin: `${vars.space.xl} 0`,
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  overflow: 'visible', // 세로 배치이므로 visible로 복원
  boxShadow: vars.shadow.md,
  backgroundColor: 'hsl(var(--card))',
  backdropFilter: 'blur(10px)',
  borderRadius: vars.radius.lg,
  border: `1px solid hsl(var(--border))`,
  padding: vars.space.lg,
  ...componentTokens.themeTransition,
});

// 🎯 트리거 스타일 (툴팁용)
export const trigger = style({
  fontSize: vars.typography.fontSize.base,
  lineHeight: vars.typography.lineHeight.normal,
  display: 'inline-block',
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
  margin: 0,
  padding: 0,
  textAlign: 'left',
  cursor: 'pointer',
  color: 'hsl(var(--foreground))',
  transition: `all ${vars.transition.normal}`,

  ':hover': {
    color: 'hsl(var(--primary))',
  },
});

// 버튼 내에서 툴팁의 기준이 되는 앵커
export const anchor = style({
  display: 'inline-block',
  position: 'relative',
  marginLeft: vars.space.sm,
  verticalAlign: 'text-bottom',
});

// 느낌표 점 스타일
export const dot = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid hsl(var(--border))`,
  width: '1rem',
  height: '1rem',
  fontSize: vars.typography.fontSize.sm,
  lineHeight: '1rem',
  borderRadius: '50%',
  backgroundColor: 'hsl(var(--card))',
  color: 'hsl(var(--foreground))',
  transition: `all ${vars.transition.normal}`,
});

// 🎯 상세 정보 스타일 (HTML Details 태그 방식)
export const details = style({
  position: 'relative',
  marginRight: vars.space.md,
  display: 'inline-block', // 인라인 블록으로 설정
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
  marginLeft: vars.space.md,
  cursor: 'pointer',
  ...componentTokens.themeTransition,
});

// 🎯 툴팁 스타일 (조건부 렌더링 방식)
export const tooltip = style({
  position: 'absolute',
  display: 'block',
  top: 'calc(100% + 8px)',
  left: '50%',
  transform: 'translateX(-50%)',
  minWidth: '300px',
  maxWidth: '500px',
  width: 'auto',
  padding: vars.space.md,
  border: `1px solid hsl(var(--border))`,
  backgroundColor: 'hsl(var(--card))',
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  zIndex: 9999,
  fontSize: vars.typography.fontSize.sm,
  lineHeight: vars.typography.lineHeight.relaxed,
  color: 'hsl(var(--foreground))',
  backdropFilter: 'blur(10px)',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  ...componentTokens.themeTransition,
  selectors: {
    // details 안에서는 기본 숨김, open 시 노출
    [`${details} &`]: {
      display: 'none',
    },
    [`${details}[open] &`]: {
      display: 'block',
    },
  },
});

// 🎯 아이템 컨테이너 스타일 (툴팁용)
export const itemContainer = style({
  display: 'inline-block', // inline-block으로 변경하여 내용에 맞는 너비
  position: 'relative', // 툴팁의 기준점이 되도록 명시적 설정
  width: 'auto', // 내용에 맞는 자동 너비
  overflow: 'visible', // 툴팁이 잘리지 않도록
  ...componentTokens.themeTransition,
});

// 🎯 요약 트리거 스타일 (HTML Details 태그 방식)
export const summaryTrigger = style({
  listStyle: 'none',
  cursor: 'pointer',
  color: 'hsl(var(--foreground))',
  display: 'inline-block', // 인라인 블록으로 설정
  ...componentTokens.themeTransition,

  selectors: {
    '&::marker': {
      content: '""',
      display: 'none',
    },
  },
});

// 툴팁 위치 변형
export const tooltipPosition = styleVariants({
  top: {
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: vars.space.sm,
  },
  bottom: {
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: vars.space.sm,
  },
  left: {
    right: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginRight: vars.space.sm,
  },
  right: {
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    marginLeft: vars.space.sm,
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

// 애니메이션 툴팁 스타일
export const animatedTooltip = style({
  opacity: 0,
  transform: 'scale(0.95) translateY(-10px)',
  transition: `opacity ${vars.transition.normal}, transform ${vars.transition.normal}`,
});

export const animatedTooltipVisible = style({
  opacity: 1,
  transform: 'scale(1) translateY(0)',
});

// 뷰포트 기반 툴팁 스타일
export const viewportTooltip = style({
  position: 'fixed',
  zIndex: vars.zIndex.tooltip,
  ...componentTokens.performance,
});

// 단일 열림 툴팁 스타일
export const singleOpenTooltip = style({
  position: 'absolute',
  zIndex: vars.zIndex.tooltip,
  ...componentTokens.performance,
});

// 🎯 툴팁 스타일 (Portal 방식)
export const portalTooltip = style({
  position: 'fixed', // Portal로 body에 렌더링되므로 fixed 사용
  display: 'block',
  minWidth: '300px',
  maxWidth: '500px',
  width: 'auto',
  padding: vars.space.md,
  border: `1px solid hsl(var(--border))`,
  backgroundColor: 'hsl(var(--card))',
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.lg,
  zIndex: 9999, // 매우 높은 z-index로 모든 요소 위에 표시
  fontSize: vars.typography.fontSize.sm,
  lineHeight: vars.typography.lineHeight.relaxed,
  color: 'hsl(var(--foreground))',
  backdropFilter: 'blur(10px)',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  pointerEvents: 'auto', // Portal에서 클릭 이벤트 처리
  ...componentTokens.themeTransition,
});

// 포털 컨텐츠 내부 여백/정렬
export const portalInner = style({
  padding: vars.space.md,
});

export const portalTitle = style({
  color: 'hsl(var(--foreground))',
  fontWeight: vars.typography.fontWeight.bold,
});

export const portalBody = style({
  marginTop: vars.space.sm,
  marginBottom: vars.space.md,
});

export const portalCloseButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  cursor: 'pointer',
  backgroundColor: 'hsl(var(--primary))',
  color: 'hsl(var(--primary-foreground))',
  border: 'none',
  borderRadius: vars.radius.sm,
  fontSize: vars.typography.fontSize.sm,
});

// 🎯 툴팁 메뉴 컨테이너 (VanillaWrapper용 간격)
export const tooltipMenu = style({
  margin: `${vars.space.xl} 0`,
});
