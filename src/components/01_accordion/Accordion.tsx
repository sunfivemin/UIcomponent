"use client";
import { useState, useCallback, memo } from "react";
import * as styles from "./accordion.css";

interface AccordionItem {
  id: string;
  title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string | null;
  multiple?: boolean;
  className?: string;
  onChange?: (openIds: string[]) => void;
}

const Accordion = memo<AccordionProps>(
  ({
    items,
    defaultOpenId = null,
    multiple = false,
    className = "",
    onChange,
  }) => {
    const [openItems, setOpenItems] = useState<string[]>(
      defaultOpenId ? [defaultOpenId] : []
    );

    const toggleItem = useCallback(
      (id: string) => {
        setOpenItems((prev) => {
          const newOpenItems = multiple
            ? prev.includes(id)
              ? prev.filter((item) => item !== id)
              : [...prev, id]
            : prev.includes(id)
            ? []
            : [id];

          onChange?.(newOpenItems);
          return newOpenItems;
        });
      },
      [multiple, onChange]
    );

    return (
      <div className={`${styles.themeClass} ${className}`}>
        <ul className={styles.container}>
          {items.map((item) => {
            const isOpen = openItems.includes(item.id);

            return (
              <li key={item.id} className={styles.itemVariants.default}>
                <div
                  className={`${styles.tabBase} ${
                    styles.tabVariants[isOpen ? "active" : "default"]
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.title}</span>
                  <span className={styles.toggleIcon}>
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`${styles.contentBase} ${
                    styles.contentVariants[isOpen ? "visible" : "hidden"]
                  }`}
                >
                  {item.description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
