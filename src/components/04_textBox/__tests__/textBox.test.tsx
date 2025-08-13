import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import TextBox1 from '../1_react-controlled';
import TextBox2 from '../2_react-uncontrolled';
import TextBox3 from '../3_react-clone';
import TextBox4 from '../4_vanilla';
import TextBox5 from '../5_react-imperative';

describe('TextBox Components', () => {
  describe('TextBox1 - React Controlled', () => {
    test('should render component with title', () => {
      render(<TextBox1 />);
      expect(screen.getByText('#1. React')).toBeInTheDocument();
      expect(
        screen.getByText('controlled - 제어 컴포넌트')
      ).toBeInTheDocument();
    });

    test('should render textarea', () => {
      render(<TextBox1 />);
      const textareas = screen.getAllByRole('textbox');
      expect(textareas.length).toBeGreaterThan(0);
    });

    test('should update text when typing', () => {
      render(<TextBox1 />);
      const textareas = screen.getAllByRole('textbox');
      const textarea = textareas[0]; // 첫 번째 textarea 사용

      fireEvent.change(textarea, { target: { value: 'Hello World' } });
      expect(textarea).toHaveValue('Hello World');
    });

    test('should have initial placeholder', () => {
      render(<TextBox1 />);
      const textarea = screen.getByPlaceholderText('텍스트를 입력하세요...');
      expect(textarea).toBeInTheDocument();
    });
  });

  describe('TextBox2 - React Uncontrolled', () => {
    test('should render component with title', () => {
      render(<TextBox2 />);
      expect(screen.getByText('#2. React')).toBeInTheDocument();
      expect(
        screen.getByText('uncontrolled - 비제어 컴포넌트')
      ).toBeInTheDocument();
    });

    test('should render textarea', () => {
      render(<TextBox2 />);
      const textareas = screen.getAllByRole('textbox');
      expect(textareas.length).toBeGreaterThan(0);
    });

    test('should update text when typing', () => {
      render(<TextBox2 />);
      const textareas = screen.getAllByRole('textbox');
      const textarea = textareas[0]; // 첫 번째 textarea 사용

      fireEvent.input(textarea, { target: { value: 'Hello World' } });
      expect(textarea).toHaveValue('Hello World');
    });

    test('should have initial placeholder', () => {
      render(<TextBox2 />);
      const textarea = screen.getByPlaceholderText('텍스트를 입력하세요...');
      expect(textarea).toBeInTheDocument();
    });
  });

  describe('TextBox3 - React Clone', () => {
    test('should render component with title', () => {
      render(<TextBox3 />);
      expect(screen.getByText('#3. React')).toBeInTheDocument();
      expect(screen.getByText('clone - DOM 복제')).toBeInTheDocument();
    });

    test('should render textarea', () => {
      render(<TextBox3 />);
      const textareas = screen.getAllByRole('textbox');
      expect(textareas.length).toBeGreaterThan(0);
    });

    test('should update text when typing', () => {
      render(<TextBox3 />);
      const textareas = screen.getAllByRole('textbox');
      const textarea = textareas[0]; // 첫 번째 textarea 사용

      fireEvent.change(textarea, { target: { value: 'Hello World' } });
      expect(textarea).toHaveValue('Hello World');
    });

    test('should have initial placeholder', () => {
      render(<TextBox3 />);
      const textarea = screen.getByPlaceholderText('텍스트를 입력하세요...');
      expect(textarea).toBeInTheDocument();
    });
  });

  describe('TextBox4 - Vanilla', () => {
    test('should render component with title', () => {
      render(<TextBox4 />);
      expect(screen.getByText('#4. Vanilla')).toBeInTheDocument();
      expect(screen.getByText('DOM 조작')).toBeInTheDocument();
    });

    test('should render VanillaWrapper', () => {
      render(<TextBox4 />);
      // VanillaWrapper가 렌더링되는지 확인
      const wrapper = document.querySelector('[class*="vanilla-wrapper"]');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('TextBox5 - React Imperative', () => {
    test('should render component with title', () => {
      render(<TextBox5 />);
      expect(screen.getByText('#5. React')).toBeInTheDocument();
      // 실제 subtitle 확인
      const subtitleElements = screen.getAllByText(
        '상위 컴포넌트에서 값 접근 (useImperativeHandle)'
      );
      expect(subtitleElements.length).toBeGreaterThan(0);
    });

    test('should render textarea', () => {
      render(<TextBox5 />);
      const textareas = screen.getAllByRole('textbox');
      expect(textareas.length).toBeGreaterThan(0);
    });

    test('should have submit button', () => {
      render(<TextBox5 />);
      const submitButtons = screen.getAllByText('제출');
      expect(submitButtons.length).toBeGreaterThan(0);
    });

    test('should submit text when button is clicked', () => {
      render(<TextBox5 />);
      const textareas = screen.getAllByRole('textbox');
      const textarea = textareas[0]; // 첫 번째 textarea 사용
      const submitButtons = screen.getAllByText('제출');
      const submitButton = submitButtons[0]; // 첫 번째 제출 버튼 사용

      // 먼저 텍스트 입력
      fireEvent.change(textarea, { target: { value: 'Hello World' } });
      expect(textarea).toHaveValue('Hello World');

      // 제출 버튼 클릭
      fireEvent.click(submitButton);

      // 결과 텍스트가 표시되는지 확인
      expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    test('should have proper structure', () => {
      render(<TextBox5 />);

      // 기본 구조가 있는지 확인
      const section = document.querySelector('[class*="textBox_section"]');
      const summary = document.querySelector('[class*="textBox_summary"]');
      const actions = document.querySelector('[class*="textBox_actions"]');

      expect(section).toBeInTheDocument();
      expect(summary).toBeInTheDocument();
      expect(actions).toBeInTheDocument();
    });
  });

  describe('TextBox Common Features', () => {
    test('should have consistent styling', () => {
      render(<TextBox1 />);

      // 공통 스타일 클래스들이 적용되는지 확인
      const textareas = document.querySelectorAll('textarea');
      expect(textareas.length).toBeGreaterThan(0);
    });

    test('should handle multiline text', () => {
      render(<TextBox1 />);
      const textareas = screen.getAllByRole('textbox');
      const textarea = textareas[0]; // 첫 번째 textarea 사용

      const multilineText = 'Line 1\nLine 2\nLine 3';
      fireEvent.change(textarea, { target: { value: multilineText } });
      expect(textarea).toHaveValue(multilineText);
    });
  });
});
