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
