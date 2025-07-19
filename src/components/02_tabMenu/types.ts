import { ReactNode } from "react";

export interface TabData {
  id: string;
  title: string;
  description: string;
}

export interface TabMenuProps {
  data: TabData[];
  defaultActiveId?: string;
  variant?: "default" | "dark" | "colorful";
  className?: string;
  onTabChange?: (activeId: string) => void;
}

export interface TabItemProps {
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export interface TabContentProps {
  id: string;
  content: string;
  isActive: boolean;
  children?: ReactNode;
}

export interface TabMenuState {
  activeId: string;
  setActiveId: (id: string) => void;
}
