'use client';

import { useRef, useEffect } from 'react';
import { accordionData } from './data';
import * as styles from './accordion.css';

const VanillaAccordion = () => {
  const accordionRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const accordion = accordionRef.current;
    if (!accordion) return;

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      if (!button) return;

      const item = button.closest('li');
      if (!item) return;

      const content = item.querySelector(
        'div[class*="content"]'
      ) as HTMLElement;
      if (!content) return;

      const isOpen = button.getAttribute('aria-expanded') === 'true';

      // 🎯 순수 JavaScript 제어의 핵심
      // 모든 아이템 닫기
      accordion.querySelectorAll('button').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.className = styles.tabBase;
      });
      accordion.querySelectorAll('div[class*="content"]').forEach(div => {
        div.className = styles.contentVariants.hidden;
      });

      // 클릭된 아이템 토글
      if (!isOpen) {
        button.setAttribute('aria-expanded', 'true');
        button.className = `${styles.tabBase} ${styles.tabVariants.active}`;
        content.className = styles.contentVariants.conditional;
      }
    };

    accordion.addEventListener('click', handleClick);
    return () => accordion.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        순수 JavaScript 방식 <sub>React 없이 DOM 직접 조작</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>addEventListener + DOM 조작</code> -
          React 상태 없이 순수 JavaScript로 제어
        </p>
        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            color: 'hsl(var(--muted-foreground))',
          }}
        >
          <p>
            <strong>✅ 장점:</strong> 번들 크기 감소, React 의존성 제거,
            직접적인 DOM 제어
          </p>
          <p>
            <strong>❌ 단점:</strong> 코드 복잡성, 메모리 누수 위험, 디버깅
            어려움
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 경량화가 중요한 경우, React
            외부에서 사용
          </p>
        </div>
      </div>

      <ul ref={accordionRef} className={styles.container}>
        {accordionData.map((item, index) => (
          <li key={item.id} className={styles.itemVariants.default}>
            <button
              className={`${styles.tabBase} ${
                index === 0 ? styles.tabVariants.active : ''
              }`}
              aria-expanded={index === 0}
            >
              <span>{item.title}</span>
              <span className={styles.toggleIcon}>
                {index === 0 ? '−' : '+'}
              </span>
            </button>
            <div
              className={
                index === 0
                  ? styles.contentVariants.conditional
                  : styles.contentVariants.hidden
              }
            >
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VanillaAccordion;
