import { useRef, useEffect } from 'react';
import * as styles from './textBox.css';

const MIN_ROWS = 3;
const MAX_ROWS = 15;

const TextBox3 = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const cloneRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const elem = textareaRef.current;
    const cloneElem = cloneRef.current;
    const handleInput = () => {
      if (!elem || !cloneElem) return;
      const val = elem.value;
      cloneElem.value = val;
      elem.rows = Math.min(
        Math.max(
          Math.floor(cloneElem.scrollHeight / cloneElem.clientHeight),
          MIN_ROWS
        ),
        MAX_ROWS
      );
    };
    if (elem) elem.addEventListener('input', handleInput);
    return () => {
      if (elem) elem.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #3. React<sub>uncontrolled. clone elem</sub>
      </h3>
      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>clone textarea</code> - 숨김 복제 요소로
          scrollHeight/lineHeight를 측정해 rows 산출
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 캔버스 미사용, 렌더 스타일 기반 정확도↑
          </p>
          <p>
            <strong>❌ 단점:</strong> DOM 2개 유지, 이벤트 바인딩 필요
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 스타일 영향이 큰 레이아웃 환경
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <textarea className={styles.clone} ref={cloneRef} rows={1} readOnly />
        <textarea
          className={styles.textarea}
          ref={textareaRef}
          rows={MIN_ROWS}
        />
      </div>
    </div>
  );
};

export default TextBox3;
