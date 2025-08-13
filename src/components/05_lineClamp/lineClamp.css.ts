import { style } from '@vanilla-extract/css';
import { vars, componentTokens } from '../../styles/design-system.css';

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
  overflow: 'visible',
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

export const summaryDetails = style({
  marginTop: vars.space.sm,
  lineHeight: vars.typography.lineHeight.relaxed,
  color: 'hsl(var(--muted-foreground))',
});

export const container = style({
  width: '70vw',
  maxWidth: '100%',
  position: 'relative',
  margin: `${vars.space.md} ${vars.space.md}`,
});

// LineClamp 전용 스타일
export const content = style({
  position: 'relative',
  margin: '10px 10px',
  padding: '5px 10px',
  border: '1px solid hsl(var(--border))',
  borderRadius: vars.radius.md,
  backgroundColor: 'hsl(var(--card))',
  lineHeight: '1.8',
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const text = style({
  whiteSpace: 'pre-line',
  color: 'hsl(var(--foreground))',
  fontSize: vars.typography.fontSize.base,
  lineHeight: '1.8',
});

export const buttonMore = style({
  position: 'absolute',
  right: '10px',
  bottom: '10px',
  border: '0',
  backgroundColor: 'transparent',
  padding: '2px 8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  fontSize: vars.typography.fontSize.sm,
  color: 'hsl(var(--primary))',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  ...componentTokens.performance,

  selectors: {
    '&:hover': {
      transform: 'scale(1.05)',
      color: 'hsl(var(--primary-foreground))',
    },
    '&::after': {
      content: '""',
      display: 'inline-block',
      width: '4px',
      height: '4px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor:
        'transparent hsl(var(--primary)) hsl(var(--primary)) transparent',
      transform: 'rotate(45deg)',
      verticalAlign: 'middle',
    },
  },
});

export const textClone = style({
  position: 'absolute',
  boxSizing: 'border-box',
  left: '10px',
  top: '10px',
  whiteSpace: 'pre-line',
  visibility: 'hidden',
  opacity: '0',
  zIndex: '-1',
  color: 'hsl(var(--foreground))',
  fontSize: vars.typography.fontSize.base,
  lineHeight: '1.8',
});

// clamped 상태일 때의 텍스트 스타일
export const textClamped = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '3', // 3줄 제한 추가
});
