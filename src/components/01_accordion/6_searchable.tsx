"use client";
import { useState, useEffect, useRef } from "react";
import { accordionData } from "./data";
import { contentVariants } from "./variants";
import * as styles from "./accordion.css";

const SearchableAccordion = () => {
  const [currentId, setCurrentId] = useState<string | null>(
    accordionData[0].id
  );

  const toggleItem = (id: string) => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #6. React + CVA <sub>Ctrl+F 검색 가능 (hidden="until-found")</sub>
      </h3>
      <ul className={`${styles.container} ${styles.themeClass}`}>
        {accordionData.map((item) => {
          const ItemComponent = () => {
            const descRef = useRef<HTMLDivElement>(null);

            useEffect(() => {
              const handleBeforeMatch = () => {
                if (currentId !== item.id) {
                  setCurrentId(item.id);
                }
              };

              if (descRef.current) {
                descRef.current.addEventListener(
                  "beforematch",
                  handleBeforeMatch
                );
              }

              return () => {
                if (descRef.current) {
                  descRef.current.removeEventListener(
                    "beforematch",
                    handleBeforeMatch
                  );
                }
              };
            }, []);

            return (
              <li key={item.id} className={styles.itemVariants.animated}>
                <div
                  className={`${styles.tabBase} ${
                    styles.tabVariants[
                      currentId === item.id ? "active" : "default"
                    ]
                  }`}
                  onClick={() => toggleItem(item.id)}
                >
                  {item.title}
                </div>
                <div
                  ref={descRef}
                  hidden={
                    currentId === item.id ? undefined : ("until-found" as any)
                  }
                  className={contentVariants({
                    display:
                      currentId === item.id ? "animatedOpen" : "animated",
                  })}
                >
                  {item.description}
                </div>
              </li>
            );
          };

          return <ItemComponent key={item.id} />;
        })}
      </ul>
      <div className={styles.summary}>
        <p>
          <strong>💡 사용법:</strong> Ctrl+F (또는 Cmd+F)로 검색해보세요! 닫힌
          아코디언 내부 텍스트도 검색됩니다.
        </p>
      </div>
    </div>
  );
};

export default SearchableAccordion;
