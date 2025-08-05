import { createTheme } from '@vanilla-extract/css';

// 🎨 공통 디자인 토큰 - 다크테마 지원
export const [themeClass, vars] = createTheme({
  // 색상 시스템
  color: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    // 다크테마 호환 색상
    background: {
      page: 'hsl(var(--background))',
      card: 'hsl(var(--card))',
      muted: 'hsl(var(--muted))',
    },
    text: {
      primary: 'hsl(var(--foreground))',
      secondary: 'hsl(var(--muted-foreground))',
      accent: 'hsl(var(--primary))',
    },
    border: {
      light: 'hsl(var(--border))',
      medium: 'hsl(var(--border))',
      dark: 'hsl(var(--border))',
    },
    interactive: {
      primary: 'hsl(var(--primary))',
      primaryForeground: 'hsl(var(--primary-foreground))',
      accent: 'hsl(var(--accent))',
      accentForeground: 'hsl(var(--accent-foreground))',
    },
  },

  // 간격 시스템
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },

  // 둥근 모서리 시스템
  radius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },

  // 그림자 시스템
  shadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },

  // 전환 시스템
  transition: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // 타이포그래피 시스템
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, "JetBrains Mono", "Fira Code", Monaco, Consolas, monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
    },
  },

  // z-index 시스템
  zIndex: {
    hide: '-1',
    auto: 'auto',
    base: '0',
    docked: '10',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    tooltip: '1600',
  },
});

// 🎯 공통 컴포넌트 스타일 변수
export const componentTokens = {
  // 컨테이너 스타일
  container: {
    border: `1px solid ${vars.color.border.light}`,
    borderRadius: vars.radius.lg,
    backgroundColor: vars.color.background.card,
    boxShadow: vars.shadow.md,
    backdropFilter: 'blur(10px)',
  },

  // 섹션 스타일
  section: {
    marginBottom: vars.space['2xl'],
    padding: `${vars.space.xl} ${vars.space.lg}`,
    backgroundColor: vars.color.background.card,
    borderRadius: vars.radius.xl,
    boxShadow: vars.shadow.lg,
    border: `1px solid ${vars.color.border.light}`,
  },

  // 제목 스타일
  title: {
    fontSize: vars.typography.fontSize['2xl'],
    fontWeight: vars.typography.fontWeight.bold,
    color: vars.color.text.primary,
    marginBottom: vars.space.lg,
  },

  // 버튼 스타일
  button: {
    padding: `${vars.space.md} ${vars.space.lg}`,
    borderRadius: vars.radius.md,
    fontSize: vars.typography.fontSize.base,
    fontWeight: vars.typography.fontWeight.medium,
    transition: `all ${vars.transition.normal}`,
    cursor: 'pointer',
    userSelect: 'none',
  },

  // 콘텐츠 스타일
  content: {
    padding: `${vars.space.lg} ${vars.space.xl}`,
    lineHeight: vars.typography.lineHeight.relaxed,
    color: vars.color.text.primary,
    backgroundColor: vars.color.background.card,
  },

  // 성능 최적화
  performance: {
    willChange: 'auto',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
    contain: 'layout style paint',
  },

  // 다크테마 전환
  themeTransition: {
    transition:
      'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
  },

  // 요약 정보 스타일
  summaryDetails: {
    marginTop: '12px',
    fontSize: '14px',
    color: 'hsl(var(--muted-foreground))',
  },
} as const;
