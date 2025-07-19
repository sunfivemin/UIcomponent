"use client";
import { useState } from "react";
import { accordionData } from "./data";
import * as styles from "./accordion.css";

const AnimatedAccordion = () => {
  const [currentId, setCurrentId] = useState<string | null>(
    accordionData[0].id
  );

  const toggleItem = (id: string) => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #3. React + CVA <sub>CSS 애니메이션 (부드러운 전환)</sub>
      </h3>
      <ul className={`${styles.container} ${styles.themeClass}`}>
        {accordionData.map((item) => (
          <li key={item.id} className={styles.itemVariants.animated}>
            <div
              className={`${styles.tabBase} ${
                styles.tabVariants[currentId === item.id ? "active" : "default"]
              }`}
              onClick={() => toggleItem(item.id)}
            >
              {item.title}
            </div>
            <div
              className={`${styles.contentBase} ${
                styles.contentVariants[
                  currentId === item.id ? "animatedOpen" : "animated"
                ]
              }`}
            >
              {item.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedAccordion;
