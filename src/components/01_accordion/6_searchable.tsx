'use client';
import { useState, useEffect, useRef } from 'react';
import { Tab, Item } from './components';
import { contentVariants } from './variants';
import { accordionData } from './data';
import * as styles from './accordion.css';

const Accordion6 = () => {
  const [currentId, setCurrentId] = useState<string | null>(
    accordionData[0].id
  );

  const toggleItem = (id: string) => {
    setCurrentId(prev => (prev === id ? null : id));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #6. React + CVA <sub>Ctrl+F 검색 가능 (hidden="until-found")</sub>
      </h3>
      <ul className={`${styles.container} ${styles.themeClass}`}>
        {accordionData.map(item => {
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
            }, []);

            return (
              <Item key={item.id} type="animated">
                <Tab
                  isActive={currentId === item.id}
                  onClick={() => toggleItem(item.id)}
                >
                  {item.title}
                </Tab>
                <div
                  ref={descRef}
                  hidden={
                    currentId === item.id ? undefined : ('until-found' as any)
                  }
                  className={contentVariants({
                    display:
                      currentId === item.id ? 'animatedOpen' : 'animated',
                  })}
                >
                  {item.description}
                </div>
              </Item>
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

export default Accordion6;
