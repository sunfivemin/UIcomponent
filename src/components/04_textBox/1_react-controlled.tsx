import {
  SyntheticEvent,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import * as styles from './textBox.css';
import { measureLines, debounce } from '@/lib/utils';

const MIN_ROWS = 3;
const MAX_ROWS = 15;

const TextBox1 = () => {
  const [text, setText] = useState('');
  const [rows, setRows] = useState(MIN_ROWS);

  const updateRows = useCallback(
    (currentText: string, elem: HTMLTextAreaElement) => {
      const next = Math.min(
        Math.max(measureLines(elem, currentText), MIN_ROWS),
        MAX_ROWS
      );
      setRows(next);
    },
    []
  );

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

  const handleChange = (e: SyntheticEvent) => {
    const elem = e.target as HTMLTextAreaElement;
    const val = elem.value;

    // 텍스트는 즉시 업데이트 (입력 지연 방지)
    setText(val);

    // rows 계산만 debounce 처리 (성능 최적화)
    debouncedUpdateRows(val, elem);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #1. React<sub>controlled. canvas</sub>
      </h3>
      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>useState + measureLines + debounce</code>
          - 입력 값과 행 수를 상태로 관리하며, 캔버스 기반 측정으로 rows를 갱신
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 직관적, 상태 일원화, 테스트 용이, 성능
            최적화, 메모리 누수 방지
          </p>
          <p>
            <strong>❌ 단점:</strong> 복잡도 증가, 디바운스 지연
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 폼 검증, 외부 상태와 동기화가
            필요한 경우, 성능이 중요한 경우
          </p>
          <p>
            <strong>요약:</strong> 폼 검증·외부 상태 연동, 테스트가 중요하고
            성능도 고려해야 한다면 이 방식이 적합합니다.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <textarea
          className={styles.textarea}
          onChange={handleChange}
          rows={rows}
          value={text}
        />
      </div>
    </div>
  );
};

export default TextBox1;
