import { style, styleVariants, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// 아코디언과 동일한 페이지 스타일 추가
export const pageContainer = style({
  minHeight: '100vh',
  background: 'hsl(var(--background))',
  padding: '32px 16px',
  transition: 'background-color 0.3s ease',
});

export const themeClass = style({
  // 다크테마 지원을 위한 클래스
});

export const pageHeader = style({
  textAlign: 'center',
  marginBottom: '48px',
  padding: '32px 0',
});

export const pageTitle = style({
  fontSize: '3rem',
  fontWeight: '800',
  background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '16px',
  letterSpacing: '-0.025em',
});

export const pageSubtitle = style({
  fontSize: '1.25rem',
  color: 'hsl(var(--muted-foreground))',
  fontWeight: '400',
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: '1.6',
  transition: 'color 0.3s ease',
});

export const section = style({
  marginBottom: '48px',
  padding: '32px 24px',
  backgroundColor: 'hsl(var(--card))',
  borderRadius: '16px',
  boxShadow:
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid hsl(var(--border))',
  transition:
    'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
});

export const sectionTitle = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: '24px',
  color: 'hsl(var(--foreground))',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'color 0.3s ease',

  selectors: {
    '&::before': {
      content: '""',
      width: '4px',
      height: '24px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
      borderRadius: '6px',
      willChange: 'auto',
    },
  },
});

export const summary = style({
  marginTop: '48px',
  padding: '32px 24px',
  background: 'hsl(var(--muted))',
  borderRadius: '16px',
  border: '1px solid hsl(var(--border))',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
});

export const summaryTitle = style({
  color: 'hsl(var(--foreground))',
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'color 0.3s ease',

  selectors: {
    '&::before': {
      content: '🔍',
      fontSize: '1.25rem',
      willChange: 'auto',
    },
  },
});

export const summaryList = style({
  lineHeight: '1.8',
  color: 'hsl(var(--muted-foreground))',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
});

// 탭메뉴 전용 스타일
export const tabMenuContainer = style({
  width: '100%',
  border: '1px solid hsl(var(--border))',
  borderRadius: '12px',
  backgroundColor: 'hsl(var(--card))',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  overflow: 'hidden',
  transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
});

export const tabList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  backgroundColor: 'hsl(var(--card))',
  borderBottom: '1px solid hsl(var(--border))',
  position: 'relative',
  width: '100%',
});

export const tabItem = style({
  flex: '1 1 0%',
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  width: '100%',
});

export const tabButton = style({
  width: '100%',
  padding: '16px 24px',
  border: 'none',
  background: 'hsl(var(--card))',
  color: 'hsl(var(--foreground))',
  fontSize: '1rem',
  fontWeight: 500,
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  ':hover': {
    background: 'hsl(var(--accent))',
  },
});

export const tabButtonActive = style({
  background: 'hsl(var(--primary))',
  color: 'hsl(var(--primary-foreground))',
  fontWeight: 600,
  zIndex: 1,
  ':hover': {
    background: 'hsl(var(--primary))',
  },
});

export const tabButtonInactive = style({});

export const tabButtonVariants = styleVariants({
  active: [tabButton, tabButtonActive],
  inactive: [tabButton, tabButtonInactive],
});

export const content = style({
  padding: '24px',
  minHeight: '120px',
  width: '100%',
  backgroundColor: 'hsl(var(--card))',
  color: 'hsl(var(--foreground))',
  borderBottom: '1px solid hsl(var(--border))',
  position: 'relative',
  transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const contentPanel = style({
  opacity: 0,
  transform: 'translateY(10px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  pointerEvents: 'none',
});

export const contentPanelActive = style({
  opacity: 1,
  transform: 'translateY(0)',
  position: 'relative',
  width: '100%',
  pointerEvents: 'auto',
});

// details 방식 패널도 동일하게 적용
export const detailsPanel = style({
  backgroundColor: 'hsl(var(--card))',
  color: 'hsl(var(--foreground))',
  border: '1px solid hsl(var(--border))',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  marginBottom: '16px',
  padding: '24px',
  transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
});

// 애니메이션 탭메뉴용 스타일
export const animatedTabList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  backgroundColor: 'hsl(var(--card))',
  borderBottom: '1px solid hsl(var(--border))',
  position: 'relative',
  width: '100%',
});

// 라디오 탭메뉴용 스타일
export const radioTabList = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const radioInput = style({
  display: 'none',
});

export const radioLabel = style({
  display: 'block',
  width: '100%',
  padding: '16px 24px',
  border: 'none',
  background: 'hsl(var(--card))',
  color: 'hsl(var(--foreground))',
  fontSize: '1rem',
  fontWeight: 500,
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  ':hover': {
    background: 'hsl(var(--accent))',
  },
  selectors: {
    [`${radioInput}:checked + &`]: {
      color: 'hsl(var(--primary-foreground))',
      backgroundColor: 'hsl(var(--primary))',
      fontWeight: 600,
    },
  },
});

export const radioContent = style({
  display: 'none',
  padding: '24px',
  minHeight: '120px',
  width: '100%',
  backgroundColor: 'hsl(var(--card))',
  color: 'hsl(var(--foreground))',
  transition: 'background-color 0.3s, color 0.3s',
  boxSizing: 'border-box',
});

// 컨테이너 레시피
export const tabMenu = recipe({
  base: tabMenuContainer,
});
