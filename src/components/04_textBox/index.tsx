import TextBox1 from './1_react-controlled';
import TextBox2 from './2_react-uncontrolled';
import TextBox3 from './3_react-clone';
import TextBox4V from './4_vanilla';
import TextBox5 from './5_react-imperative';
import * as styles from './textBox.css';

const TextBoxes = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>반응형 텍스트박스</h2>
      <TextBox1 />
      <TextBox2 />
      <TextBox3 />
      <TextBox4V />
      <TextBox5 />
    </div>
  );
};

export default TextBoxes;
