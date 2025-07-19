// src/components/01_accordion/1_conditional.tsx
"use client";
import { memo, useMemo } from "react";
import Accordion from "./Accordion";
import { accordionData } from "./data";
import * as styles from "./accordion.css";

// 🚀 성능 최적화된 조건부 렌더링 예제
const ConditionalAccordion = memo(() => {
  // 🚀 메모이제이션된 데이터
  const memoizedData = useMemo(() => accordionData, []);

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>
        🎯 조건부 렌더링 (Conditional Rendering)
      </h2>
      <p style={{ marginBottom: "1rem", color: "#64748b" }}>
        아이템이 열릴 때만 DOM에 렌더링됩니다. 메모리 효율적이지만 애니메이션이
        제한적입니다.
      </p>

      <Accordion
        items={memoizedData}
        defaultOpenId="1"
        onChange={(openItems) => {
          console.log("열린 아이템:", openItems);
        }}
      />
    </div>
  );
});

// 🚀 디스플레이 네임 설정
ConditionalAccordion.displayName = "ConditionalAccordion";

export default ConditionalAccordion;
