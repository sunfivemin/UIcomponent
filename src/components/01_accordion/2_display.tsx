'use client';
import { useState } from 'react';
import { Tab, Content, Item } from './components';
import { accordionData } from './data';
import * as styles from './accordion.css';

const Accordion2 = () => {
  const [currentId, setCurrentId] = useState<string | null>(
    accordionData[0].id
  );

  const toggleItem = (id: string) => {
    setCurrentId(prev => (prev === id ? null : id));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #2. React + CVA <sub>CSS display 제어 (숨김/보임)</sub>
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
            <Content display={currentId === item.id ? 'visible' : 'hidden'}>
              {item.description}
            </Content>
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default Accordion2;
