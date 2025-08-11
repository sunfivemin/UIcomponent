import VanillaWrapper from '../common/vanillaWrapper';
import data from './data';
import * as styles from './tooltip.css';

const initiator = (wrapper: HTMLDivElement) => {
  const $tooltips = data.map(({ id, title, description }) => {
    const $details = document.createElement('details');
    $details.classList.add(styles.details);
    $details.setAttribute('data-tooltip', id);

    const $summary = document.createElement('summary');
    $summary.classList.add(styles.summaryTrigger);
    $summary.setAttribute('data-tooltip-summary', 'true');

    const $text = document.createTextNode(title);
    const $anchor = document.createElement('span');
    $anchor.classList.add(styles.anchor);
    const $dot = document.createElement('span');
    $dot.classList.add(styles.dot);
    $dot.textContent = '!';

    const $tooltip = document.createElement('div');
    $tooltip.classList.add(styles.tooltip);
    $tooltip.textContent = description;

    $anchor.append($dot, $tooltip);
    $summary.append($text, $anchor);
    $details.append($summary);
    return $details;
  });

  const closeAllTooltip = (e: Event) => {
    const target = e.target as HTMLElement;
    const clickedDetails = target.closest('details[data-tooltip]');
    document.querySelectorAll('[data-tooltip]').forEach(elem => {
      if (elem !== clickedDetails) elem.removeAttribute('open');
    });
  };
  window.addEventListener('click', closeAllTooltip);

  wrapper.append(...$tooltips);
};

const Tooltip5 = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        바닐라 JavaScript 방식 <sub>DOM 직접 조작</sub>
      </h3>

      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>document.createElement + DOM API</code> -
          React 없이 순수 JavaScript로 구현
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 번들 크기 최소화, 성능 최적화, 프레임워크
            독립적
          </p>
          <p>
            <strong>❌ 단점:</strong> 보일러플레이트 코드, 상태 관리 복잡,
            디버깅 어려움
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 경량화가 중요한 프로젝트, 레거시
            시스템, 성능 중심
          </p>
        </div>
      </div>

      <VanillaWrapper
        title="바닐라 JS 구현"
        initiator={initiator}
        className={styles.tooltipMenu}
      />
    </div>
  );
};

export default Tooltip5;
