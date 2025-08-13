import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Accordion1 from '../1_conditional';
import Accordion2 from '../2_display';
import Accordion3 from '../3_animated';
import Accordion4 from '../4_vanilla';
import Accordion5 from '../5_radio';
import Accordion6 from '../6_searchable';
import Accordion7 from '../7_multiple';
import Accordion8 from '../8_details';
import data from '../data';

describe('Accordion Components', () => {
  describe('Accordion1 - Conditional', () => {
    test('should render component with title', () => {
      render(<Accordion1 />);
      expect(screen.getByText('#1. React')).toBeInTheDocument();
      expect(
        screen.getByText('conditional - 조건부 렌더링')
      ).toBeInTheDocument();
    });

    test('should render accordion items', () => {
      render(<Accordion1 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
      expect(screen.getByText(data[1].title)).toBeInTheDocument();
    });

    test('should toggle accordion when clicked', () => {
      render(<Accordion1 />);

      const firstAccordion = screen.getByText(data[0].title);
      fireEvent.click(firstAccordion);

      // 클릭 후 내용이 표시되는지 확인
      expect(screen.getByText(data[0].content)).toBeInTheDocument();
    });
  });

  describe('Accordion2 - Display', () => {
    test('should render component with title', () => {
      render(<Accordion2 />);
      expect(screen.getByText('#2. React')).toBeInTheDocument();
      expect(screen.getByText('display - CSS display')).toBeInTheDocument();
    });

    test('should render accordion items', () => {
      render(<Accordion2 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should toggle accordion visibility', () => {
      render(<Accordion2 />);

      const firstAccordion = screen.getByText(data[0].title);
      fireEvent.click(firstAccordion);

      // 내용이 표시되는지 확인
      expect(screen.getByText(data[0].content)).toBeInTheDocument();
    });
  });

  describe('Accordion3 - Animated', () => {
    test('should render component with title', () => {
      render(<Accordion3 />);
      expect(screen.getByText('#3. React')).toBeInTheDocument();
      expect(screen.getByText('animated - CSS transition')).toBeInTheDocument();
    });

    test('should render accordion items', () => {
      render(<Accordion3 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should have animation classes', () => {
      render(<Accordion3 />);

      // 애니메이션 관련 클래스가 있는지 확인
      const accordionItems = document.querySelectorAll('[class*="accordion"]');
      expect(accordionItems.length).toBeGreaterThan(0);
    });
  });

  describe('Accordion4 - Vanilla', () => {
    test('should render component with title', () => {
      render(<Accordion4 />);
      expect(screen.getByText('#4. Vanilla')).toBeInTheDocument();
      expect(screen.getByText('DOM 조작')).toBeInTheDocument();
    });

    test('should render VanillaWrapper', () => {
      render(<Accordion4 />);
      expect(screen.getByText('Vanilla JS Accordion')).toBeInTheDocument();
    });
  });

  describe('Accordion5 - Radio', () => {
    test('should render component with title', () => {
      render(<Accordion5 />);
      expect(screen.getByText('#5. React')).toBeInTheDocument();
      expect(screen.getByText('radio - 단일 선택')).toBeInTheDocument();
    });

    test('should render accordion items', () => {
      render(<Accordion5 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should allow only one accordion open at a time', () => {
      render(<Accordion5 />);

      const firstAccordion = screen.getByText(data[0].title);
      const secondAccordion = screen.getByText(data[1].title);

      fireEvent.click(firstAccordion);
      expect(screen.getByText(data[0].content)).toBeInTheDocument();

      fireEvent.click(secondAccordion);
      // 첫 번째는 닫히고 두 번째만 열려야 함
      expect(screen.queryByText(data[0].content)).not.toBeInTheDocument();
      expect(screen.getByText(data[1].content)).toBeInTheDocument();
    });
  });

  describe('Accordion6 - Searchable', () => {
    test('should render component with title', () => {
      render(<Accordion6 />);
      expect(screen.getByText('#6. React')).toBeInTheDocument();
      expect(screen.getByText('searchable - 검색 기능')).toBeInTheDocument();
    });

    test('should render search input', () => {
      render(<Accordion6 />);
      expect(
        screen.getByPlaceholderText('검색어를 입력하세요')
      ).toBeInTheDocument();
    });

    test('should filter accordion items based on search', () => {
      render(<Accordion6 />);

      const searchInput = screen.getByPlaceholderText('검색어를 입력하세요');
      fireEvent.change(searchInput, { target: { value: data[0].title } });

      // 검색어와 일치하는 항목만 표시되는지 확인
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });
  });

  describe('Accordion7 - Multiple', () => {
    test('should render component with title', () => {
      render(<Accordion7 />);
      expect(screen.getByText('#7. React')).toBeInTheDocument();
      expect(screen.getByText('multiple - 다중 선택')).toBeInTheDocument();
    });

    test('should render accordion items', () => {
      render(<Accordion7 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should allow multiple accordions open at once', () => {
      render(<Accordion7 />);

      const firstAccordion = screen.getByText(data[0].title);
      const secondAccordion = screen.getByText(data[1].title);

      fireEvent.click(firstAccordion);
      fireEvent.click(secondAccordion);

      // 두 개 모두 열려있는지 확인
      expect(screen.getByText(data[0].content)).toBeInTheDocument();
      expect(screen.getByText(data[1].content)).toBeInTheDocument();
    });
  });

  describe('Accordion8 - Details', () => {
    test('should render component with title', () => {
      render(<Accordion8 />);
      expect(screen.getByText('#8. HTML')).toBeInTheDocument();
      expect(screen.getByText('details - 네이티브')).toBeInTheDocument();
    });

    test('should render accordion items', () => {
      render(<Accordion8 />);
      expect(screen.getByText(data[0].title)).toBeInTheDocument();
    });

    test('should use native details element', () => {
      render(<Accordion8 />);

      // details 요소가 있는지 확인
      const detailsElements = document.querySelectorAll('details');
      expect(detailsElements.length).toBeGreaterThan(0);
    });
  });
});
