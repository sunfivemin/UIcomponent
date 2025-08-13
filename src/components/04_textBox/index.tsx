import TextBox1 from './1_react-controlled';
import TextBox2 from './2_react-uncontrolled';
import TextBox3 from './3_react-clone';
import TextBox4V from './4_vanilla';
import TextBox5 from './5_react-imperative';
import * as styles from './textBox.css';

const TextBoxes = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>반응형 텍스트박스</h1>
        <p className={styles.pageSubtitle}>
          5가지 방식으로 구현한 자동 줄바꿈 텍스트영역
        </p>
      </header>

      <main>
        <TextBox1 />
        <TextBox2 />
        <TextBox3 />
        <TextBox4V />
        <TextBox5 />
      </main>
    </div>
  );
};

export default TextBoxes;
