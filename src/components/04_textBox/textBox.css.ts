import { style } from '@vanilla-extract/css';
import { vars, componentTokens } from '../../styles/design-system.css';

export const section = style({
  marginBottom: vars.space['2xl'],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  backgroundColor: 'hsl(var(--card))',
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.lg,
  border: `1px solid hsl(var(--border))`,
  ...componentTokens.themeTransition,
});

export const sectionTitle = style({
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: vars.typography.fontWeight.bold,
  marginBottom: vars.space.lg,
  color: 'hsl(var(--foreground))',
});

export const summary = style({
  marginBottom: vars.space.lg,
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: 'hsl(var(--muted))',
  borderRadius: vars.radius.lg,
  border: `1px solid hsl(var(--border))`,
});

export const summaryDetails = style({
  marginTop: vars.space.sm,
  lineHeight: vars.typography.lineHeight.relaxed,
  color: 'hsl(var(--muted-foreground))',
});

export const container = style({
  width: '50vw',
  maxWidth: '100%',
  position: 'relative',
});

export const textarea = style({
  lineHeight: '1',
  boxSizing: 'border-box',
  width: '100%',
  resize: 'none',
  overflowY: 'auto',
  margin: 0,
  padding: 0,
  fontSize: vars.typography.fontSize.base,
  color: 'hsl(var(--foreground))',
  backgroundColor: 'hsl(var(--card))',
  border: `1px solid hsl(var(--border))`,
  borderRadius: vars.radius.md,
});

export const clone = style({
  position: 'absolute',
  paddingTop: 0,
  paddingBottom: 0,
  visibility: 'hidden',
  opacity: 0,
  zIndex: -1,
  lineHeight: '1',
  boxSizing: 'border-box',
  width: '100%',
});
