import { globalStyle, keyframes } from '@vanilla-extract/css';
import './tokens.css';

// 로딩 애니메이션 keyframes 정의
const loadingSpin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

// 스핀 애니메이션 keyframes 정의
const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

// Global styles
globalStyle('html, body', {
  height: '100%',
  margin: 0,
});

globalStyle('body', {
  overflowY: 'scroll',
  paddingLeft: '200px',
});

globalStyle('body.no-scroll', {
  overflow: 'hidden',
});

// Aside (Navigation) styles - 다크테마 적용
globalStyle('aside', {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  margin: 0,
  padding: 0,
  width: '199px',
  borderRight: `1px solid var(--sidebar-border)`,
  backgroundColor: 'var(--sidebar-bg)',
  color: 'var(--sidebar-color)',
  transition:
    'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
});

// CSS Variables for aside - 다크테마 변수 사용
globalStyle('aside', {
  '--bg-default': 'var(--sidebar-bg)',
  '--bg-list': 'var(--sidebar-bg)',
  '--bg-list-disabled': 'var(--sidebar-disabled)',
  '--bg-list-active': 'var(--sidebar-active)',
  '--bg-list-open': 'var(--sidebar-open)',
} as any);

globalStyle('aside a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('aside button', {
  display: 'block',
  width: '100%',
  border: 0,
  backgroundColor: 'inherit',
  color: 'inherit',
  fontSize: '13px',
  margin: 0,
  textAlign: 'left',
  padding: '10px 20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
});

globalStyle('aside h1', {
  margin: 0,
  padding: '20px',
  overflow: 'hidden',
  fontSize: '16px',
});

globalStyle('aside h1 sub', {
  float: 'right',
  opacity: 0.7,
});

globalStyle('aside ul', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  backgroundColor: 'var(--bg-list)',
});

globalStyle('aside li', {
  borderTop: `1px solid var(--bg-default)`,
  transition: 'background-color ease 0.3s',
});

globalStyle('aside li.active', {
  backgroundColor: 'var(--bg-list-active)',
  fontWeight: 700,
});

globalStyle('aside li.open', {
  backgroundColor: 'var(--bg-list-open)',
  fontWeight: 700,
});

// VanillaWrapper 스타일
globalStyle('.vanilla-wrapper', {
  border: '1px solid hsl(var(--border))',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'hsl(var(--background))',
  // margin 제거 (아코디언 컨테이너에 마진이 있으므로)
});

globalStyle('.vanilla-wrapper-header', {
  padding: '16px 20px',
  borderBottom: '1px solid hsl(var(--border))',
  backgroundColor: 'hsl(var(--muted))',
  borderRadius: '8px 8px 0 0',
  fontSize: '14px',
  fontWeight: '500',
  color: 'hsl(var(--muted-foreground))',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

globalStyle('.vanilla-wrapper-icon', {
  fontSize: '16px',
});

globalStyle('aside li a', {
  display: 'block',
  padding: '10px 20px 10px 25px',
  fontSize: '13px',
});

globalStyle('aside li.disabled', {
  display: 'block',
  padding: '10px 20px 10px 25px',
  color: 'var(--sidebar-disabled)',
  backgroundColor: 'var(--bg-list-disabled)',
  cursor: 'not-allowed',
  fontSize: '13px',
});

globalStyle('aside .subRoutes', {
  height: 0,
  overflow: 'hidden',
  opacity: 0,
  backgroundColor: 'var(--bg-list-open)',
  transitionProperty: 'height, opacity',
  transitionTimingFunction: 'ease',
  transitionDuration: '0.3s',
});

globalStyle('aside .subRoutes a', {
  paddingLeft: '33px',
});

globalStyle('aside .subRoutes a::before', {
  content: '""',
  display: 'inline-block',
  border: '2px solid var(--sidebar-color)',
  borderRadius: '2px',
  marginRight: '8px',
  verticalAlign: 'middle',
});

globalStyle('aside li.parent > a::before', {
  content: '""',
  display: 'inline-block',
  verticalAlign: '2px',
  border: '4px solid transparent',
  borderLeftColor: 'var(--sidebar-color)',
  marginRight: '4px',
  marginLeft: '-12px',
});

globalStyle('aside li.open .subRoutes', {
  opacity: 1,
});

// Dynamic height for subRoutes based on item count
for (let i = 1; i < 10; i++) {
  globalStyle(`aside li.open.items-${i} .subRoutes`, {
    height: `calc(${i} * 40px)`,
  });
}

globalStyle('aside li.open.parent > a::before', {
  borderTopColor: 'var(--sidebar-color)',
  borderLeftColor: 'transparent',
  verticalAlign: '0px',
  marginRight: '6px',
  marginLeft: '-14px',
});

// Main content styles - 다크테마 적용
globalStyle('main', {
  boxSizing: 'border-box',
  minHeight: '100%',
  width: '100%',
  padding: '20px',
  backgroundColor: 'hsl(var(--background))',
  color: 'hsl(var(--foreground))',
  transition: 'background-color 0.3s ease, color 0.3s ease',
});

globalStyle('main h3 > sub:before', {
  content: '"|"',
  margin: '0 5px 0 10px',
  color: 'hsl(var(--muted-foreground))',
});

// Markdown styles - 현대적이고 아름다운 디자인
globalStyle('.markdown', {
  maxWidth: '900px',
  margin: '0 auto',
  lineHeight: 1.8,
  color: 'hsl(var(--foreground))',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  fontSize: '16px',
});

// 제목 스타일
globalStyle('.markdown h1', {
  fontSize: '2.5rem',
  fontWeight: '800',
  margin: '2rem 0 1.5rem 0',
  paddingBottom: '1rem',
  borderBottom: '3px solid hsl(var(--primary))',
  background:
    'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
});

globalStyle('.markdown h2', {
  fontSize: '1.8rem',
  fontWeight: '700',
  margin: '2.5rem 0 1rem 0',
  padding: '0.5rem 0',
  borderLeft: '4px solid hsl(var(--primary))',
  paddingLeft: '1rem',
  color: 'hsl(var(--foreground))',
});

globalStyle('.markdown h3', {
  fontSize: '1.4rem',
  fontWeight: '600',
  margin: '2rem 0 0.8rem 0',
  color: 'hsl(var(--foreground))',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

globalStyle('.markdown h4', {
  fontSize: '1.2rem',
  fontWeight: '600',
  margin: '1.5rem 0 0.6rem 0',
  color: 'hsl(var(--muted-foreground))',
});

// 단락 스타일
globalStyle('.markdown p', {
  margin: '1rem 0',
  color: 'hsl(var(--foreground))',
  fontSize: '1rem',
});

// 강조 텍스트
globalStyle('.markdown strong', {
  fontWeight: '600',
  color: 'hsl(var(--primary))',
  backgroundColor: 'hsl(var(--primary) / 0.1)',
  padding: '0.1rem 0.3rem',
  borderRadius: '4px',
});

// 리스트 스타일
globalStyle('.markdown ul, .markdown ol', {
  margin: '1rem 0',
  paddingLeft: '2rem',
});

globalStyle('.markdown li', {
  margin: '0.5rem 0',
  lineHeight: '1.6',
  position: 'relative',
});

globalStyle('.markdown ul li::before', {
  content: '"•"',
  color: 'hsl(var(--primary))',
  fontWeight: 'bold',
  display: 'inline-block',
  width: '1em',
  marginLeft: '-1em',
  fontSize: '1.2em',
});

globalStyle('.markdown ol', {
  counterReset: 'list-counter',
});

globalStyle('.markdown ol li', {
  counterIncrement: 'list-counter',
  listStyle: 'none',
});

globalStyle('.markdown ol li::before', {
  content: 'counter(list-counter) "."',
  color: 'hsl(var(--primary))',
  fontWeight: 'bold',
  display: 'inline-block',
  width: '2em',
  marginLeft: '-2em',
});

// 코드 스타일
globalStyle('.markdown code', {
  backgroundColor: 'hsl(var(--muted))',
  color: 'hsl(var(--primary))',
  padding: '0.2rem 0.4rem',
  borderRadius: '6px',
  fontSize: '0.9em',
  fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace",
  fontWeight: '500',
  border: '1px solid hsl(var(--border))',
});

globalStyle('.markdown pre', {
  padding: '1.5rem',
  margin: '1.5rem 0',
  backgroundColor: 'hsl(var(--card))',
  color: 'hsl(var(--card-foreground))',
  borderRadius: '12px',
  border: '1px solid hsl(var(--border))',
  overflow: 'auto',
  position: 'relative',
  boxShadow:
    '0 4px 6px -1px hsl(var(--border) / 0.1), 0 2px 4px -1px hsl(var(--border) / 0.06)',
});

globalStyle('.markdown pre::before', {
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  height: '3px',
  background:
    'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, hsl(var(--accent)) 100%)',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
});

globalStyle('.markdown pre code', {
  background: 'none',
  padding: 0,
  borderRadius: 0,
  border: 'none',
  color: 'inherit',
  fontSize: '0.9rem',
  lineHeight: '1.6',
});

// 인용구 스타일
globalStyle('.markdown blockquote', {
  margin: '1.5rem 0',
  padding: '1rem 1.5rem',
  borderLeft: '4px solid hsl(var(--primary))',
  backgroundColor: 'hsl(var(--muted) / 0.3)',
  borderRadius: '0 8px 8px 0',
  fontStyle: 'italic',
  color: 'hsl(var(--muted-foreground))',
});

// 링크 스타일
globalStyle('.markdown a', {
  color: 'hsl(var(--primary))',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  transition: 'all 0.2s ease',
  fontWeight: '500',
});

globalStyle('.markdown a:hover', {
  borderBottomColor: 'hsl(var(--primary))',
  color: 'hsl(var(--primary) / 0.8)',
});

// 구분선 스타일
globalStyle('.markdown hr', {
  margin: '3rem 0',
  border: 'none',
  height: '2px',
  background:
    'linear-gradient(90deg, transparent 0%, hsl(var(--border)) 50%, transparent 100%)',
});

// 테이블 스타일
globalStyle('.markdown table', {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '1.5rem 0',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid hsl(var(--border))',
});

globalStyle('.markdown th', {
  backgroundColor: 'hsl(var(--muted))',
  padding: '0.75rem 1rem',
  textAlign: 'left',
  fontWeight: '600',
  color: 'hsl(var(--foreground))',
  borderBottom: '1px solid hsl(var(--border))',
});

globalStyle('.markdown td', {
  padding: '0.75rem 1rem',
  borderBottom: '1px solid hsl(var(--border) / 0.5)',
  color: 'hsl(var(--foreground))',
});

globalStyle('.markdown tr:hover', {
  backgroundColor: 'hsl(var(--muted) / 0.3)',
});

// 카드 스타일 (특별한 섹션용)
globalStyle('.markdown .card', {
  background: 'hsl(var(--card))',
  border: '1px solid hsl(var(--border))',
  borderRadius: '12px',
  padding: '1.5rem',
  margin: '1.5rem 0',
  boxShadow:
    '0 1px 3px 0 hsl(var(--border) / 0.1), 0 1px 2px 0 hsl(var(--border) / 0.06)',
  transition: 'all 0.2s ease',
});

globalStyle('.markdown .card:hover', {
  boxShadow:
    '0 4px 6px -1px hsl(var(--border) / 0.1), 0 2px 4px -1px hsl(var(--border) / 0.06)',
  transform: 'translateY(-2px)',
});

// 배지 스타일
globalStyle('.markdown .badge', {
  display: 'inline-block',
  padding: '0.25rem 0.5rem',
  fontSize: '0.75rem',
  fontWeight: '600',
  borderRadius: '6px',
  backgroundColor: 'hsl(var(--primary) / 0.1)',
  color: 'hsl(var(--primary))',
  margin: '0 0.25rem',
});

// 반응형 디자인
globalStyle('.markdown', {
  '@media': {
    '(max-width: 768px)': {
      fontSize: '14px',
      padding: '0 1rem',
    },
  },
});

globalStyle('.markdown h1', {
  '@media': {
    '(max-width: 768px)': {
      fontSize: '2rem',
      margin: '1.5rem 0 1rem 0',
    },
  },
});

globalStyle('.markdown h2', {
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1.5rem',
      margin: '2rem 0 0.8rem 0',
    },
  },
});

globalStyle('.markdown pre', {
  '@media': {
    '(max-width: 768px)': {
      padding: '1rem',
      fontSize: '0.8rem',
    },
  },
});

// 🌙 다크테마 호버 효과 개선
globalStyle('aside li:hover:not(.disabled)', {
  backgroundColor: 'var(--sidebar-hover)',
});

// 🌙 다크테마 활성 상태 개선
globalStyle('aside li.has-active', {
  backgroundColor: 'rgba(59, 130, 246, 0.1)',
  borderLeft: '3px solid var(--sidebar-active)',
});

// 🌙 다크테마 부드러운 애니메이션
globalStyle('aside .subRoutes', {
  height: 0,
  overflow: 'hidden',
  opacity: 0,
  backgroundColor: 'var(--bg-list-open)',
  transitionProperty: 'height, opacity, transform',
  transitionTimingFunction: 'ease-out',
  transitionDuration: '0.2s',
  transform: 'translateY(-10px)',
});

globalStyle('aside li.open .subRoutes', {
  opacity: 1,
  transform: 'translateY(0)',
});

// 포커스 스타일
globalStyle('aside button:focus', {
  outline: 'none',
  boxShadow: '0 0 0 2px rgba(85, 136, 170, 0.5)',
});

// 토글 버튼 스타일
globalStyle('aside .toggle-button', {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '2px',
  borderRadius: '2px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '#fff',
  fontSize: '12px',
  transition: 'all 0.2s ease',
});

globalStyle('aside .toggle-button:hover', {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
});

// 화살표 회전 애니메이션
globalStyle('aside .toggle-arrow', {
  transition: 'transform 0.2s ease',
  display: 'inline-block',
});

// Part 1과 Part 2 구분 스타일
globalStyle('.markdown .part1-section', {
  position: 'relative',
  marginTop: '2rem',
  padding: '1.5rem',
  backgroundColor: 'hsl(var(--card))',
  border: '2px solid hsl(var(--primary))',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  transition: 'all 0.3s ease',
});

globalStyle('.markdown .part1-section::before', {
  content: '"🎯"',
  position: 'absolute',
  top: '-12px',
  left: '20px',
  backgroundColor: 'hsl(var(--background))',
  padding: '0 8px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

globalStyle('.markdown .part2-section', {
  position: 'relative',
  marginTop: '2rem',
  padding: '1.5rem',
  backgroundColor: 'hsl(var(--card))',
  border: '2px solid hsl(var(--secondary))',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  transition: 'all 0.3s ease',
});

globalStyle('.markdown .part2-section::before', {
  content: '"🚀"',
  position: 'absolute',
  top: '-12px',
  left: '20px',
  backgroundColor: 'hsl(var(--background))',
  padding: '0 8px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

// Part 1과 Part 2 호버 효과
globalStyle('.markdown .part1-section:hover', {
  transform: 'translateY(-2px)',
  boxShadow:
    '0 8px 25px -5px rgb(0 0 0 / 0.1), 0 4px 10px -2px rgb(0 0 0 / 0.1)',
});

globalStyle('.markdown .part2-section:hover', {
  transform: 'translateY(-2px)',
  boxShadow:
    '0 8px 25px -5px rgb(0 0 0 / 0.1), 0 4px 10px -2px rgb(0 0 0 / 0.1)',
});

// Part 1과 Part 2 제목 스타일
globalStyle('.markdown .part1-section h4', {
  color: 'hsl(var(--primary))',
  fontSize: '1.3rem',
  fontWeight: '700',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

globalStyle('.markdown .part2-section h4', {
  color: 'hsl(var(--secondary))',
  fontSize: '1.3rem',
  fontWeight: '700',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

// 반응형 디자인
globalStyle('.markdown .part1-section, .markdown .part2-section', {
  '@media': {
    '(max-width: 768px)': {
      padding: '1rem',
      marginTop: '1.5rem',
    },
  },
});

// 뱃지 스타일
globalStyle('aside .badge', {
  display: 'inline-block',
  padding: '2px 6px',
  fontSize: '10px',
  fontWeight: 'bold',
  borderRadius: '10px',
  marginLeft: '8px',
  verticalAlign: 'middle',
});

globalStyle('aside .badge.new', {
  backgroundColor: '#10b981',
  color: '#fff',
});

globalStyle('aside .badge.hot', {
  backgroundColor: '#ef4444',
  color: '#fff',
});

// 현재 경로 표시 푸터
globalStyle('aside .footer', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '15px',
  borderTop: '1px solid var(--bg-list)',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  fontSize: '11px',
  color: '#ccc',
});

globalStyle('aside .footer .current-path', {
  marginTop: '5px',
  fontFamily: 'monospace',
  color: 'var(--bg-list-active)',
  wordBreak: 'break-all',
});

// 스크롤바 스타일
globalStyle('aside nav::-webkit-scrollbar', {
  width: '6px',
});

globalStyle('aside nav::-webkit-scrollbar-track', {
  background: 'transparent',
});

globalStyle('aside nav::-webkit-scrollbar-thumb', {
  background: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '3px',
});

globalStyle('aside nav::-webkit-scrollbar-thumb:hover', {
  background: 'rgba(255, 255, 255, 0.5)',
});

// VanillaWrapper 스타일 개선
globalStyle('.vanilla-wrapper', {
  position: 'relative',
  transition: 'all 0.2s ease-in-out',
  marginBottom: '20px',
});

// hover 애니메이션 제거

globalStyle('.vanilla-content', {
  width: '100%',
  minHeight: 'inherit',
});

// 로딩 애니메이션 - keyframes 사용
globalStyle('.loading-spinner', {
  display: 'inline-block',
  width: '20px',
  height: '20px',
  border: '2px solid rgba(59, 130, 246, 0.3)',
  borderTop: '2px solid #3b82f6',
  borderRadius: '50%',
  animation: `${loadingSpin} 1s linear infinite`,
});

// 에러 상태 스타일
globalStyle('.error-message', {
  padding: '20px',
  textAlign: 'center',
  color: '#ef4444',
  backgroundColor: '#fef2f2',
  border: '1px solid #fecaca',
  borderRadius: '8px',
});

globalStyle('.error-message .error-title', {
  fontWeight: 'bold',
  marginBottom: '8px',
});

globalStyle('.error-message .error-detail', {
  fontSize: '12px',
  color: '#6b7280',
  marginTop: '8px',
});

// 코드 블록 스타일 개선
globalStyle(".vanilla-wrapper[data-variant='code']", {
  backgroundColor: '#f8fafc',
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
});

globalStyle(".vanilla-wrapper[data-variant='demo']", {
  backgroundColor: '#eff6ff',
  borderColor: '#3b82f6',
  borderStyle: 'dashed',
});

// 제목 스타일 개선
globalStyle('.vanilla-wrapper h3', {
  marginBottom: '16px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

globalStyle('.vanilla-wrapper h3 sub', {
  fontSize: '12px',
  color: '#6b7280',
  fontWeight: 'normal',
  marginLeft: '8px',
});

// 인터랙션 피드백
globalStyle('aside li.parent', {
  cursor: 'pointer',
  userSelect: 'none',
});

globalStyle('aside li.parent:active', {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
});

// 깊이별 들여쓰기 스타일
globalStyle('aside .level-1', {
  paddingLeft: '36px',
});

globalStyle('aside .level-2', {
  paddingLeft: '52px',
});

globalStyle('aside .level-3', {
  paddingLeft: '68px',
});

globalStyle('aside .level-4', {
  paddingLeft: '84px',
});

globalStyle('aside .level-5', {
  paddingLeft: '100px',
});

// 트랜지션 그룹
globalStyle('aside li, aside a, aside button', {
  transition: 'all 0.2s ease',
});

// 접근성 개선
globalStyle("aside [aria-expanded='true'] .toggle-arrow", {
  transform: 'rotate(90deg)',
});

globalStyle("aside [aria-expanded='false'] .toggle-arrow", {
  transform: 'rotate(0deg)',
});

// 반응형 스타일 - 올바른 미디어 쿼리 문법
globalStyle('aside', {
  '@media': {
    '(max-width: 768px)': {
      transform: 'translateX(-100%)',
    },
  },
});

globalStyle('body', {
  '@media': {
    '(max-width: 768px)': {
      paddingLeft: '0',
    },
  },
});

globalStyle('aside.mobile-open', {
  '@media': {
    '(max-width: 768px)': {
      transform: 'translateX(0)',
    },
  },
});
