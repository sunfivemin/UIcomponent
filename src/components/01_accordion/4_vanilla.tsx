'use client';

import { accordionData } from './data';
import VanillaWrapper from '@/components/common/vanillaWrapper';
import * as styles from './accordion.css';

const VanillaAccordion = () => {
  const initiator = (container: HTMLDivElement) => {
    let currentOpenId: string | null = '1'; // 첫 번째 아이템이 열려있음

    // 아코디언 컨테이너 생성
    const accordion = document.createElement('ul');
    accordion.className = styles.container;

    // 아코디언 아이템들 생성
    accordionData.forEach(item => {
      const li = document.createElement('li');
      li.className = styles.itemVariants.default;
      li.setAttribute('data-item-id', item.id);

      const button = document.createElement('button');
      button.className = styles.tabBase;
      button.setAttribute('aria-expanded', 'false');

      const titleSpan = document.createElement('span');
      titleSpan.textContent = item.title;

      const iconSpan = document.createElement('span');
      iconSpan.className = styles.toggleIcon;
      iconSpan.textContent = '+';

      button.appendChild(titleSpan);
      button.appendChild(iconSpan);

      const content = document.createElement('div');
      content.className = styles.contentVariants.hidden;

      const description = document.createElement('p');
      description.textContent = item.description;

      content.appendChild(description);

      li.appendChild(button);
      li.appendChild(content);
      accordion.appendChild(li);
    });

    container.appendChild(accordion);

    // 🎯 바닐라 JS 조건부 렌더링 핵심 함수
    const renderAccordion = () => {
      // 모든 아이템을 닫힌 상태로 초기화
      accordion.querySelectorAll('button').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.className = styles.tabBase;
      });
      accordion.querySelectorAll('div[class*="content"]').forEach(div => {
        div.className = styles.contentVariants.hidden;
      });

      // 현재 열린 아이템만 활성화 (조건부 렌더링 패턴)
      if (currentOpenId) {
        const activeButton = accordion.querySelector(
          `[data-item-id="${currentOpenId}"] button`
        ) as HTMLElement;
        const activeContent = accordion.querySelector(
          `[data-item-id="${currentOpenId}"] div[class*="content"]`
        ) as HTMLElement;

        if (activeButton && activeContent) {
          activeButton.setAttribute('aria-expanded', 'true');
          activeButton.className = `${styles.tabBase} ${styles.tabVariants.active}`;
          activeContent.className = styles.contentVariants.conditional;
        }
      }
    };

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      if (!button) return;

      const item = button.closest('li');
      if (!item) return;

      const itemId = item.getAttribute('data-item-id');
      if (!itemId) return;

      const isOpen = button.getAttribute('aria-expanded') === 'true';

      // 🎯 조건부 렌더링과 유사한 패턴
      if (isOpen) {
        currentOpenId = null; // 닫기
      } else {
        currentOpenId = itemId; // 열기
      }

      renderAccordion();
    };

    // 초기 렌더링
    renderAccordion();

    // 이벤트 리스너 추가
    accordion.addEventListener('click', handleClick);

    // 클린업 함수 반환
    return () => {
      accordion.removeEventListener('click', handleClick);
    };
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        순수 JavaScript 방식 <sub>DOM 직접 조작</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>{'if (isOpen) { renderContent(); }'}</code> - 순수 JavaScript로
          DOM을 직접 조작하여 조건부 렌더링 구현
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> React 의존성 없음, 번들 크기 최소화,
            완전한 DOM 제어
          </p>
          <p>
            <strong>❌ 단점:</strong> 코드 복잡성 높음, 상태 관리 어려움,
            유지보수 비용 증가
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 경량화가 중요한 환경, React
            외부에서 사용, 순수 JS 학습
          </p>
        </div>
      </div>

      <VanillaWrapper
        title="바닐라 JS 아코디언"
        initiator={initiator}
        className=""
      />
    </div>
  );
};

export default VanillaAccordion;
