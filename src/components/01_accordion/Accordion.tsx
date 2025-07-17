'use client';
import { useState } from 'react';
import { Tab, Content, Item } from './components';
import { AccordionProps } from './types';
import * as styles from './accordion.css';

const Accordion = ({
  items,
  defaultOpenId = null,
  multiple = false,
  searchable = false,
  animated = true,
  className = '',
  onChange,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    const newOpenItems = multiple
      ? openItems.includes(id)
        ? openItems.filter(item => item !== id)
        : [...openItems, id]
      : openItems.includes(id)
      ? []
      : [id];

    setOpenItems(newOpenItems);
    onChange?.(newOpenItems);
  };

  const isItemOpen = (id: string) => openItems.includes(id);

  const getDisplayType = (id: string) => {
    if (!animated) {
      return isItemOpen(id) ? 'visible' : 'hidden';
    }
    return isItemOpen(id) ? 'animatedOpen' : 'animated';
  };

  return (
    <div className={`${styles.themeClass} ${className}`}>
      <ul className={styles.container}>
        {items.map(item => (
          <Item key={item.id} type={animated ? 'animated' : 'default'}>
            <Tab
              isActive={isItemOpen(item.id)}
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.title}</span>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  minWidth: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isItemOpen(item.id)
                    ? 'rgba(255, 255, 255, 0.2)'
                    : '#f1f5f9',
                  color: isItemOpen(item.id) ? '#ffffff' : '#6b7280',
                  transition: 'all 0.15s ease-out',
                  transform: isItemOpen(item.id)
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                }}
              >
                {isItemOpen(item.id) ? '−' : '+'}
              </span>
            </Tab>

            <Content
              display={getDisplayType(item.id)}
              isVisible={isItemOpen(item.id)}
            >
              {item.description}
            </Content>
          </Item>
        ))}
      </ul>
    </div>
  );
};

// 🎯 사전 정의된 아코디언 변형들
export const SimpleAccordion = (
  props: Omit<AccordionProps, 'multiple' | 'animated'>
) => <Accordion {...props} multiple={false} animated={false} />;

export const AnimatedAccordion = (props: Omit<AccordionProps, 'animated'>) => (
  <Accordion {...props} animated={true} />
);

export const MultipleAccordion = (props: Omit<AccordionProps, 'multiple'>) => (
  <Accordion {...props} multiple={true} />
);

export const SearchableAccordion = (
  props: Omit<AccordionProps, 'searchable'>
) => <Accordion {...props} searchable={true} />;

export default Accordion;
