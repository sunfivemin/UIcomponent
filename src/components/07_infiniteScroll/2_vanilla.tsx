'use client';

import VanillaWrapper from '@/components/common/vanillaWrapper';
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

const initInfiniteScroll = (wrapper: HTMLDivElement) => {
  const $container = document.createElement('div');
  $container.className = styles.listContainer;

  const $list = document.createElement('ul');
  const $moreTrigger = document.createElement('div');
  $moreTrigger.className = styles.moreTrigger;

  const $spinner = document.createElement('div');
  $spinner.className = styles.spinner;
  $spinner.style.display = 'none';

  $container.append($list, $moreTrigger, $spinner);

  let prevState: FetchState = 'idle';
  let page = 0;

  const handleFetch = (state: FetchState, fetchedData?: Datum[]) => {
    if (prevState === state) return;
    prevState = state;

    if (state === 'loading') {
      $container.appendChild($spinner);
    } else {
      $spinner.remove();
    }

    if (state === 'fetched' && fetchedData) {
      page += 1;
      const listItems = fetchedData.map((item, i) =>
        generateListItem({ ...item, number: (page - 1) * 20 + i + 1 })
      );
      $list.append(...listItems);
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
  observer.observe($moreTrigger);

  // 초기 데이터 로드
  infinitePageFetcher(handleFetch);

  wrapper.appendChild($container);
};

const VanillaInfiniteScroll = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Vanilla JS Infinite Scroll</h1>
        <p className={styles.pageSubtitle}>
          순수 JavaScript와 Intersection Observer를 활용한 무한스크롤 구현
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          #2. Vanilla JS
          <sub>순수 JavaScript - DOM 조작 기반 구현</sub>
        </h3>
        <div className={styles.summary}>
          <p>
            <strong>핵심:</strong>
            <code>순수 JavaScript + Intersection Observer</code> - 프레임워크
            없이 순수 JavaScript로 직접 DOM을 조작하여 무한스크롤 구현
          </p>
          <div className={styles.summaryDetails}>
            <p>
              <strong>✅ 장점:</strong> 가벼운 번들 크기, 빠른 실행 속도,
              프레임워크 의존성 없음, 직접적인 DOM 제어, 높은 성능
            </p>
            <p>
              <strong>❌ 단점:</strong> 수동 DOM 관리, 메모리 누수 위험, 코드
              재사용성 낮음, 유지보수 어려움, 복잡한 상태 관리
            </p>
            <p>
              <strong>💡 사용 시나리오:</strong> 가벼운 웹사이트, 성능이 중요한
              프로젝트, 프레임워크 사용 불가능한 환경, 마이크로 프론트엔드
            </p>
            <p>
              <strong>🔧 동작 방식:</strong> <code>IntersectionObserver</code>{' '}
              API로 스크롤 감지하고, <code>DOM 조작</code>으로 리스트 아이템을
              동적 추가하며,
              <code>async/await</code>로 비동기 데이터 페칭 처리
            </p>
          </div>
        </div>

        <VanillaWrapper
          title="Vanilla JS InfiniteScroll"
          initiator={initInfiniteScroll}
        />
      </div>
    </div>
  );
};

export default VanillaInfiniteScroll;
