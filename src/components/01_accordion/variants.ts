import { cva } from "class-variance-authority";
import * as styles from "./accordion.css";

// 🎯 CVA Variants 정의
export const tabVariants = cva(styles.tabBase, {
  variants: {
    state: {
      default: styles.tabVariants.default,
      active: styles.tabVariants.active,
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export const contentVariants = cva(styles.contentBase, {
  variants: {
    display: {
      conditional: styles.contentVariants.conditional,
      hidden: styles.contentVariants.hidden,
      visible: styles.contentVariants.visible,
      animated: styles.contentVariants.animated,
      animatedOpen: [
        styles.contentVariants.animated,
        styles.contentVariants.animatedOpen,
      ],
    },
  },
  defaultVariants: {
    display: "conditional",
  },
});

export const itemVariants = cva("", {
  variants: {
    type: {
      default: styles.itemVariants.default,
      animated: styles.itemVariants.animated,
    },
  },
  defaultVariants: {
    type: "default",
  },
});

// 🎯 토글 아이콘 variants
export const toggleIconVariants = cva(styles.toggleIcon, {
  variants: {
    state: {
      inactive: styles.toggleIconVariants.inactive,
      active: styles.toggleIconVariants.active,
    },
  },
  defaultVariants: {
    state: "inactive",
  },
});
