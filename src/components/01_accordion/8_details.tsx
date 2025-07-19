"use client";
import { useEffect, useRef, useState } from "react";
import { accordionData } from "./data";
import * as styles from "./accordion.css";

const DetailsAccordion = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #8. React + vanilla-extract <sub>HTML details 태그 + 검색 가능</sub>
      </h3>
      <div className={`${styles.detailsContainer} ${styles.themeClass}`}>
        {accordionData.map((item, index) => {
          const DetailsComponent = () => {
            const detailsRef = useRef<HTMLDetailsElement>(null);
            const [isOpen, setIsOpen] = useState(index === 0); // 첫 번째 항목만 기본 열림

            useEffect(() => {
              const handleBeforeMatch = () => {
                if (detailsRef.current && !detailsRef.current.open) {
                  detailsRef.current.open = true;
                  setIsOpen(true);
                }
              };

              if (detailsRef.current) {
                detailsRef.current.addEventListener(
                  "beforematch",
                  handleBeforeMatch
                );
              }

              return () => {
                if (detailsRef.current) {
                  detailsRef.current.removeEventListener(
                    "beforematch",
                    handleBeforeMatch
                  );
                }
              };
            }, []);

            const handleToggle = () => {
              setIsOpen((prev) => !prev);
            };

            return (
              <details
                ref={detailsRef}
                name="accordion8"
                open={isOpen} // ✅ defaultOpen 대신 open 사용
                onToggle={handleToggle}
                className={styles.detailsItem}
              >
                <summary className={styles.detailsSummary}>
                  {item.title}
                </summary>
                <div className={styles.detailsContent}>{item.description}</div>
              </details>
            );
          };

          return <DetailsComponent key={item.id} />;
        })}
      </div>
      <div className={styles.summary}>
        <p>
          <strong>💡 장점:</strong> 시맨틱 HTML로 접근성이 우수하고, 브라우저
          기본 기능을 활용합니다!
        </p>
      </div>
    </div>
  );
};

export default DetailsAccordion;
