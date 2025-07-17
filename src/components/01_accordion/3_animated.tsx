'use client';
import { useState } from 'react';
import { Tab, Content, Item } from './components';
import { accordionData } from './data';
import * as styles from './accordion.css';

const Accordion3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(
    accordionData[0].id
  );

  const toggleItem = (id: string) => {
    setCurrentId(prev => (prev === id ? null : id));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #3. React + CVA <sub>CSS transition 애니메이션</sub>
      </h3>
      <ul className={`${styles.container} ${styles.themeClass}`}>
        {accordionData.map(item => (
          <Item key={item.id} type="animated">
            <Tab
              isActive={currentId === item.id}
              onClick={() => toggleItem(item.id)}
            >
              {item.title}
            </Tab>
            <Content
              display={currentId === item.id ? 'animatedOpen' : 'animated'}
            >
              {item.description}
            </Content>
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default Accordion3;
