import { style } from "@vanilla-extract/css";

export const toggleButton = style({
  position: "fixed",
  top: "20px",
  right: "20px",
  zIndex: 1000,
  padding: "12px",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  fontSize: "20px",
  transition: "all 0.3s ease",
  backgroundColor: "hsl(var(--card))",
  color: "hsl(var(--card-foreground))",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    transform: "scale(1.1)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
  },

  ":active": {
    transform: "scale(0.95)",
  },
});
