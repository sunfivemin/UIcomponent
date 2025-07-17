'use client';
import { useState, useEffect, useRef } from 'react';
import { Tab, Item } from './components';
import { contentVariants } from './variants';
import { accordionData } from './data';
import * as styles from './accordion.css';

const Accordion7 = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #7. React + CVA <sub>다중 선택 + Ctrl+F 검색 가능</sub>
      </h3>
      <ul className={`${styles.container} ${styles.themeClass}`}>
        {accordionData.map(item => {
          const MultiItemComponent = () => {
            const [isOpen, setIsOpen] = useState(false);
            const descRef = useRef<HTMLDivElement>(null);

            const toggle = () => setIsOpen(prev => !prev);

            useEffect(() => {
              const handleBeforeMatch = () => {
                if (!isOpen) {
                  setIsOpen(true);
                }
              };

              if (descRef.current) {
                descRef.current.addEventListener(
                  'beforematch',
                  handleBeforeMatch
                );
              }

              return () => {
                if (descRef.current) {
                  descRef.current.removeEventListener(
                    'beforematch',
                    handleBeforeMatch
                  );
                }
              };
            }, [isOpen]);

            return (
              <Item key={item.id} type="animated">
                <Tab isActive={isOpen} onClick={toggle}>
                  {item.title}
                </Tab>
                <div
                  ref={descRef}
                  hidden={isOpen ? undefined : ('until-found' as any)}
                  className={contentVariants({
                    display: isOpen ? 'animatedOpen' : 'animated',
                  })}
                >
                  {item.description}
                </div>
              </Item>
            );
          };

          return <MultiItemComponent key={item.id} />;
        })}
      </ul>
      <div className={styles.summary}>
        <p>
          <strong>💡 특징:</strong> 여러 항목을 동시에 열 수 있고, Ctrl+F 검색도
          지원합니다!
        </p>
      </div>
    </div>
  );
};

export default Accordion7;
