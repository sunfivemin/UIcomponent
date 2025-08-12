import { SyntheticEvent, useState } from 'react';
import * as styles from './textBox.css';
import { measureLines } from '@/lib/utils';

const MIN_ROWS = 3;
const MAX_ROWS = 15;

const TextBox1 = () => {
  const [text, setText] = useState('');
  const [rows, setRows] = useState(MIN_ROWS);

  const handleChange = (e: SyntheticEvent) => {
    const elem = e.target as HTMLTextAreaElement;
    const val = elem.value;
    const next = Math.min(
      Math.max(measureLines(elem, val), MIN_ROWS),
      MAX_ROWS
    );
    setText(val);
    setRows(next);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #1. React<sub>controlled. canvas</sub>
      </h3>
      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>useState + measureLines</code> - 입력
          값과 행 수를 상태로 관리하며, 캔버스 기반 측정으로 rows를 갱신
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 직관적, 상태 일원화, 테스트 용이
          </p>
          <p>
            <strong>❌ 단점:</strong> 입력마다 상태 변경으로 렌더 비용 증가
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 폼 검증, 외부 상태와 동기화가
            필요한 경우
          </p>
          <p>
            <strong>요약:</strong> 폼 검증·외부 상태 연동, 테스트가 중요하면 이
            방식이 적합합니다.
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
