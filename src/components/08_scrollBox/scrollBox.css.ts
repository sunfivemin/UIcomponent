import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/design-system.css';

export const scrollBox = style({
  position: 'relative',
});

export const list = style({
  display: 'flex',
  flexWrap: 'nowrap',
  listStyle: 'none',
  padding: '20px 0',
  margin: 0,
  overflowY: 'hidden',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const item = style({
  flex: '0 0 auto',
  margin: '0 15px',
  border: 'none',
  listStyle: 'none',
  padding: 0,
  selectors: {
    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
});

export const observer = style({
  flex: '0 0 1px',
  marginRight: '-1px',
});

export const navButton = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '40px',
  height: '60px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  border: 0,
  borderRadius: '8px',
  display: 'none',
  cursor: 'pointer',
  zIndex: 10,
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});

export const navButtonOn = style({
  display: 'block',
  opacity: 0.8,
  transition: 'opacity ease-out 0.2s',
  ':hover': {
    opacity: 1,
  },
});

export const prev = style({
  left: '10px',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '15px',
      top: '50%',
      width: '8px',
      height: '8px',
      borderLeft: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'translateY(-50%) rotate(45deg)',
    },
  },
});

export const next = style({
  right: '10px',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      right: '15px',
      top: '50%',
      width: '8px',
      height: '8px',
      borderRight: '2px solid #fff',
      borderTop: '2px solid #fff',
      transform: 'translateY(-50%) rotate(45deg)',
    },
  },
});

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
  backgroundColor: 'hsl(var(--muted))',
  borderRadius: vars.radius.lg,
  fontSize: vars.typography.fontSize.base,
});

export const scrollBoxPage = style({
  marginBottom: '100px',
});

export const scrollBoxPageItem = style({
  margin: '0 15px',
  padding: '20px',
  border: '2px solid #e0e0e0',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '300px',
  flexShrink: 0,
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  selectors: {
    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
});

export const scrollBoxPageImg = style({
  borderRadius: '5px',
});

export const scrollBoxPageSpan = style({
  display: 'block',
  fontWeight: 700,
  textAlign: 'center',
  marginTop: '10px',
  fontSize: '12px',
  lineHeight: '1.3',
  color: '#333',
  wordBreak: 'break-word',
  maxWidth: '100%',
});

export const imageError = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  color: '#666',
  fontSize: '14px',
  backgroundColor: '#f0f0f0',
});

export const image = style({
  borderRadius: '8px',
  transition: 'opacity 0.3s ease-in-out',
  border: 'none',
  outline: 'none',
});
