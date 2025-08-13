import { style } from '@vanilla-extract/css';
import { vars, componentTokens } from '../../styles/design-system.css';

export { themeClass } from '../../styles/design-system.css';

export const pageContainer = style({
  minHeight: '100vh',
  background: vars.color.background.page,
  padding: `${vars.space.xl} ${vars.space.md}`,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const pageHeader = style({
  textAlign: 'center',
  marginBottom: vars.space['2xl'],
  padding: `${vars.space.xl} 0`,
});

export const pageTitle = style({
  fontSize: vars.typography.fontSize['4xl'],
  fontWeight: vars.typography.fontWeight.extrabold,
  background: `linear-gradient(135deg, ${vars.color.primary[600]} 0%, ${vars.color.primary[800]} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: vars.space.md,
});

export const pageSubtitle = style({
  fontSize: vars.typography.fontSize.xl,
  color: vars.color.text.secondary,
});

export const section = style({
  ...componentTokens.section,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const sectionTitle = style({
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: vars.typography.fontWeight.bold,
  marginBottom: vars.space.lg,
  color: vars.color.text.primary,
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
  marginBottom: vars.space.lg,
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: vars.color.background.muted,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.light}`,
});

export const summaryDetails = style({
  marginTop: vars.space.sm,
  lineHeight: vars.typography.lineHeight.relaxed,
  color: vars.color.text.secondary,
});

export const container = style({
  width: '50vw',
  maxWidth: '100%',
  position: 'relative',
  margin: `${vars.space.md} ${vars.space.md}`,
});

export const textarea = style({
  lineHeight: '1',
  boxSizing: 'border-box',
  width: '100%',
  resize: 'none',
  overflowY: 'auto',
  margin: `${vars.space.sm} 0`,
  paddingTop: vars.space.sm,
  paddingLeft: vars.space.md,
  fontSize: vars.typography.fontSize.base,
  color: 'hsl(var(--foreground))',
  backgroundColor: 'hsl(var(--card))',
  border: `1px solid hsl(var(--border))`,
  borderRadius: vars.radius.md,
});

export const clone = style({
  position: 'absolute',
  paddingTop: vars.space.sm,
  paddingBottom: 0,
  paddingLeft: vars.space.md,
  visibility: 'hidden',
  opacity: 0,
  zIndex: -1,
  lineHeight: '1',
  boxSizing: 'border-box',
  width: '100%',
});

// 액션 영역 및 버튼
export const actions = style({
  marginTop: vars.space.md,
  display: 'flex',
  gap: vars.space.sm,
});

export const submitButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: 'none',
  borderRadius: vars.radius.sm,
  backgroundColor: 'hsl(var(--primary))',
  color: 'hsl(var(--primary-foreground))',
  cursor: 'pointer',
  transition: `all ${vars.transition.normal}`,
  ':hover': {
    opacity: 0.9,
  },
});

export const resultText = style({
  marginTop: vars.space.sm,
});
