// src/components/01_accordion/components.tsx
import { memo } from "react";
import * as styles from "./accordion.css";

// 🚀 성능 최적화된 Tab 컴포넌트
export const Tab = memo(
  ({
    children,
    isActive = false,
    onClick,
    className = "",
  }: {
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
  }) => {
    const tabClassName = `${styles.tabBase} ${
      styles.tabVariants[isActive ? "active" : "default"]
    } ${className}`.trim();

    return (
      <li className={tabClassName} onClick={onClick}>
        {children}
      </li>
    );
  }
);

// 🚀 성능 최적화된 Content 컴포넌트
export const Content = memo(
  ({
    children,
    display = "conditional",
    isVisible = false,
    className = "",
  }: {
    children: React.ReactNode;
    display?:
      | "conditional"
      | "hidden"
      | "visible"
      | "animated"
      | "animatedOpen";
    isVisible?: boolean;
    className?: string;
  }) => {
    // 🚀 조건부 렌더링 최적화
    if (display === "conditional" && !isVisible) {
      return null;
    }

    const contentClassName =
      `${styles.contentBase} ${styles.contentVariants[display]} ${className}`.trim();

    return <div className={contentClassName}>{children}</div>;
  }
);

// 🚀 성능 최적화된 Item 컴포넌트
export const Item = memo(
  ({
    children,
    type = "default",
    className = "",
    style,
  }: {
    children: React.ReactNode;
    type?: "default" | "animated";
    className?: string;
    style?: React.CSSProperties;
  }) => {
    const itemClassName = `${styles.itemVariants[type]} ${className}`.trim();

    return (
      <li className={itemClassName} style={style}>
        {children}
      </li>
    );
  }
);

// 🚀 성능 최적화된 ToggleIcon 컴포넌트
export const ToggleIcon = memo(
  ({
    isActive = false,
    className = "",
  }: {
    isActive?: boolean;
    className?: string;
  }) => {
    const iconClassName = `${styles.toggleIcon} ${
      styles.toggleIconVariants[isActive ? "active" : "inactive"]
    } ${className}`.trim();

    return <span className={iconClassName}>{isActive ? "−" : "+"}</span>;
  }
);

// 🚀 디스플레이 네임 설정 (디버깅용)
Tab.displayName = "Tab";
Content.displayName = "Content";
Item.displayName = "Item";
ToggleIcon.displayName = "ToggleIcon";
