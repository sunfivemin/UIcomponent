'use client';
import React from 'react';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabMenuRadio = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        라디오 버튼 방식 <sub>HTML + CSS만으로 상태 관리</sub>
      </h3>
      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>{'input[type="radio"] + CSS :checked'}</code> - JavaScript 없이
          HTML과 CSS만으로 상태 관리
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> JavaScript 없음, 접근성 우수, 성능 최적화
          </p>
          <p>
            <strong>❌ 단점:</strong> 복잡한 로직 구현 불가, 상태 관리 제한적
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 단순한 토글, JavaScript 비활성화
            환경, 접근성 중시
          </p>
        </div>
      </div>

      <div className={styles.tabMenu()}>
        {tabData.map(tab => (
          <input
            key={tab.id}
            type="radio"
            className={styles.radioInput}
            name="tabmenu-radio"
            id={tab.id}
            defaultChecked={tab.id === 'tab1'}
          />
        ))}

        <div className={styles.tabButtonContainer}>
          {tabData.map(tab => (
            <label key={tab.id} className={styles.radioLabel} htmlFor={tab.id}>
              {tab.title}
            </label>
          ))}
        </div>

        {tabData.map(tab => (
          <div
            key={tab.id}
            className={styles.radioContent}
            id={`panel-${tab.id}`}
          >
            {tab.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabMenuRadio;
