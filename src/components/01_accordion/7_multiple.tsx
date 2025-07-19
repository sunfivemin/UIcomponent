"use client";
import { useState } from "react";
import { accordionData } from "./data";
import { contentVariants } from "./variants";
import * as styles from "./accordion.css";

const MultipleAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>([accordionData[0].id]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #7. React + CVA <sub>다중 선택 + 검색 가능</sub>
      </h3>
      <ul className={`${styles.container} ${styles.themeClass}`}>
        {accordionData.map((item) => {
          const isOpen = openItems.includes(item.id);

          return (
            <li key={item.id} className={styles.itemVariants.animated}>
              <div
                className={`${styles.tabBase} ${
                  styles.tabVariants[isOpen ? "active" : "default"]
                }`}
                onClick={() => toggleItem(item.id)}
              >
                {item.title}
              </div>
              <div
                hidden={isOpen ? undefined : ("until-found" as any)}
                className={contentVariants({
                  display: isOpen ? "animatedOpen" : "animated",
                })}
              >
                {item.description}
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles.summary}>
        <p>
          <strong>💡 특징:</strong> 여러 항목을 동시에 열 수 있고, Ctrl+F로
          검색도 가능합니다.
        </p>
      </div>
    </div>
  );
};

export default MultipleAccordion;
