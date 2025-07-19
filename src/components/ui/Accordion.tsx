import React, { memo, useState, useCallback } from "react";
import { throttle } from "@/lib/performance";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  multiple?: boolean;
  className?: string;
  onToggle?: (openItems: string[]) => void;
}

const AccordionItem = memo<{
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}>(({ item, isOpen, onToggle }) => (
  <div className="accordion-item">
    <button
      className={`accordion-trigger ${isOpen ? "open" : ""}`}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`accordion-${item.id}`}
    >
      <span className="accordion-title">{item.title}</span>
      <span className="accordion-icon">{isOpen ? "▼" : "▶"}</span>
    </button>
    <div
      id={`accordion-${item.id}`}
      className={`accordion-content ${isOpen ? "open" : ""}`}
      aria-hidden={!isOpen}
    >
      <div className="accordion-body">{item.content}</div>
    </div>
  </div>
));

AccordionItem.displayName = "AccordionItem";

const Accordion = memo<AccordionProps>(
  ({ items, defaultOpenId, multiple = false, className = "", onToggle }) => {
    const [openItems, setOpenItems] = useState<string[]>(
      defaultOpenId ? [defaultOpenId] : []
    );

    // 🚀 쓰로틀링된 onChange 콜백
    const throttledOnToggle = useCallback(
      throttle((items: string[]) => {
        onToggle?.(items);
      }, 16),
      [onToggle]
    );

    const handleToggle = useCallback(
      (id: string) => {
        setOpenItems((prev) => {
          const newOpenItems = multiple
            ? prev.includes(id)
              ? prev.filter((item) => item !== id)
              : [...prev, id]
            : prev.includes(id)
            ? []
            : [id];

          throttledOnToggle(newOpenItems);
          return newOpenItems;
        });
      },
      [multiple, throttledOnToggle]
    );

    const isItemOpen = useCallback(
      (id: string) => {
        return openItems.includes(id);
      },
      [openItems]
    );

    return (
      <div className={`accordion ${className}`}>
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={isItemOpen(item.id)}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
