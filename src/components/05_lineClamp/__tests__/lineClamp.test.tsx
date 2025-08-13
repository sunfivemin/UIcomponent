import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import LineClamp1 from '../1_react-canvas';
import LineClamp2 from '../2_react-clone';
import LineClamp3 from '../3_vanilla';

// Mock measureLines function
vi.mock('@/lib/utils', () => ({
  measureLines: vi.fn((element, text) => {
    // 텍스트 길이에 따라 줄 수 반환 (간단한 모킹)
    return text.length > 100 ? 5 : 2;
  }),
}));

describe('LineClamp Components', () => {
  describe('LineClamp1 - React Canvas', () => {
    test('should render component with correct structure', () => {
      render(<LineClamp1 />);

      // 특정 클래스를 가진 요소들이 렌더링되는지 확인
      const section = document.querySelector('[class*="lineClamp_section"]');
      const title = document.querySelector('[class*="lineClamp_sectionTitle"]');
      const summary = document.querySelector('[class*="lineClamp_summary"]');
      const container = document.querySelector(
        '[class*="lineClamp_container"]'
      );

      expect(section).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(summary).toBeInTheDocument();
      expect(container).toBeInTheDocument();
    });

    test('should render canvas subtitle', () => {
      render(<LineClamp1 />);
      const subtitleElements = screen.getAllByText('canvas - 3줄말줄임');
      expect(subtitleElements.length).toBeGreaterThan(0);
    });

    test('should have text content elements', () => {
      render(<LineClamp1 />);

      // 텍스트 컨텐츠 요소들이 있는지 확인
      const contentElements = document.querySelectorAll(
        '[class*="lineClamp_content"]'
      );
      expect(contentElements.length).toBeGreaterThan(0);
    });

    test('should have more buttons when text is clamped', () => {
      render(<LineClamp1 />);

      // 더보기 버튼들이 있는지 확인
      const buttons = document.querySelectorAll('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('LineClamp2 - React Clone', () => {
    test('should render component with correct structure', () => {
      render(<LineClamp2 />);

      // 특정 클래스를 가진 요소들이 렌더링되는지 확인
      const section = document.querySelector('[class*="lineClamp_section"]');
      const title = document.querySelector('[class*="lineClamp_sectionTitle"]');
      const summary = document.querySelector('[class*="lineClamp_summary"]');
      const container = document.querySelector(
        '[class*="lineClamp_container"]'
      );

      expect(section).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(summary).toBeInTheDocument();
      expect(container).toBeInTheDocument();
    });

    test('should render clone subtitle', () => {
      render(<LineClamp2 />);
      const subtitleElements = screen.getAllByText('clone - 동적 줄 수 말줄임');
      expect(subtitleElements.length).toBeGreaterThan(0);
    });

    test('should have text content elements', () => {
      render(<LineClamp2 />);

      // 텍스트 컨텐츠 요소들이 있는지 확인
      const contentElements = document.querySelectorAll(
        '[class*="lineClamp_content"]'
      );
      expect(contentElements.length).toBeGreaterThan(0);
    });

    test('should have more buttons for clamped text', () => {
      render(<LineClamp2 />);

      // 더보기 버튼들이 있는지 확인
      const buttons = document.querySelectorAll('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('LineClamp3 - Vanilla JS', () => {
    test('should render component with correct structure', () => {
      render(<LineClamp3 />);

      // 특정 클래스를 가진 요소들이 렌더링되는지 확인
      const section = document.querySelector('[class*="lineClamp_section"]');
      const title = document.querySelector('[class*="lineClamp_sectionTitle"]');
      const summary = document.querySelector('[class*="lineClamp_summary"]');
      const container = document.querySelector(
        '[class*="lineClamp_container"]'
      );

      expect(section).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(summary).toBeInTheDocument();
      expect(container).toBeInTheDocument();
    });

    test('should render MutationObserver subtitle', () => {
      render(<LineClamp3 />);
      const subtitleElements = screen.getAllByText(
        'MutationObserver - 동적 말줄임'
      );
      expect(subtitleElements.length).toBeGreaterThan(0);
    });

    test('should render VanillaWrapper', () => {
      render(<LineClamp3 />);

      // VanillaWrapper가 렌더링되는지 확인
      const wrapper = document.querySelector('[class*="vanilla-wrapper"]');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('LineClamp Common Features', () => {
    test('should have consistent styling classes', () => {
      render(<LineClamp1 />);

      // 공통 스타일 클래스들이 적용되는지 확인
      const sections = document.querySelectorAll(
        '[class*="lineClamp_section"]'
      );
      expect(sections.length).toBeGreaterThan(0);
    });

    test('should have proper structure', () => {
      render(<LineClamp1 />);

      // 기본 구조가 있는지 확인
      const section = document.querySelector('[class*="lineClamp_section"]');
      const summary = document.querySelector('[class*="lineClamp_summary"]');
      const container = document.querySelector(
        '[class*="lineClamp_container"]'
      );

      expect(section).toBeInTheDocument();
      expect(summary).toBeInTheDocument();
      expect(container).toBeInTheDocument();
    });
  });
});
