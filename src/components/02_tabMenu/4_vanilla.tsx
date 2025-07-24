import React, { useEffect, useRef } from 'react';
import { tabData } from './data';
import * as styles from './tabMenu.css';

const TabMenuVanilla = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 기존 내용 제거
    container.innerHTML = '';

    let currentId = tabData[0].id;

    // 탭 리스트 생성
    const tabList = document.createElement('ul');
    tabList.className = styles.tabList;
    tabList.setAttribute('role', 'tablist');

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

    // 콘텐츠 패널들 생성
    const contentPanels = tabData.map(tab => {
      const panel = document.createElement('div');
      panel.className =
        tab.id === currentId ? styles.contentPanelActive : styles.contentPanel;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `tab-${tab.id}`);
      panel.id = `panel-${tab.id}`;
      panel.hidden = tab.id !== currentId;
      panel.textContent = tab.description;

      return { panel, tab };
    });

    // 콘텐츠 컨테이너 생성
    const contentContainer = document.createElement('div');
    contentContainer.className = styles.content;

    // DOM에 추가
    tabButtons.forEach(({ li }) => tabList.appendChild(li));
    contentPanels.forEach(({ panel }) => contentContainer.appendChild(panel));

    container.appendChild(tabList);
    container.appendChild(contentContainer);

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

      // 콘텐츠 패널 상태 업데이트
      contentPanels.forEach(({ panel, tab }) => {
        const isActive = tab.id === currentId;
        panel.className = isActive
          ? styles.contentPanelActive
          : styles.contentPanel;
        panel.hidden = !isActive;
      });
    };

    // 이벤트 리스너 추가
    tabButtons.forEach(({ button, tab }) => {
      button.addEventListener('click', () => handleTabClick(tab));
    });

    // 클린업 함수
    return () => {
      tabButtons.forEach(({ button, tab }) => {
        button.removeEventListener('click', () => handleTabClick(tab));
      });
    };
  }, []);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>#4. Vanilla JS 방식</h3>
      <div ref={containerRef} className={styles.tabMenu()} />
    </div>
  );
};

export default TabMenuVanilla;
