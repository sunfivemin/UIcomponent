// src/components/01_accordion/types.ts
import { type VariantProps } from "class-variance-authority";
import { tabVariants, contentVariants, itemVariants } from "./variants";

// 📦 기본 데이터 타입
export interface AccordionItemData {
  id: string;
  title: string;
  description: string;
}

// 🧩 컴포넌트 Props 타입들
export interface TabProps extends VariantProps<typeof tabVariants> {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  className?: string;
}

export interface ContentProps extends VariantProps<typeof contentVariants> {
  children: React.ReactNode;
  isVisible?: boolean;
  className?: string;
}

export interface ItemProps extends VariantProps<typeof itemVariants> {
  children: React.ReactNode;
  className?: string;
}

// 🎯 메인 아코디언 컴포넌트 Props
export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string | null;
  multiple?: boolean;
  searchable?: boolean;
  animated?: boolean;
  className?: string;
  onChange?: (openIds: string[]) => void;
}
