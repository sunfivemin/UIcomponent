import VanillaWrapper from '../common/vanillaWrapper';
import * as styles from './lineClamp.css';
import data from './data';

const clampedElemBuilder = (
  text: string,
  lines: number,
  wrapper: HTMLDivElement
) => {
  let isClamped = true; // React와 일관성을 위해 true로 시작

  const toggleClamped = (e: Event | null, force?: boolean) => {
    isClamped = typeof force === 'boolean' ? force : !isClamped;

    if (isClamped) {
      $text.style.display = '-webkit-box';
      $text.style.webkitBoxOrient = 'vertical';
      $text.style.overflow = 'hidden';
      $text.style.textOverflow = 'ellipsis';
      $text.style.webkitLineClamp = lines.toString();
      $content.append($btn);
    } else {
      $text.style.display = 'block';
      $text.style.webkitBoxOrient = 'unset';
      $text.style.overflow = 'visible';
      $text.style.textOverflow = 'unset';
      $text.style.webkitLineClamp = 'unset';
      $btn.remove();
    }
  };

  const $clone = document.createElement('div');
  $clone.classList.add(styles.textClone);
  $clone.textContent = text;
  // clone 요소를 content와 동일한 위치에 배치
  $clone.style.left = '0';
  $clone.style.top = '0';
  $clone.style.padding = '5px 10px';

  const $text = document.createElement('div');
  $text.classList.add(styles.text);
  $text.textContent = text;
  // 초기에는 말줄임 상태로 표시 (React와 일관성)
  $text.style.display = '-webkit-box';
  $text.style.webkitBoxOrient = 'vertical';
  $text.style.overflow = 'hidden';
  $text.style.textOverflow = 'ellipsis';
  $text.style.webkitLineClamp = lines.toString();

  const $btn = document.createElement('button');
  $btn.classList.add(styles.buttonMore);
  $btn.textContent = '더보기'; // 버튼 텍스트 추가
  $btn.addEventListener('click', toggleClamped); // once 제거

  const $content = document.createElement('div');
  $content.classList.add(styles.content);
  $content.append($clone, $text);
  $content.append($btn); // 초기에 버튼 추가

  // DOM에 추가된 후 측정
  const measureAndClamp = () => {
    const lineHeight = parseInt(getComputedStyle($text).lineHeight);
    const measuredLines = Math.floor($clone.offsetHeight / lineHeight);

    // React와 동일한 로직: 3줄 이하면 말줄임 해제
    if (measuredLines <= lines) {
      toggleClamped(null, false);
    }
  };

  // MutationObserver로 DOM 변경 감지
  const observer = new MutationObserver(() => {
    if (wrapper.contains($content)) {
      // DOM에 추가된 후 측정
      setTimeout(measureAndClamp, 10);
      observer.disconnect(); // 한 번만 실행
    }
  });

  observer.observe(wrapper, {
    childList: true,
    subtree: true,
  });

  return $content;
};

const initiator = (wrapper: HTMLDivElement) => {
  const $elems = data.map(
    (text, _i) => clampedElemBuilder(text, 3, wrapper) // 모든 요소를 3줄로 통일
  );
  wrapper.append(...$elems);
};

const LineClamp3 = () => (
  <div className={styles.section}>
    <h3 className={styles.sectionTitle}>
      #3. Vanilla<sub>MutationObserver - 동적 말줄임</sub>
    </h3>
    <div className={styles.summary}>
      <p>
        <strong>핵심:</strong> <code>MutationObserver + clone + DOM 조작</code>-
        DOM 변경 감지로 동적 말줄임 처리
      </p>
      <div className={styles.summaryDetails}>
        <p>
          <strong>✅ 장점:</strong> 순수 JS, 성능 최적화, 메모리 효율적
        </p>
        <p>
          <strong>❌ 단점:</strong> 복잡한 DOM 조작, 디버깅 어려움
        </p>
        <p>
          <strong>💡 사용 시나리오:</strong> React 없이 사용해야 하는 경우,
          성능이 매우 중요한 경우
        </p>
      </div>
    </div>
    <div className={styles.container}>
      <VanillaWrapper initiator={initiator} title="Vanilla JS LineClamp" />
    </div>
  </div>
);

export default LineClamp3;
