// src/components/01_accordion/5_radio.tsx
'use client';
import { accordionData } from './data';
import * as styles from './accordion.css';

const Accordion5 = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #5. React + vanilla-extract{' '}
        <sub>HTML radio input (JavaScript 없음)</sub>
      </h3>
      <ul className={`${styles.container} ${styles.themeClass}`}>
        {accordionData.map((item, index) => (
          <li key={item.id} className={styles.itemVariants.animated}>
            <input
              type="radio"
              name="accordion5"
              id={`radio5-${item.id}`}
              defaultChecked={index === 0}
              className={styles.radioInput}
            />
            <label htmlFor={`radio5-${item.id}`} className={styles.radioLabel}>
              {item.title}
            </label>
            <div className={styles.radioContent}>{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion5;
