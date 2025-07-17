"use client";
import { useState, useCallback, useMemo, memo, useRef, useEffect } from "react";
import { Tab, Content, Item, ToggleIcon } from "./components";
import { AccordionProps } from "./types";
import * as styles from "./accordion.css";

// 🚀 가상화된 아코디언 컴포넌트 (대량 데이터용)
interface VirtualizedAccordionProps extends Omit<AccordionProps, "items"> {
  items: AccordionProps["items"];
  itemHeight?: number;
  containerHeight?: number;
  overscan?: number;
}

const VirtualizedAccordion = memo(
  ({
    items,
    defaultOpenId = null,
    multiple = false,
    searchable = false,
    animated = true,
    className = "",
    onChange,
    itemHeight = 60,
    containerHeight = 400,
    overscan = 5,
  }: VirtualizedAccordionProps) => {
    const [openItems, setOpenItems] = useState<string[]>(
      defaultOpenId ? [defaultOpenId] : []
    );
    const [scrollTop, setScrollTop] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // 🚀 스크롤 이벤트 쓰로틀링
    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;
      setScrollTop(target.scrollTop);
    }, []);

    // 🚀 가상화 계산
    const virtualizedItems = useMemo(() => {
      const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscan
      );
      const endIndex = Math.min(
        items.length - 1,
        Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
      );

      const visibleItems = items.slice(startIndex, endIndex);
      const totalHeight = items.length * itemHeight;
      const offsetY = startIndex * itemHeight;

      return {
        visibleItems,
        totalHeight,
        offsetY,
        startIndex,
        endIndex,
      };
    }, [items, scrollTop, itemHeight, containerHeight, overscan]);

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

          if (onChange) {
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
      return virtualizedItems.visibleItems.map((item, index) => (
        <Item
          key={item.id}
          type={animated ? "animated" : "default"}
          style={{
            position: "absolute",
            top: `${virtualizedItems.offsetY + index * itemHeight}px`,
            width: "100%",
            height: `${itemHeight}px`,
          }}
        >
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
    }, [
      virtualizedItems,
      animated,
      isItemOpen,
      toggleItem,
      getDisplayType,
      itemHeight,
    ]);

    // 🚀 메모이제이션된 컨테이너 클래스
    const containerClassName = useMemo(() => {
      return `${styles.themeClass} ${className}`.trim();
    }, [className]);

    return (
      <div className={containerClassName}>
        <div
          ref={containerRef}
          style={{
            height: `${containerHeight}px`,
            overflow: "auto",
            position: "relative",
          }}
          onScroll={handleScroll}
        >
          <div
            style={{
              height: `${virtualizedItems.totalHeight}px`,
              position: "relative",
            }}
          >
            <ul className={styles.container} style={{ position: "relative" }}>
              {renderedItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

// 🚀 디스플레이 네임 설정
VirtualizedAccordion.displayName = "VirtualizedAccordion";

export default VirtualizedAccordion;
