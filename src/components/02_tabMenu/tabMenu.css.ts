import { style, styleVariants, createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

// 아코디언 스타일과 동일한 변수 사용
export const tabMenuContainer = style({
  border: "1px solid hsl(var(--border))",
  borderRadius: "12px",
  backgroundColor: "hsl(var(--card))",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  overflow: "hidden",
  transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
});

export const tabList = style({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  backgroundColor: "hsl(var(--card))",
  borderBottom: "1px solid hsl(var(--border))",
  position: "relative",
});

export const tabItem = style({
  flex: "1 1 0%",
  position: "relative",
  cursor: "pointer",
  userSelect: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
});

export const tabButton = style({
  width: "100%",
  padding: "16px 24px",
  border: "none",
  background: "hsl(var(--card))",
  color: "hsl(var(--foreground))",
  fontSize: "1rem",
  fontWeight: 500,
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  ":hover": {
    background: "hsl(var(--accent))",
  },
});

export const tabButtonActive = style({
  background: "hsl(var(--primary))",
  color: "hsl(var(--primary-foreground))",
  fontWeight: 600,
  zIndex: 1,
  ":hover": {
    background: "hsl(var(--primary))",
  },
});

export const tabButtonInactive = style({});

export const tabButtonVariants = styleVariants({
  active: [tabButton, tabButtonActive],
  inactive: [tabButton, tabButtonInactive],
});

export const content = style({
  padding: "24px",
  minHeight: "120px",
  backgroundColor: "hsl(var(--card))",
  color: "hsl(var(--foreground))",
  borderBottom: "1px solid hsl(var(--border))",
  position: "relative",
  transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
});

export const contentPanel = style({
  opacity: 0,
  transform: "translateY(10px)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  pointerEvents: "none",
});

export const contentPanelActive = style({
  opacity: 1,
  transform: "translateY(0)",
  position: "relative",
  pointerEvents: "auto",
});

// details 방식 패널도 동일하게 적용
export const detailsPanel = style({
  backgroundColor: "hsl(var(--card))",
  color: "hsl(var(--foreground))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  marginBottom: "16px",
  padding: "24px",
  transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
});

// 애니메이션 탭메뉴용 스타일
export const animatedTabList = style({
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "3px",
    backgroundColor: "hsl(var(--primary))",
    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    width: "25%",
  },
});

// 라디오 탭메뉴용 스타일
export const radioTabList = style({
  position: "relative",
});

export const radioInput = style({
  display: "none",
});

export const radioLabel = style({
  display: "block",
  width: "100%",
  padding: "16px 24px",
  border: "none",
  background: "hsl(var(--card))",
  color: "hsl(var(--foreground))",
  fontSize: "1rem",
  fontWeight: 500,
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  ":hover": {
    background: "hsl(var(--accent))",
  },
});

export const radioContent = style({
  display: "none",
  padding: "24px",
  minHeight: "120px",
  backgroundColor: "hsl(var(--card))",
  color: "hsl(var(--foreground))",
  transition: "background-color 0.3s, color 0.3s",
});

// 라디오 체크된 상태 - 라벨
export const radioLabelChecked = style({
  selectors: {
    [`${radioInput}:checked + &`]: {
      color: "hsl(var(--primary-foreground))",
      backgroundColor: "hsl(var(--primary))",
      fontWeight: 600,
    },
  },
});

// 라디오 체크된 상태 - 콘텐츠
export const radioContentChecked = style({
  selectors: {
    [`${radioInput}:checked ~ &`]: {
      display: "block",
    },
  },
});

// 컨테이너 레시피
export const tabMenu = recipe({
  base: tabMenuContainer,
});
