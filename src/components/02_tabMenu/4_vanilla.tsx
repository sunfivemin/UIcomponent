'use client';

import React from 'react';
import { tabData } from './data';
import VanillaWrapper from '@/components/common/vanillaWrapper';
import * as styles from './tabMenu.css';

const TabMenuVanilla = () => {
  const initiator = (container: HTMLDivElement) => {
    let currentId = tabData[0].id;

    // 탭 리스트 생성
    const tabList = document.createElement('ul');
    tabList.className = styles.tabList;
    tabList.setAttribute('role', 'tablist');

    // 콘텐츠 컨테이너 생성
    const contentContainer = document.createElement('div');
    contentContainer.className = styles.content;

    // 탭 버튼들 생성
    const tabButtons = tabData.map(tab => {
      const li = document.createElement('li');
      li.className = styles.tabItem;

      const button = document.createElement('button');
      button.className =
        styles.tabButtonVariants[tab.id === currentId ? 'active' : 'inactive'];
      button.textContent = tab.title;
      button.setAttribute('role', 'tab');
      button.setAttribute(
        'aria-selected',
        tab.id === currentId ? 'true' : 'false'
      );
      button.setAttribute('aria-controls', `panel-${tab.id}`);
      button.id = `tab-${tab.id}`;

      li.appendChild(button);
      return { li, button, tab };
    });

    // DOM에 추가
    tabButtons.forEach(({ li }) => tabList.appendChild(li));
    container.appendChild(tabList);
    container.appendChild(contentContainer);

    // 🎯 바닐라 JS 조건부 렌더링 핵심 함수
    const renderContent = () => {
      // 기존 콘텐츠 제거 (조건부 렌더링과 유사)
      contentContainer.innerHTML = '';

      // 활성 탭만 렌더링 (조건부 렌더링 패턴)
      const activeTab = tabData.find(tab => tab.id === currentId);
      if (activeTab) {
        const panel = document.createElement('div');
        panel.className = styles.contentPanelActive;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', `tab-${activeTab.id}`);
        panel.id = `panel-${activeTab.id}`;
        panel.textContent = activeTab.description;

        contentContainer.appendChild(panel);
      }
    };

    // 초기 콘텐츠 렌더링
    renderContent();

    // 클릭 이벤트 핸들러
    const handleTabClick = (clickedTab: (typeof tabData)[0]) => {
      currentId = clickedTab.id;

      // 탭 버튼 상태 업데이트
      tabButtons.forEach(({ button, tab }) => {
        const isActive = tab.id === currentId;
        button.className =
          styles.tabButtonVariants[isActive ? 'active' : 'inactive'];
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // 🎯 조건부 렌더링과 유사한 패턴
      renderContent();
    };

    // 이벤트 리스너 추가
    tabButtons.forEach(({ button, tab }) => {
      button.addEventListener('click', () => handleTabClick(tab));
    });

    // 클린업 함수 반환
    return () => {
      tabButtons.forEach(({ button, tab }) => {
        button.removeEventListener('click', () => handleTabClick(tab));
      });
    };
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        바닐라 JS 방식 <sub>DOM 직접 조작</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>{'if (isActive) { renderContent(); }'}</code> - 순수
          JavaScript로 DOM을 직접 조작하여 조건부 렌더링 구현
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
        title="바닐라 JS 탭메뉴"
        initiator={initiator}
        className={styles.tabMenu()}
      />
    </div>
  );
};

export default TabMenuVanilla;
