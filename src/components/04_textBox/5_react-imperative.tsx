import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import * as styles from './textBox.css';

type TextBoxHandle = { getValue: () => string };
type TextBoxProps = { minRow: number; maxRow: number };

const TextBox = forwardRef<TextBoxHandle, TextBoxProps>(
  ({ minRow, maxRow }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const cloneRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => ({
      getValue() {
        return textareaRef.current?.value ?? '';
      },
    }));

    useEffect(() => {
      const elem = textareaRef.current;
      const cloneElem = cloneRef.current;
      const handleInput = () => {
        if (!elem || !cloneElem) return;
        const val = elem.value;
        cloneElem.value = val;
        elem.rows = Math.min(
          Math.max(
            Math.ceil(cloneElem.scrollHeight / cloneElem.clientHeight),
            minRow
          ),
          maxRow
        );
      };
      if (elem) elem.addEventListener('input', handleInput);
      return () => elem?.removeEventListener('input', handleInput);
    }, [minRow, maxRow]);

    return (
      <div className={styles.container}>
        <textarea className={styles.clone} ref={cloneRef} rows={1} readOnly />
        <textarea
          placeholder="텍스트를 입력하고 버튼을 클릭하면 아래에 입력한 텍스트가 등장합니다."
          className={styles.textarea}
          ref={textareaRef}
          rows={minRow}
        />
      </div>
    );
  }
);

const TextBox5 = () => {
  const ref = useRef<TextBoxHandle>(null);
  const [text, setText] = useState('');

  const handleClickSubmit = () => {
    const textBoxValue = ref.current?.getValue() ?? '';
    setText(textBoxValue);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #5. React
        <sub>상위 컴포넌트에서 값 접근 (useImperativeHandle)</sub>
      </h3>
      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>useImperativeHandle</code> - 부모가 자식
          컴포넌트의 내부 값에 직접 접근할 수 있도록 ref API 노출
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 특정 명령형 동작 간단, 폼 연동 유연
          </p>
          <p>
            <strong>❌ 단점:</strong> 데이터 흐름이 분산되어 추적 어려움
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 외부 라이브러리 제어,
            포커스/스크롤 등 명령형 제어가 필요한 경우
          </p>
        </div>
      </div>
      <TextBox minRow={4} maxRow={10} ref={ref} />
      <div className={styles.actions}>
        <button
          className={styles.submitButton}
          type="button"
          onClick={handleClickSubmit}
        >
          제출
        </button>
      </div>
      <p className={styles.resultText}>{text}</p>
    </div>
  );
};

export default TextBox5;
