'use client';
import VanillaWrapper from '@/components/common/vanillaWrapper';
import { accordionData } from './data';
import * as styles from './accordion.css';
import { AccordionItemData } from './types';

const VanillaAccordion = () => {
  const initiator = (wrapper: HTMLDivElement) => {
    let currentId: string | null = null;

    // vanilla-extract 클래스명 가져오기
    const containerClass = `${styles.container} ${styles.themeClass}`;
    const tabClass = styles.tabBase;
    const tabActiveClass = `${styles.tabBase} ${styles.tabVariants.active}`;
    const contentClass = `${styles.contentBase} ${styles.contentVariants.animated}`;
    const contentOpenClass = `${styles.contentBase} ${styles.contentVariants.animated} ${styles.contentVariants.animatedOpen}`;

    const createAccordionItem = (item: AccordionItemData) => {
      const li = document.createElement('li');
      li.className = styles.itemVariants.animated;

      const tab = document.createElement('div');
      tab.className = tabClass;
      tab.textContent = item.title;
      tab.dataset.id = item.id;
      tab.setAttribute('role', 'button');
      tab.setAttribute('tabindex', '0');
      tab.setAttribute('aria-expanded', 'false');

      const description = document.createElement('div');
      description.className = contentClass;
      description.textContent = item.description;
      description.setAttribute('role', 'region');

      li.append(tab, description);
      return { li, tab, description };
    };

    const ul = document.createElement('ul');
    ul.className = containerClass;

    const items = accordionData.map(createAccordionItem);
    items.forEach(({ li }) => ul.appendChild(li));

    const updateAccordion = () => {
      items.forEach(({ tab, description }, index) => {
        const isOpen = currentId === accordionData[index].id;

        tab.className = isOpen ? tabActiveClass : tabClass;
        tab.setAttribute('aria-expanded', isOpen.toString());
        description.className = isOpen ? contentOpenClass : contentClass;
      });
    };

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const id = target.dataset.id;
      if (!id) return;

      currentId = currentId === id ? null : id;
      updateAccordion();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(e);
      }
    };

    ul.addEventListener('click', handleClick);
    ul.addEventListener('keydown', handleKeyDown);

    // 첫 번째 항목 기본 열림
    currentId = accordionData[0].id;
    updateAccordion();

    wrapper.appendChild(ul);

    // cleanup 함수
    return () => {
      ul.removeEventListener('click', handleClick);
      ul.removeEventListener('keydown', handleKeyDown);
    };
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #4. VanillaWrapper + vanilla-extract <sub>순수 JavaScript DOM 조작</sub>
      </h3>
      <VanillaWrapper
        title="Vanilla JavaScript + vanilla-extract"
        initiator={initiator}
      />
    </div>
  );
};

export default VanillaAccordion;
