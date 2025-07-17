"use client";
import { useState, useMemo, useCallback, memo } from "react";
import { Tab, Content, Item, ToggleIcon } from "./components";
import { AccordionProps } from "./types";
import * as styles from "./accordion.css";

// 🚀 성능 최적화된 Accordion 컴포넌트
const Accordion = memo(
  ({
    items,
    defaultOpenId = null,
    multiple = false,
    searchable = false,
    animated = true,
    className = "",
    onChange,
  }: AccordionProps) => {
    const [openItems, setOpenItems] = useState<string[]>(
      defaultOpenId ? [defaultOpenId] : []
    );

    // 🚀 메모이제이션된 토글 함수
    const toggleItem = useCallback(
      (id: string) => {
        setOpenItems((prevOpenItems) => {
          const newOpenItems = multiple
            ? prevOpenItems.includes(id)
              ? prevOpenItems.filter((item) => item !== id)
              : [...prevOpenItems, id]
            : prevOpenItems.includes(id)
            ? []
            : [id];

          // 🚀 onChange 콜백 최적화
          if (onChange) {
            // 다음 틱에서 실행하여 상태 업데이트 완료 후 호출
            setTimeout(() => onChange(newOpenItems), 0);
          }

          return newOpenItems;
        });
      },
      [multiple, onChange]
    );

    // 🚀 메모이제이션된 아이템 열림 상태 체크
    const isItemOpen = useCallback(
      (id: string) => {
        return openItems.includes(id);
      },
      [openItems]
    );

    // 🚀 메모이제이션된 디스플레이 타입 계산
    const getDisplayType = useCallback(
      (id: string) => {
        if (!animated) {
          return isItemOpen(id) ? "visible" : "hidden";
        }
        return isItemOpen(id) ? "animatedOpen" : "animated";
      },
      [animated, isItemOpen]
    );

    // 🚀 메모이제이션된 아이템 렌더링
    const renderedItems = useMemo(() => {
      return items.map((item) => (
        <Item key={item.id} type={animated ? "animated" : "default"}>
          <Tab
            isActive={isItemOpen(item.id)}
            onClick={() => toggleItem(item.id)}
          >
            <span>{item.title}</span>
            <ToggleIcon isActive={isItemOpen(item.id)} />
          </Tab>

          <Content
            display={getDisplayType(item.id)}
            isVisible={isItemOpen(item.id)}
          >
            {item.description}
          </Content>
        </Item>
      ));
    }, [items, animated, isItemOpen, toggleItem, getDisplayType]);

    // 🚀 메모이제이션된 컨테이너 클래스
    const containerClassName = useMemo(() => {
      return `${styles.themeClass} ${className}`.trim();
    }, [className]);

    return (
      <div className={containerClassName}>
        <ul className={styles.container}>{renderedItems}</ul>
      </div>
    );
  }
);

// 🚀 디스플레이 네임 설정 (디버깅용)
Accordion.displayName = "Accordion";

// 🎯 사전 정의된 아코디언 변형들 (메모이제이션)
export const SimpleAccordion = memo(
  (props: Omit<AccordionProps, "multiple" | "animated">) => (
    <Accordion {...props} multiple={false} animated={false} />
  )
);

export const AnimatedAccordion = memo(
  (props: Omit<AccordionProps, "animated">) => (
    <Accordion {...props} animated={true} />
  )
);

export const MultipleAccordion = memo(
  (props: Omit<AccordionProps, "multiple">) => (
    <Accordion {...props} multiple={true} />
  )
);

export const SearchableAccordion = memo(
  (props: Omit<AccordionProps, "searchable">) => (
    <Accordion {...props} searchable={true} />
  )
);

// 🚀 디스플레이 네임 설정
SimpleAccordion.displayName = "SimpleAccordion";
AnimatedAccordion.displayName = "AnimatedAccordion";
MultipleAccordion.displayName = "MultipleAccordion";
SearchableAccordion.displayName = "SearchableAccordion";

export default Accordion;
