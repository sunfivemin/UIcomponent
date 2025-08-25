'use client';

import { useCallback, useState, useEffect, useRef } from 'react';
import { pickRandom, randomize, waitFor } from '../../service/util';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import data from './data';
import * as styles from './infiniteScroll.css';

export type Datum = {
  index: number;
  id: string;
  title: string;
  description: string;
};

export type FetchState<T> = {
  data: T[][];
  state: 'loading' | 'fetched' | 'idle' | 'error';
};

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

const useInfiniteFetcher = () => {
  const [state, setState] = useState<FetchState<Datum>>({
    state: 'idle',
    data: [],
  });

  const fetchNextPage = useCallback(async () => {
    setState(prev => ({
      ...prev,
      state: 'loading',
    }));

    try {
      const nextPageData = await generatePageData();
      setState(prev => ({
        data: [...(prev.data || []), nextPageData],
        state: 'fetched',
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        state: 'error',
      }));
    }
  }, []);

  // 초기 데이터 로드
  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return {
    ...state,
    fetchNextPage,
  };
};

const ListItem = ({
  number,
  title,
  description,
}: Omit<Datum, 'id'> & { number: number }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.itemTitle}>
        <span className={styles.itemNumber}>{number}</span>
        {title}
      </div>
      <div className={styles.itemDescription}>{description}</div>
    </li>
  );
};

const ReactInfiniteScroll = () => {
  const { data: fetchedData, state, fetchNextPage } = useInfiniteFetcher();
  const moreRef = useRef<HTMLDivElement>(null);

  const { entries } = useIntersectionObserver(moreRef, { threshold: 1 });

  useEffect(() => {
    const entry = entries[0];
    if (entry?.isIntersecting && state !== 'loading') {
      fetchNextPage();
    }
  }, [entries, state, fetchNextPage]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>React 무한스크롤</h1>
        <p className={styles.pageSubtitle}>
          React Hooks와 Intersection Observer를 사용한 무한스크롤 구현
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          #1. React
          <sub>Intersection Observer - 무한스크롤 구현</sub>
        </h3>
        <div className={styles.summary}>
          <p>
            <strong>핵심:</strong>
            <code>React Hooks 기반 무한스크롤</code> - useInfiniteFetcher 훅으로
            데이터 페칭을 관리하고, useIntersectionObserver로 스크롤 감지를 처리
          </p>
          <div className={styles.summaryDetails}>
            <p>
              <strong>✅ 장점:</strong> React 생태계와 완벽 호환, 상태 관리
              용이, 재사용 가능한 훅, 선언적 코드, 컴포넌트 기반 구조
            </p>
            <p>
              <strong>❌ 단점:</strong> 번들 크기 증가, React 의존성, 러닝 커브,
              오버헤드
            </p>
            <p>
              <strong>💡 사용 시나리오:</strong> 소셜 미디어 피드, 뉴스 목록,
              상품 목록, 댓글 목록, 대규모 데이터 목록
            </p>
            <p>
              <strong>🔧 동작 방식:</strong>
              <code>useIntersectionObserver</code> 훅으로 스크롤 감지,
              <code>useInfiniteFetcher</code> 훅으로 데이터 페칭 관리
            </p>
          </div>
        </div>
        <div className={styles.listContainer}>
          <ul>
            {fetchedData.map((page, i) =>
              page.map((item, j) => (
                <ListItem {...item} number={i * 20 + j + 1} key={`${i}_${j}`} />
              ))
            )}
          </ul>
          <div ref={moreRef} className={styles.moreTrigger} />
          {state === 'loading' && <div className={styles.spinner} />}
        </div>
      </div>
    </div>
  );
};

export default ReactInfiniteScroll;
