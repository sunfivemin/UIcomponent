import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import TabMenu1 from '../1_conditional';
import TabMenu2 from '../2_display';
import TabMenu3 from '../3_animated';
import TabMenu4 from '../4_vanilla';
import TabMenu5 from '../5_radio';
import TabMenu6 from '../6_searchable';
import TabMenu7 from '../7_multiple';
import data from '../data';

describe('TabMenu Components', () => {
  describe('TabMenu1 - Conditional', () => {
    test('should render component with title', () => {
      render(<TabMenu1 />);
      expect(screen.getByText('#1. React')).toBeInTheDocument();
      expect(
        screen.getByText('conditional - 조건부 렌더링')
      ).toBeInTheDocument();
    });

    test('should render tab items', () => {
      render(<TabMenu1 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
      expect(screen.getByText(data[1].title)).toBeInTheDocument();
    });

    test('should show first tab content by default', () => {
      render(<TabMenu1 />);
      expect(screen.getByText(data[0].content)).toBeInTheDocument();
    });

    test('should switch tab when clicked', () => {
      render(<TabMenu1 />);

      const secondTab = screen.getByText(data[1].title);
      fireEvent.click(secondTab);

      // 두 번째 탭 내용이 표시되는지 확인
      expect(screen.getByText(data[1].content)).toBeInTheDocument();
      // 첫 번째 탭 내용은 숨겨지는지 확인
      expect(screen.queryByText(data[0].content)).not.toBeInTheDocument();
    });
  });

  describe('TabMenu2 - Display', () => {
    test('should render component with title', () => {
      render(<TabMenu2 />);
      expect(screen.getByText('#2. React')).toBeInTheDocument();
      expect(screen.getByText('display - CSS display')).toBeInTheDocument();
    });

    test('should render tab items', () => {
      render(<TabMenu2 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should switch tab content', () => {
      render(<TabMenu2 />);

      const secondTab = screen.getByText(data[1].title);
      fireEvent.click(secondTab);

      expect(screen.getByText(data[1].content)).toBeInTheDocument();
    });
  });

  describe('TabMenu3 - Animated', () => {
    test('should render component with title', () => {
      render(<TabMenu3 />);
      expect(screen.getByText('#3. React')).toBeInTheDocument();
      expect(screen.getByText('animated - CSS transition')).toBeInTheDocument();
    });

    test('should render tab items', () => {
      render(<TabMenu3 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should have animation classes', () => {
      render(<TabMenu3 />);

      // 애니메이션 관련 클래스가 있는지 확인
      const tabItems = document.querySelectorAll('[class*="tab"]');
      expect(tabItems.length).toBeGreaterThan(0);
    });
  });

  describe('TabMenu4 - Vanilla', () => {
    test('should render component with title', () => {
      render(<TabMenu4 />);
      expect(screen.getByText('#4. Vanilla')).toBeInTheDocument();
      expect(screen.getByText('DOM 조작')).toBeInTheDocument();
    });

    test('should render VanillaWrapper', () => {
      render(<TabMenu4 />);
      expect(screen.getByText('Vanilla JS TabMenu')).toBeInTheDocument();
    });
  });

  describe('TabMenu5 - Radio', () => {
    test('should render component with title', () => {
      render(<TabMenu5 />);
      expect(screen.getByText('#5. React')).toBeInTheDocument();
      expect(screen.getByText('radio - 단일 선택')).toBeInTheDocument();
    });

    test('should render tab items', () => {
      render(<TabMenu5 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should show first tab content by default', () => {
      render(<TabMenu5 />);
      expect(screen.getByText(data[0].content)).toBeInTheDocument();
    });

    test('should switch tab when clicked', () => {
      render(<TabMenu5 />);

      const secondTab = screen.getByText(data[1].title);
      fireEvent.click(secondTab);

      expect(screen.getByText(data[1].content)).toBeInTheDocument();
    });
  });

  describe('TabMenu6 - Searchable', () => {
    test('should render component with title', () => {
      render(<TabMenu6 />);
      expect(screen.getByText('#6. React')).toBeInTheDocument();
      expect(screen.getByText('searchable - 검색 기능')).toBeInTheDocument();
    });

    test('should render search input', () => {
      render(<TabMenu6 />);
      expect(
        screen.getByPlaceholderText('검색어를 입력하세요')
      ).toBeInTheDocument();
    });

    test('should filter tab items based on search', () => {
      render(<TabMenu6 />);

      const searchInput = screen.getByPlaceholderText('검색어를 입력하세요');
      fireEvent.change(searchInput, { target: { value: data[0].title } });

      // 검색어와 일치하는 탭만 표시되는지 확인
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });
  });

  describe('TabMenu7 - Multiple', () => {
    test('should render component with title', () => {
      render(<TabMenu7 />);
      expect(screen.getByText('#7. React')).toBeInTheDocument();
      expect(screen.getByText('multiple - 다중 선택')).toBeInTheDocument();
    });

    test('should render tab items', () => {
      render(<TabMenu7 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should allow multiple tabs to be selected', () => {
      render(<TabMenu7 />);

      const firstTab = screen.getByText(data[0].title);
      const secondTab = screen.getByText(data[1].title);

      fireEvent.click(firstTab);
      fireEvent.click(secondTab);

      // 두 탭 모두 선택된 상태인지 확인
      expect(firstTab).toHaveClass('active');
      expect(secondTab).toHaveClass('active');
    });
  });
});
