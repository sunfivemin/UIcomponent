import { useEffect, useRef, useState } from 'react';
import * as styles from './lineClamp.css';
import data from './data';

interface LineClampedTextProps {
  text: string;
  lines: number;
}

const LineClampedText = ({ text, lines }: LineClampedTextProps) => {
  const cloneRef = useRef<HTMLDivElement>(null);
  const elemRef = useRef<HTMLDivElement>(null);
  const [isClamped, toggleClamped] = useState(true);

  useEffect(() => {
    if (elemRef.current && cloneRef.current) {
      const lineHeight = parseInt(getComputedStyle(elemRef.current).lineHeight);
      const measuredLines = Math.floor(
        cloneRef.current.offsetHeight / lineHeight
      );
      toggleClamped(measuredLines > lines);
    }
  }, [lines, text]);

  return (
    <div className={`${styles.content} ${isClamped ? styles.textClamped : ''}`}>
      <div className={styles.textClone} ref={cloneRef}>
        {text}
      </div>
      <div
        className={styles.text}
        ref={elemRef}
        style={{
          WebkitLineClamp: lines,
          display: isClamped ? '-webkit-box' : 'block',
          WebkitBoxOrient: isClamped ? 'vertical' : 'unset',
          overflow: isClamped ? 'hidden' : 'visible',
          textOverflow: isClamped ? 'ellipsis' : 'unset',
        }}
      >
        {text}
      </div>
      {isClamped && (
        <button
          className={styles.buttonMore}
          onClick={() => toggleClamped(false)}
        />
      )}
    </div>
  );
};

const LineClamp2 = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #2. React<sub>clone - 동적 줄 수 말줄임</sub>
      </h3>
      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong> <code>useRef + clone + offsetHeight</code> -
          숨겨진 clone 요소로 실제 높이를 측정하여 동적 줄 수 말줄임 처리
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 동적 줄 수 지원, 정확한 측정, 브라우저
            호환성 좋음
          </p>
          <p>
            <strong>❌ 단점:</strong> DOM 요소 추가, 복잡한 레이아웃 계산
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 다양한 줄 수가 필요한 경우,
            정확한 높이 측정이 필요한 경우
          </p>
        </div>
      </div>
      <div className={styles.container}>
        {data.map((text, i) => (
          <LineClampedText text={text} lines={5 - i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default LineClamp2;
