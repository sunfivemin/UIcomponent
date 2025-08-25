import data from '../data';
import * as styles from '../scrollBox.css';
import * as lazyLoadingStyles from '@/components/06_lazyLoading/lazyLoading.css';
import vanillaIntersectionObserverV2 from '@/hooks/vanilla/intersectionObserverV2';

type Direction = 'prev' | 'next';
type ItemElemType = HTMLLIElement | null;
type ButtonState = Record<Direction, boolean>;

const DefaultButtonState: ButtonState = { prev: true, next: true };

// lazyLoading에서 가져온 lazyImageBuilder
const lazyLoad = ($elem: HTMLImageElement, src: string) => {
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('src', src);
        observer?.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0,
    rootMargin: '50px', // 뷰포트 50px 전에 미리 로딩 시작
  });
  observer.observe($elem);
};

const lazyImageBuilder = (src: string, width: number, height: number) => {
  const $elem = document.createElement('img');
  $elem.classList.add(lazyLoadingStyles.lazy, lazyLoadingStyles.image);
  $elem.setAttribute('width', width + 'px');
  $elem.setAttribute('height', height + 'px');
  $elem.setAttribute('alt', '');

  const onLoad = () => {
    $elem.classList.remove(lazyLoadingStyles.lazy);
  };
  $elem.addEventListener('load', onLoad);

  lazyLoad($elem, src);

  return $elem;
};

const generateListItem = ({
  id,
  description,
  imgUrl,
}: {
  id: string;
  description: string;
  imgUrl: string;
}) => {
  const $div = document.createElement('div');
  $div.style.display = 'flex';
  $div.style.flexDirection = 'column';
  $div.style.alignItems = 'center';
  $div.style.width = '100%';

  const $lazyImage = lazyImageBuilder(imgUrl, 250, 400);
  const $span = document.createElement('span');
  $span.textContent = description;
  $span.classList.add(styles.scrollBoxPageSpan);
  $div.append($lazyImage, $span);
  return $div;
};

const getVisibileEdgeItems = (
  $list: HTMLUListElement,
  $items: ItemElemType[]
) => {
  const { left: lLeft, right: lRight } = $list.getBoundingClientRect();
  const isVisible = ($item: ItemElemType) => {
    const { left, right } = $item?.getBoundingClientRect() || {
      left: 0,
      right: 0,
    };
    // 전부 화면상에 존재하는 조건: left >= lLeft && right <= lRight
    // 애매하게 걸친 경우까지 인정하는 조건: left <=lRight && right >= lLeft
    return left <= lRight && right >= lLeft; // 애매하게 보이는 경우까지 모두 포함시킴.
  };
  const leftIndex = Math.max($items.findIndex(isVisible), 0);
  const rightIndex = Math.min(
    $items.findLastIndex(isVisible),
    $items.length - 1
  );
  return { left: $items[leftIndex], right: $items[rightIndex] };
};

const vanillaScrollBox = () => {
  const setButtonEnabled = (state: ButtonState) => {
    $prevBtn.classList.toggle(styles.navButtonOn, state.prev);
    $nextBtn.classList.toggle(styles.navButtonOn, state.next);
  };

  const move = (direction: Direction) => {
    const { left, right } = getVisibileEdgeItems($list, $items);
    const elem = direction === 'prev' ? left : right; // 보여지는 맨 끝 아이템!
    elem?.scrollIntoView({
      inline: direction === 'prev' ? 'end' : 'start', // 가로위치 'start' | 'end' | 'nearest' | 'center'
      block: 'nearest', // 세로위치 'start' | 'end' | 'nearest' | 'center'
      behavior: 'smooth', // 애니메이션 유무. smooth: O / instant: X / auto: 알아서...
    });
  };

  const $list = document.createElement('ul');
  $list.classList.add(styles.list);

  const $prevObserver = document.createElement('li');
  $prevObserver.classList.add(styles.observer);
  $prevObserver.setAttribute('data-direction', 'prev');

  const $nextObserver = document.createElement('li');
  $nextObserver.classList.add(styles.observer);
  $nextObserver.setAttribute('data-direction', 'next');

  const $items = data.map((item, i) => {
    const $item = document.createElement('li');
    $item.classList.add(styles.item, styles.scrollBoxPageItem);
    $item.append(generateListItem(item));
    return $item;
  });
  $list.append($prevObserver, ...$items, $nextObserver);

  const $prevBtn = document.createElement('button');
  $prevBtn.classList.add(styles.navButton, styles.prev);
  $prevBtn.addEventListener('click', () => move('prev'));

  const $nextBtn = document.createElement('button');
  $nextBtn.classList.add(styles.navButton, styles.next);
  $nextBtn.addEventListener('click', () => move('next'));

  const $container = document.createElement('div');
  $container.classList.add(styles.scrollBox);
  $container.append($list, $prevBtn, $nextBtn);

  vanillaIntersectionObserverV2(
    [$prevObserver, $nextObserver],
    { threshold: 0 },
    entries => {
      if (!entries.length) {
        setButtonEnabled(DefaultButtonState);
      }
      const newState = { ...DefaultButtonState };
      entries.forEach(e => {
        const direction = (e.target as HTMLLIElement).dataset
          .direction as Direction;
        newState[direction] = false;
      });
      setButtonEnabled(newState);
    }
  );

  return $container;
};

export default vanillaScrollBox;
