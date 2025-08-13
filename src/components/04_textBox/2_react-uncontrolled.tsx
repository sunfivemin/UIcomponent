import { SyntheticEvent, useCallback, useMemo, useEffect } from 'react';
import * as styles from './textBox.css';
import { measureLines, debounce } from '@/lib/utils';

const MIN_ROWS = 3;
const MAX_ROWS = 15;

const TextBox2 = () => {
  const updateRows = useCallback((elem: HTMLTextAreaElement) => {
    const val = elem.value;
    const lines = Math.min(
      Math.max(measureLines(elem, val), MIN_ROWS),
      MAX_ROWS
    );
    elem.rows = lines;
  }, []);

  const debouncedUpdateRows = useMemo(
    () => debounce(updateRows, 300),
    [updateRows]
  );

  // 컴포넌트 언마운트 시 디바운스 취소 (메모리 누수 방지)
  useEffect(() => {
    return () => {
      debouncedUpdateRows.cancel();
    };
  }, [debouncedUpdateRows]);

  const handleInput = (e: SyntheticEvent) => {
    const elem = e.target as HTMLTextAreaElement;

    // rows 계산만 debounce 처리 (성능 최적화)
    debouncedUpdateRows(elem);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #2. React<sub>uncontrolled. canvas</sub>
      </h3>
      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>DOM owns value/rows + debounce</code> -
          onInput 시점에만 measureLines로 계산해 <code>elem.rows</code>를 직접
          갱신 (성능 최적화 적용)
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 렌더 비용 최소화, 간단함, 성능 최적화
          </p>
          <p>
            <strong>❌ 단점:</strong> 상태 연동/검증이 어렵고 테스트 난이도↑,
            디바운스 지연
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 단순 입력, 성능 우선, 로컬 DOM
            제어
          </p>
          <p>
            <strong>요약:</strong> 성능이 최우선이거나 단순 입력/로컬 DOM 제어가
            목적이면 이 방식이 적합합니다.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <textarea
          className={styles.textarea}
          rows={MIN_ROWS}
          onInput={handleInput}
        />
      </div>
    </div>
  );
};

export default TextBox2;
