'use client';
import { useEffect, useRef } from 'react';
import { accordionData } from './data';
import * as styles from './accordion.css';
import { AccordionItemData } from './types';

const DetailsItem = ({
  item,
  index,
}: {
  item: AccordionItemData;
  index: number;
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handleBeforeMatch = () => {
      if (detailsRef.current && !detailsRef.current.open) {
        detailsRef.current.open = true;
      }
    };

    const detailsElement = detailsRef.current;
    if (detailsElement) {
      detailsElement.addEventListener('beforematch', handleBeforeMatch);
    }

    return () => {
      if (detailsElement) {
        detailsElement.removeEventListener('beforematch', handleBeforeMatch);
      }
    };
  }, []);

  return (
    <details
      ref={detailsRef}
      name="accordion8"
      open={index === 0}
      className={styles.detailsItem}
    >
      <summary className={styles.detailsSummary}>{item.title}</summary>
      <div className={styles.detailsContent}>{item.description}</div>
    </details>
  );
};

const DetailsAccordion = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #8. React + vanilla-extract <sub>HTML details 태그 + 검색 가능</sub>
      </h3>
      <div className={`${styles.detailsContainer} ${styles.themeClass}`}>
        {accordionData.map((item, index) => (
          <DetailsItem key={item.id} item={item} index={index} />
        ))}
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
