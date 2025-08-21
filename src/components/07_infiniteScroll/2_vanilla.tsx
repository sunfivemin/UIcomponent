'use client';

import { useEffect, useRef } from 'react';
import { pickRandom, randomize, waitFor } from '../../service/util';
import data from './data';
import * as styles from './infiniteScroll.css';

export type Datum = {
  index: number;
  id: string;
  title: string;
  description: string;
};

export type FetchState = 'loading' | 'fetched' | 'idle' | 'error';

const generatePageData = async () => {
  const randomData = pickRandom({ data, length: 20 });
  await waitFor(
    randomize({
      min: 300,
      max: 1500,
      step: 50,
    })
  );
  return randomData;
};

const generateListItem = ({
  number,
  title,
  description,
}: Omit<Datum, 'id'> & { number: number }) => {
  const $li = document.createElement('li');
  $li.className = styles.listItem;
  $li.innerHTML = `
    <div class="${styles.itemTitle}">
      <span class="${styles.itemNumber}">${number}</span>
      ${title}
    </div>
    <div class="${styles.itemDescription}">${description}</div>
  `;
  return $li;
};

const infinitePageFetcher = async (
  callback: (state: FetchState, data?: Datum[]) => void
) => {
  callback('loading');
  try {
    const nextPageData = await generatePageData();
    callback('fetched', nextPageData);
  } catch (error) {
    callback('error');
  }
};

const VanillaInfiniteScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !listRef.current ||
      !moreRef.current ||
      !spinnerRef.current
    )
      return;

    let prevState: FetchState = 'idle';
    let page = 0;

    const handleFetch = (state: FetchState, fetchedData?: Datum[]) => {
      if (prevState === state) return;
      prevState = state;

      if (state === 'loading') {
        containerRef.current?.appendChild(spinnerRef.current!);
      } else {
        spinnerRef.current?.remove();
      }

      if (state === 'fetched' && fetchedData) {
        page += 1;
        const listItems = fetchedData.map((item, i) =>
          generateListItem({ ...item, number: (page - 1) * 20 + i + 1 })
        );
        listRef.current?.append(...listItems);
      }
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry?.isIntersecting && prevState !== 'loading') {
        infinitePageFetcher(handleFetch);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 1,
    });
    observer.observe(moreRef.current);

    // 초기 데이터 로드
    infinitePageFetcher(handleFetch);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Vanilla JS 무한스크롤</h1>
        <p className={styles.pageSubtitle}>
          순수 JavaScript와 Intersection Observer를 사용한 무한스크롤 구현
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          #2. Vanilla JS
          <sub>Intersection Observer - 무한스크롤 구현</sub>
        </h3>
        <div className={styles.summary}>
          <p>
            <strong>핵심:</strong>
            <code>Vanilla JS 기반 무한스크롤</code> - Intersection Observer
            API를 직접 사용하여 스크롤을 감지하고, DOM 조작으로 리스트 아이템을
            추가
          </p>
          <div className={styles.summaryDetails}>
            <p>
              <strong>✅ 장점:</strong> 가벼운 번들 크기, 직접적인 DOM 제어,
              프레임워크 독립적, 높은 성능, 제로 의존성
            </p>
            <p>
              <strong>❌ 단점:</strong> 수동 DOM 관리, 상태 관리 복잡성,
              재사용성 제한, 명령형 코드
            </p>
            <p>
              <strong>💡 사용 시나리오:</strong> 경량 웹 애플리케이션, 마이크로
              프론트엔드, 성능 중심 프로젝트, 프레임워크 없는 환경
            </p>
            <p>
              <strong>🔧 동작 방식:</strong>
              <code>IntersectionObserver</code> API로 스크롤 감지,{' '}
              <code>DOM 조작</code>으로 리스트 아이템 동적 추가
            </p>
          </div>
        </div>
        <div ref={containerRef} className={styles.listContainer}>
          <ul ref={listRef}></ul>
          <div ref={moreRef} className={styles.moreTrigger} />
          <div
            ref={spinnerRef}
            className={styles.spinner}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default VanillaInfiniteScroll;
