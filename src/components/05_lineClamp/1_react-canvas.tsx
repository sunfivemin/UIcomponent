import { useEffect, useRef, useState } from 'react';
import * as styles from './lineClamp.css';
import data from './data';
import { measureLines } from '@/lib/utils';

interface LineClampedTextProps {
  text: string;
}

const LineClampedText = ({ text }: LineClampedTextProps) => {
  const elemRef = useRef<HTMLDivElement>(null);
  const [isClamped, toggleClamped] = useState(true);

  useEffect(() => {
    if (text && elemRef.current) {
      const measuredLines = measureLines(elemRef.current, text);
      toggleClamped(measuredLines > 3);
    }
  }, [text]);

  return (
    <div className={`${styles.content} ${isClamped ? styles.textClamped : ''}`}>
      <div className={styles.text} ref={elemRef}>
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

const LineClamp1 = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        #1. React<sub>canvas - 3줄말줄임</sub>
      </h3>
      <div className={styles.summary}>
        <p>
          <strong>핵심:</strong>
          <code>useRef + measureLines + WebkitLineClamp</code> - 캔버스 기반
          측정으로 3줄 초과 여부를 판단하여 말줄임 처리
        </p>
        <div className={styles.summaryDetails}>
          <p>
            <strong>✅ 장점:</strong> 정확한 측정, 성능 최적화, 간단한 구현
          </p>
          <p>
            <strong>❌ 단점:</strong> 캔버스 의존성, 브라우저 호환성 고려 필요
          </p>
          <p>
            <strong>💡 사용 시나리오:</strong> 정확한 라인 측정이 필요한 경우,
            성능이 중요한 경우
          </p>
        </div>
      </div>
      <div className={styles.container}>
        {data.map((text, i) => (
          <LineClampedText text={text} key={i} />
        ))}
      </div>
    </div>
  );
};

export default LineClamp1;
