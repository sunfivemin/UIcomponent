import { cva } from "class-variance-authority";
import * as styles from "./accordion.css";

// 🎯 CVA Variants 정의 (실제 사용됨)
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
