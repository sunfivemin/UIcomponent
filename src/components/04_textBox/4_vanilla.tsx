import { measureLines } from '@/lib/utils';
import VanillaWrapper from '../common/vanillaWrapper';
import * as styles from './textBox.css';

const initiator = (wrapper: HTMLDivElement) => {
  const MIN_ROWS = 3;
  const MAX_ROWS = 15;

  const $text = document.createElement('textarea');
  $text.classList.add(styles.textarea);
  $text.rows = MIN_ROWS;

  const handleInput = () => {
    const val = $text.value;
    const lines = Math.min(
      Math.max(measureLines($text, val), MIN_ROWS),
      MAX_ROWS
    );
    $text.rows = lines;
  };
  $text.addEventListener('input', handleInput);

  const $cont = document.createElement('div');
  $cont.classList.add(styles.container);
  $cont.append($text);
  wrapper.append($cont);
};

const TextBox4V = () => (
  <div className={styles.section}>
    <h3 className={styles.sectionTitle}>#4. Vanilla JS</h3>
    <div className={styles.summary}>
      <p>
        <strong>핵심:</strong>{' '}
        <code>document.createElement + addEventListener</code>- React 없이 DOM
        API로 rows를 갱신
      </p>
      <div className={styles.summaryDetails}>
        <p>
          <strong>✅ 장점:</strong> 번들/오버헤드 최소, 프레임워크 독립
        </p>
        <p>
          <strong>❌ 단점:</strong> 상태 연동/테스트 도구 부재, 보일러플레이트↑
        </p>
        <p>
          <strong>💡 사용 시나리오:</strong> 순수 JS 예제, 성능/가벼움 우선
        </p>
      </div>
    </div>
    <VanillaWrapper title="바닐라 JS 구현" initiator={initiator} />
  </div>
);

export default TextBox4V;
