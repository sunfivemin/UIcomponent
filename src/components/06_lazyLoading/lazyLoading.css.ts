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

export const imageContainer = style({
  borderRadius: vars.radius.md,
  backgroundColor: 'rgb(207, 207, 207)',
  marginBottom: '10px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',

  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: vars.shadow.lg,
  },
});

export const lazy = style({
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  backgroundColor: '#cab',
  borderRadius: vars.radius.md,
  objectFit: 'cover',
  fontSize: '12px',
  fontWeight: 'bold',
});

export const image = style({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  transition: 'opacity 0.7s ease-in-out',
  opacity: 0,
  position: 'relative',
  zIndex: 1,
  fontSize: '12px',
  fontWeight: 'bold',
  borderRadius: vars.radius.md,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',

  selectors: {
    '&.loaded': {
      opacity: 1,
    },
    '&:not(.lazy)': {
      opacity: 1,
    },
  },
});

export const placeholder = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'hsl(var(--muted))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.typography.fontSize.sm,
  color: 'hsl(var(--muted-foreground))',
  flexDirection: 'column',
  gap: '8px',
  minHeight: '200px', // 최소 높이 추가
});

export const loadingSpinner = style({
  display: 'inline-block',
  width: '20px',
  height: '20px',
  border: `2px solid hsl(var(--border))`,
  borderTop: `2px solid hsl(var(--primary))`,
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
});

export const loadMoreButton = style({
  display: 'block',
  width: '100%',
  maxWidth: '200px',
  margin: '40px auto 0',
  padding: '12px 24px',
  backgroundColor: 'hsl(var(--primary))',
  color: 'hsl(var(--primary-foreground))',
  border: 'none',
  borderRadius: vars.radius.md,
  fontSize: vars.typography.fontSize.base,
  fontWeight: vars.typography.fontWeight.medium,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: 'hsl(var(--primary))',
    opacity: 0.9,
  },

  ':disabled': {
    backgroundColor: 'hsl(var(--muted))',
    color: 'hsl(var(--muted-foreground))',
    cursor: 'not-allowed',
  },
});

export const endMessage = style({
  textAlign: 'center',
  padding: '20px',
  color: 'hsl(var(--muted-foreground))',
  fontSize: vars.typography.fontSize.base,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
});

export const errorMessage = style({
  textAlign: 'center',
  padding: '20px',
  fontSize: vars.typography.fontSize.base,
  backgroundColor: 'hsl(var(--destructive))',
  color: 'hsl(var(--destructive-foreground))',
  borderRadius: vars.radius.md,
  margin: '20px 0',
});
