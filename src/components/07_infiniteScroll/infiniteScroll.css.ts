import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/design-system.css';

export const pageContainer = style({
  minHeight: '100vh',
  background: 'hsl(var(--background))',
  padding: `${vars.space.xl} ${vars.space.md}`,
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
  letterSpacing: '-0.025em',
});

export const pageSubtitle = style({
  fontSize: vars.typography.fontSize.xl,
  color: 'hsl(var(--muted-foreground))',
  fontWeight: vars.typography.fontWeight.normal,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: vars.typography.lineHeight.normal,
});

export const section = style({
  marginBottom: vars.space['2xl'],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  backgroundColor: 'hsl(var(--card))',
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.lg,
  backdropFilter: 'blur(10px)',
  border: `1px solid hsl(var(--border))`,
});

export const sectionTitle = style({
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: vars.typography.fontWeight.bold,
  marginBottom: vars.space.lg,
  color: 'hsl(var(--foreground))',
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,

  selectors: {
    '&::before': {
      content: '""',
      width: '4px',
      height: '24px',
      background: `linear-gradient(135deg, ${vars.color.primary[500]} 0%, ${vars.color.primary[700]} 100%)`,
      borderRadius: vars.radius.sm,
    },
  },
});

export const summary = style({
  marginTop: vars.space['2xl'],
  marginBottom: vars.space['md'],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  background: 'hsl(var(--muted))',
  borderRadius: vars.radius.xl,
  border: `1px solid hsl(var(--border))`,
  boxShadow: vars.shadow.md,
});

export const summaryDetails = style({
  marginTop: vars.space.lg,
  padding: vars.space.lg,
  backgroundColor: 'hsl(var(--muted))',
  borderRadius: vars.radius.lg,
  fontSize: vars.typography.fontSize.base,
});

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gap: '20px',
  marginTop: '20px',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const listContainer = style({
  maxHeight: '600px',
  overflowY: 'auto',
  border: `1px solid hsl(var(--border))`,
  borderRadius: vars.radius.md,
  backgroundColor: 'hsl(var(--card))',
  marginTop: '20px',
});

export const listItem = style({
  padding: vars.space.lg,
  borderBottom: `1px solid hsl(var(--border))`,
  transition: 'background-color 0.2s ease',

  selectors: {
    '&:hover': {
      backgroundColor: 'hsl(var(--muted))',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const itemTitle = style({
  fontSize: vars.typography.fontSize.lg,
  fontWeight: vars.typography.fontWeight.bold,
  color: 'hsl(var(--foreground))',
  marginBottom: vars.space.sm,
  lineHeight: vars.typography.lineHeight.tight,
});

export const itemDescription = style({
  fontSize: vars.typography.fontSize.base,
  color: 'hsl(var(--muted-foreground))',
  lineHeight: vars.typography.lineHeight.normal,
});

export const itemNumber = style({
  display: 'inline-block',
  backgroundColor: `hsl(var(--primary))`,
  color: 'white',
  borderRadius: '50%',
  width: '24px',
  height: '24px',
  textAlign: 'center',
  lineHeight: '24px',
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.bold,
  marginRight: vars.space.sm,
});

export const spinner = style({
  display: 'block',
  width: '36px',
  margin: '2rem auto',

  selectors: {
    '&::before': {
      content: '""',
      display: 'block',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: '3px solid hsl(var(--border))',
      borderTopColor: `hsl(var(--primary))`,
      animation: 'spin 1s linear infinite',
    },
  },
});

export const moreTrigger = style({
  height: '20px',
  margin: '1rem 0',
});

export const codeExample = style({
  marginTop: vars.space.xl,
  marginBottom: vars.space.xl,
  border: `1px solid hsl(var(--border))`,
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
  backgroundColor: 'hsl(var(--card))',
  boxShadow: vars.shadow.md,
});

export const codeHeader = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  backgroundColor: 'hsl(var(--muted))',
  borderBottom: `1px solid hsl(var(--border))`,
});

export const codeTitle = style({
  fontSize: vars.typography.fontSize.base,
  fontWeight: vars.typography.fontWeight.semibold,
  color: 'hsl(var(--foreground))',
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
});

export const codeContent = style({
  padding: vars.space.lg,
  backgroundColor: 'hsl(var(--background))',
});

export const codePre = style({
  margin: 0,
  overflow: 'auto',
});

export const codeCode = style({
  fontSize: vars.typography.fontSize.sm,
  fontFamily:
    'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
  lineHeight: vars.typography.lineHeight.relaxed,
  color: 'hsl(var(--foreground))',
});
