// 기본 데이터 타입
export interface AccordionItemData {
  id: string;
  title: string;
  description: string;
}

// 메인 아코디언 컴포넌트 Props
export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string | null;
  multiple?: boolean;
  searchable?: boolean;
  animated?: boolean;
  className?: string;
  onChange?: (openIds: string[]) => void;
}
