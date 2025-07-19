import { globalStyle } from "@vanilla-extract/css";

// CSS Variables for design tokens - Light Theme
globalStyle(":root", {
  "--background": "0 0% 100%",
  "--foreground": "222.2 84% 4.9%",
  "--card": "0 0% 100%",
  "--card-foreground": "222.2 84% 4.9%",
  "--popover": "0 0% 100%",
  "--popover-foreground": "222.2 84% 4.9%",
  "--primary": "222.2 47.4% 11.2%",
  "--primary-foreground": "210 40% 98%",
  "--secondary": "210 40% 96%",
  "--secondary-foreground": "222.2 84% 4.9%",
  "--muted": "210 40% 96%",
  "--muted-foreground": "215.4 16.3% 46.9%",
  "--accent": "210 40% 96%",
  "--accent-foreground": "222.2 84% 4.9%",
  "--destructive": "0 84.2% 60.2%",
  "--destructive-foreground": "210 40% 98%",
  "--border": "214.3 31.8% 91.4%",
  "--input": "214.3 31.8% 91.4%",
  "--ring": "222.2 84% 4.9%",
  "--radius": "0.5rem",

  // 🌙 다크테마 추가 변수들
  "--sidebar-bg": "#222",
  "--sidebar-color": "#fff",
  "--sidebar-border": "#333",
  "--sidebar-hover": "rgba(255, 255, 255, 0.1)",
  "--sidebar-active": "#58a",
  "--sidebar-open": "#457",
  "--sidebar-disabled": "#666",
} as any);

// 🌙 Dark Theme Variables - 개선된 색상
globalStyle(":root[data-theme='dark']", {
  "--background": "240 10% 3.9%",
  "--foreground": "0 0% 98%",
  "--card": "240 10% 3.9%",
  "--card-foreground": "0 0% 98%",
  "--popover": "240 10% 3.9%",
  "--popover-foreground": "0 0% 98%",
  "--primary": "217.2 91.2% 59.8%",
  "--primary-foreground": "222.2 84% 4.9%",
  "--secondary": "240 3.7% 15.9%",
  "--secondary-foreground": "0 0% 98%",
  "--muted": "240 3.7% 15.9%",
  "--muted-foreground": "240 5% 64.9%",
  "--accent": "240 3.7% 15.9%",
  "--accent-foreground": "0 0% 98%",
  "--destructive": "0 62.8% 30.6%",
  "--destructive-foreground": "0 0% 98%",
  "--border": "240 3.7% 15.9%",
  "--input": "240 3.7% 15.9%",
  "--ring": "217.2 91.2% 59.8%",
  "--radius": "0.5rem",

  // 🌙 다크테마 사이드바 - 개선된 색상
  "--sidebar-bg": "#0a0a0a",
  "--sidebar-color": "#e5e5e5",
  "--sidebar-border": "#262626",
  "--sidebar-hover": "rgba(255, 255, 255, 0.1)",
  "--sidebar-active": "#3b82f6",
  "--sidebar-open": "#1e3a8a",
  "--sidebar-disabled": "#525252",
} as any);

globalStyle("*", {
  borderColor: "hsl(var(--border))",
});

globalStyle("body", {
  backgroundColor: "hsl(var(--background))",
  color: "hsl(var(--foreground))",
  transition: "background-color 0.3s ease, color 0.3s ease",
});

// 🌙 테마 전환 애니메이션
globalStyle("html", {
  transition: "color-scheme 0.3s ease",
});

globalStyle("html[data-theme='dark']", {
  colorScheme: "dark",
});
