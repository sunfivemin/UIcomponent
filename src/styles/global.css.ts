import { globalStyle } from "@vanilla-extract/css";
import "./tokens.css";

// Global styles
globalStyle("html, body", {
  height: "100%",
  margin: 0,
});

globalStyle("body", {
  overflowY: "scroll",
  paddingLeft: "200px",
});

globalStyle("body.no-scroll", {
  overflow: "hidden",
});

// Aside (Navigation) styles
globalStyle("aside", {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  margin: 0,
  padding: 0,
  width: "199px",
  borderRight: "1px solid #222",
  backgroundColor: "#222",
  color: "#fff",
});

// CSS Variables for aside
globalStyle("aside", {
  "--bg-default": "#222",
  "--bg-list": "#444",
  "--bg-list-disabled": "#303030",
  "--bg-list-active": "#58a",
  "--bg-list-open": "#457",
} as any);

globalStyle("aside a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("aside button", {
  display: "block",
  width: "100%",
  border: 0,
  backgroundColor: "inherit",
  color: "inherit",
  fontSize: "inherit",
  margin: 0,
  textAlign: "left",
  padding: "10px 20px",
  cursor: "pointer",
});

globalStyle("aside h1", {
  margin: 0,
  padding: "20px",
  overflow: "hidden",
});

globalStyle("aside h1 sub", {
  float: "right",
  opacity: 0.7,
});

globalStyle("aside ul", {
  listStyle: "none",
  margin: 0,
  padding: 0,
  backgroundColor: "var(--bg-list)",
});

globalStyle("aside li", {
  borderTop: "1px solid var(--bg-default)",
  transition: "background-color ease 0.3s",
});

globalStyle("aside li.active", {
  backgroundColor: "var(--bg-list-active)",
  fontWeight: 700,
});

globalStyle("aside li.open", {
  backgroundColor: "var(--bg-list-open)",
  fontWeight: 700,
});

globalStyle("aside li a", {
  display: "block",
  padding: "10px 20px 10px 25px",
});

globalStyle("aside li.disabled", {
  display: "block",
  padding: "10px 20px 10px 25px",
  color: "#666",
  backgroundColor: "var(--bg-list-disabled)",
  cursor: "not-allowed",
});

globalStyle("aside .subRoutes", {
  height: 0,
  overflow: "hidden",
  opacity: 0,
  backgroundColor: "var(--bg-list-open)",
  transitionProperty: "height, opacity",
  transitionTimingFunction: "ease",
  transitionDuration: "0.3s",
});

globalStyle("aside .subRoutes a", {
  paddingLeft: "33px",
});

globalStyle("aside .subRoutes a::before", {
  content: '""',
  display: "inline-block",
  border: "2px solid #fff",
  borderRadius: "2px",
  marginRight: "8px",
  verticalAlign: "middle",
});

globalStyle("aside li.parent > a::before", {
  content: '""',
  display: "inline-block",
  verticalAlign: "2px",
  border: "4px solid transparent",
  borderLeftColor: "#fff",
  marginRight: "4px",
  marginLeft: "-12px",
});

globalStyle("aside li.open .subRoutes", {
  opacity: 1,
});

// Dynamic height for subRoutes based on item count
for (let i = 1; i < 10; i++) {
  globalStyle(`aside li.open.items-${i} .subRoutes`, {
    height: `calc(${i} * 40px)`,
  });
}

globalStyle("aside li.open.parent > a::before", {
  borderTopColor: "#fff",
  borderLeftColor: "transparent",
  verticalAlign: "0px",
  marginRight: "6px",
  marginLeft: "-14px",
});

// Main content styles
globalStyle("main", {
  boxSizing: "border-box",
  minHeight: "100%",
  padding: "20px",
});

globalStyle("main h3 > sub:before", {
  content: '"|"',
  margin: "0 5px 0 10px",
  color: "#999",
});

// Markdown styles
globalStyle(".markdown", {
  maxWidth: "800px",
  margin: "0 auto",
  lineHeight: 1.67,
});

globalStyle(".markdown ul, .markdown ol", {
  margin: "0.5rem 0",
  paddingLeft: "20px",
});

globalStyle(".markdown li", {
  margin: "0.2rem 0",
});

globalStyle(".markdown code", {
  backgroundColor: "#eee",
  padding: "3px",
  borderRadius: "3px",
  whiteSpace: "pre",
});

globalStyle(".markdown pre", {
  padding: "1rem",
  margin: 0,
  backgroundColor: "#eee",
  borderRadius: "5px",
});

globalStyle(".markdown pre code", {
  background: "none",
  padding: 0,
  borderRadius: 0,
});
// styles/global.css.ts - 기존 코드 아래에 추가 (최종 수정된 버전)

import { keyframes } from "@vanilla-extract/css";

// keyframes는 별도 import로 정의
const spinAnimation = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

// 개선된 사이드바 스타일
globalStyle("aside", {
  // 기존 스타일 유지하면서 추가
  transition: "transform 0.3s ease-in-out",
  zIndex: 50,
});

// 부드러운 애니메이션을 위한 스타일
globalStyle("aside .subRoutes", {
  height: 0,
  overflow: "hidden",
  opacity: 0,
  backgroundColor: "var(--bg-list-open)",
  transitionProperty: "height, opacity, transform",
  transitionTimingFunction: "ease-out",
  transitionDuration: "0.2s",
  transform: "translateY(-10px)",
});

globalStyle("aside li.open .subRoutes", {
  opacity: 1,
  transform: "translateY(0)",
});

// 활성 상태 개선
globalStyle("aside li.has-active", {
  backgroundColor: "rgba(85, 136, 170, 0.1)",
  borderLeft: "3px solid var(--bg-list-active)",
});

// 호버 효과 개선
globalStyle("aside li:hover:not(.disabled)", {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
});

globalStyle("aside li a:hover", {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
});

// 포커스 스타일
globalStyle("aside button:focus", {
  outline: "none",
  boxShadow: "0 0 0 2px rgba(85, 136, 170, 0.5)",
});

// 토글 버튼 스타일
globalStyle("aside .toggle-button", {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  padding: "2px",
  borderRadius: "2px",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  color: "#fff",
  fontSize: "12px",
  transition: "all 0.2s ease",
});

globalStyle("aside .toggle-button:hover", {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
});

// 화살표 회전 애니메이션
globalStyle("aside .toggle-arrow", {
  transition: "transform 0.2s ease",
  display: "inline-block",
});

globalStyle("aside li.open .toggle-arrow", {
  transform: "rotate(90deg)",
});

// 뱃지 스타일
globalStyle("aside .badge", {
  display: "inline-block",
  padding: "2px 6px",
  fontSize: "10px",
  fontWeight: "bold",
  borderRadius: "10px",
  marginLeft: "8px",
  verticalAlign: "middle",
});

globalStyle("aside .badge.new", {
  backgroundColor: "#10b981",
  color: "#fff",
});

globalStyle("aside .badge.hot", {
  backgroundColor: "#ef4444",
  color: "#fff",
});

// 현재 경로 표시 푸터
globalStyle("aside .footer", {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "15px",
  borderTop: "1px solid var(--bg-list)",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  fontSize: "11px",
  color: "#ccc",
});

globalStyle("aside .footer .current-path", {
  marginTop: "5px",
  fontFamily: "monospace",
  color: "var(--bg-list-active)",
  wordBreak: "break-all",
});

// 스크롤바 스타일
globalStyle("aside nav::-webkit-scrollbar", {
  width: "6px",
});

globalStyle("aside nav::-webkit-scrollbar-track", {
  background: "transparent",
});

globalStyle("aside nav::-webkit-scrollbar-thumb", {
  background: "rgba(255, 255, 255, 0.3)",
  borderRadius: "3px",
});

globalStyle("aside nav::-webkit-scrollbar-thumb:hover", {
  background: "rgba(255, 255, 255, 0.5)",
});

// VanillaWrapper 스타일 개선
globalStyle(".vanilla-wrapper", {
  position: "relative",
  transition: "all 0.2s ease-in-out",
  marginBottom: "20px",
});

globalStyle(".vanilla-wrapper:hover", {
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transform: "translateY(-2px)",
});

globalStyle(".vanilla-content", {
  width: "100%",
  minHeight: "inherit",
});

// 로딩 애니메이션 - keyframes 변수 사용
globalStyle(".loading-spinner", {
  display: "inline-block",
  width: "20px",
  height: "20px",
  border: "2px solid rgba(59, 130, 246, 0.3)",
  borderTop: "2px solid #3b82f6",
  borderRadius: "50%",
  animation: `${spinAnimation} 1s linear infinite`,
});

// 에러 상태 스타일
globalStyle(".error-message", {
  padding: "20px",
  textAlign: "center",
  color: "#ef4444",
  backgroundColor: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: "8px",
});

globalStyle(".error-message .error-title", {
  fontWeight: "bold",
  marginBottom: "8px",
});

globalStyle(".error-message .error-detail", {
  fontSize: "12px",
  color: "#6b7280",
  marginTop: "8px",
});

// 코드 블록 스타일 개선
globalStyle(".vanilla-wrapper[data-variant='code']", {
  backgroundColor: "#f8fafc",
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
});

globalStyle(".vanilla-wrapper[data-variant='demo']", {
  backgroundColor: "#eff6ff",
  borderColor: "#3b82f6",
  borderStyle: "dashed",
});

// 제목 스타일 개선
globalStyle(".vanilla-wrapper h3", {
  marginBottom: "16px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

globalStyle(".vanilla-wrapper h3 sub", {
  fontSize: "12px",
  color: "#6b7280",
  fontWeight: "normal",
  marginLeft: "8px",
});

// 인터랙션 피드백
globalStyle("aside li.parent", {
  cursor: "pointer",
  userSelect: "none",
});

globalStyle("aside li.parent:active", {
  backgroundColor: "rgba(255, 255, 255, 0.05)",
});

// 깊이별 들여쓰기 스타일
globalStyle("aside .level-1", {
  paddingLeft: "36px",
});

globalStyle("aside .level-2", {
  paddingLeft: "52px",
});

globalStyle("aside .level-3", {
  paddingLeft: "68px",
});

globalStyle("aside .level-4", {
  paddingLeft: "84px",
});

globalStyle("aside .level-5", {
  paddingLeft: "100px",
});

// 트랜지션 그룹
globalStyle("aside li, aside a, aside button", {
  transition: "all 0.2s ease",
});

// 접근성 개선
globalStyle("aside [aria-expanded='true'] .toggle-arrow", {
  transform: "rotate(90deg)",
});

globalStyle("aside [aria-expanded='false'] .toggle-arrow", {
  transform: "rotate(0deg)",
});

// 반응형 스타일 - 올바른 미디어 쿼리 문법
globalStyle("aside", {
  "@media": {
    "(max-width: 768px)": {
      transform: "translateX(-100%)",
    },
  },
});

globalStyle("body", {
  "@media": {
    "(max-width: 768px)": {
      paddingLeft: "0",
    },
  },
});

globalStyle("aside.mobile-open", {
  "@media": {
    "(max-width: 768px)": {
      transform: "translateX(0)",
    },
  },
});
