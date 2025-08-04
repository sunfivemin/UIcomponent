'use client';

import React from 'react';
import ConditionalAccordion from './1_conditional';
import DisplayAccordion from './2_display';
import AnimatedAccordion from './3_animated';
import VanillaAccordion from './4_vanilla';
import RadioAccordion from './5_radio';
import SearchableAccordion from './6_searchable';
import MultipleAccordion from './7_multiple';
import DetailsAccordion from './8_details';
import * as styles from './accordion.css';

const AccordionCollection = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>아코디언</h1>
        <p className={styles.pageSubtitle}>
          8가지 다른 방식으로 구현된 아코디언 컴포넌트들
        </p>
      </header>

      <main>
        <ConditionalAccordion />
        <DisplayAccordion />
        <AnimatedAccordion />
        <VanillaAccordion />
        <RadioAccordion />
        <SearchableAccordion />
        <MultipleAccordion />
        <DetailsAccordion />
      </main>
    </div>
  );
};

export default AccordionCollection;
