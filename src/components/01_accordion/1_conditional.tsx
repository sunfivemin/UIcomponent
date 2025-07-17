// src/components/01_accordion/1_conditional.tsx
'use client';
import { useState } from 'react';
import { Tab, Content, Item } from './components';
import { accordionData } from './data';
import * as styles from './accordion.css';

const Accordion1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(
    accordionData[0].id
  );

  const toggleItem = (id: string) => {
    setCurrentId(prev => (prev === id ? null : id));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #1. React + CVA <sub>조건부 렌더링 (DOM 추가/제거)</sub>
      </h3>
      <ul className={`${styles.container} ${styles.themeClass}`}>
        {accordionData.map(item => (
          <Item key={item.id} type="default">
            <Tab
              isActive={currentId === item.id}
              onClick={() => toggleItem(item.id)}
            >
              {item.title}
            </Tab>
            <Content display="conditional" isVisible={currentId === item.id}>
              {item.description}
            </Content>
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default Accordion1;
