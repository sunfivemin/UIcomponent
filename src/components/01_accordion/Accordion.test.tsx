import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ConditionalAccordion from './1_conditional';
import AccordionCollection from './index';
import { accordionData } from './data';

// Mock the CSS modules
vi.mock('./accordion.css', () => ({
  pageContainer: 'page-container',
  themeClass: 'theme-class',
  pageHeader: 'page-header',
  pageTitle: 'page-title',
  pageSubtitle: 'page-subtitle',
  section: 'section',
  sectionTitle: 'section-title',
  container: 'container',
  itemVariants: {
    default: 'item-default',
    animated: 'item-animated',
  },
  tabBase: 'tab-base',
  tabVariants: {
    default: 'tab-default',
    active: 'tab-active',
  },
  toggleIcon: 'toggle-icon',
  toggleIconVariants: {
    inactive: 'toggle-icon-inactive',
    active: 'toggle-icon-active',
  },
  contentBase: 'content-base',
  contentVariants: {
    conditional: 'content-conditional',
    hidden: 'content-hidden',
    visible: 'content-visible',
    animated: 'content-animated',
    animatedOpen: 'content-animated-open',
  },
  summary: 'summary',
  summaryTitle: 'summary-title',
  summaryList: 'summary-list',
  summaryListItem: 'summary-list-item',
  detailsContainer: 'details-container',
  detailsItem: 'details-item',
  detailsSummary: 'details-summary',
  detailsContent: 'details-content',
  radioInput: 'radio-input',
  radioLabel: 'radio-label',
  radioContent: 'radio-content',
}));

describe('ConditionalAccordion', () => {
  it('renders without crashing', () => {
    render(<ConditionalAccordion />);
    expect(
      screen.getByText('🎯 조건부 렌더링 (Conditional Rendering)')
    ).toBeInTheDocument();
  });

  it('renders all accordion items', () => {
    render(<ConditionalAccordion />);
    accordionData.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('shows first item as open by default', () => {
    render(<ConditionalAccordion />);
    const firstItem = accordionData[0];
    expect(screen.getByText(firstItem.description)).toBeInTheDocument();
  });

  it('toggles accordion items when clicked', async () => {
    const user = userEvent.setup();
    render(<ConditionalAccordion />);

    // First item should be open by default
    expect(screen.getByText(accordionData[0].description)).toBeInTheDocument();

    // Click on first item to close it
    const firstItemTitle = screen.getByText(accordionData[0].title);
    await user.click(firstItemTitle);

    // First item should now be closed
    await waitFor(() => {
      expect(
        screen.queryByText(accordionData[0].description)
      ).not.toBeInTheDocument();
    });

    // Click on second item to open it
    const secondItemTitle = screen.getByText(accordionData[1].title);
    await user.click(secondItemTitle);

    // Second item should now be open
    await waitFor(() => {
      expect(
        screen.getByText(accordionData[1].description)
      ).toBeInTheDocument();
    });
  });

  it('only allows one item to be open at a time', async () => {
    const user = userEvent.setup();
    render(<ConditionalAccordion />);

    // First item should be open by default
    expect(screen.getByText(accordionData[0].description)).toBeInTheDocument();

    // Click on second item
    const secondItemTitle = screen.getByText(accordionData[1].title);
    await user.click(secondItemTitle);

    // Second item should be open, first should be closed
    await waitFor(() => {
      expect(
        screen.getByText(accordionData[1].description)
      ).toBeInTheDocument();
      expect(
        screen.queryByText(accordionData[0].description)
      ).not.toBeInTheDocument();
    });
  });

  it('displays toggle icons correctly', () => {
    render(<ConditionalAccordion />);

    // First item should show minus icon (open)
    expect(screen.getByText('−')).toBeInTheDocument();

    // Other items should show plus icon (closed)
    const plusIcons = screen.getAllByText('+');
    expect(plusIcons).toHaveLength(accordionData.length - 1);
  });

  it('updates toggle icons when items are clicked', async () => {
    const user = userEvent.setup();
    render(<ConditionalAccordion />);

    // Initially, first item should have minus icon
    expect(screen.getByText('−')).toBeInTheDocument();

    // Click on first item to close it
    const firstItemTitle = screen.getByText(accordionData[0].title);
    await user.click(firstItemTitle);

    // Now first item should have plus icon (check for the specific one in the first item)
    await waitFor(() => {
      const plusIcons = screen.getAllByText('+');
      expect(plusIcons.length).toBeGreaterThan(0);
      // The first item should now have a plus icon instead of minus
      expect(screen.queryByText('−')).not.toBeInTheDocument();
    });
  });
});

describe('AccordionCollection', () => {
  it('renders the collection page', () => {
    render(<AccordionCollection />);
    expect(screen.getByText('아코디언 컴포넌트 모음')).toBeInTheDocument();
    expect(
      screen.getByText('vanilla-extract + CVA로 구현한 8가지 아코디언 예시들')
    ).toBeInTheDocument();
  });

  it('renders all accordion sections', () => {
    render(<AccordionCollection />);

    // Check for all section titles
    expect(
      screen.getByText('🎯 조건부 렌더링 (Conditional Rendering)')
    ).toBeInTheDocument();
    expect(
      screen.getByText('📚 vanilla-extract + CVA 장점')
    ).toBeInTheDocument();
    expect(screen.getByText('🔍 8가지 구현 방식 비교')).toBeInTheDocument();
  });

  it('displays implementation summary', () => {
    render(<AccordionCollection />);

    // Check for key benefits
    expect(screen.getByText('타입 안전성:')).toBeInTheDocument();
    expect(screen.getByText('성능:')).toBeInTheDocument();
    expect(screen.getByText('유지보수성:')).toBeInTheDocument();
  });

  it('displays implementation comparison', () => {
    render(<AccordionCollection />);

    // Check for implementation descriptions
    expect(screen.getByText('#1 조건부 렌더링:')).toBeInTheDocument();
    expect(screen.getByText('#2 CSS display:')).toBeInTheDocument();
    expect(screen.getByText('#3 CSS 애니메이션:')).toBeInTheDocument();
  });
});

// Integration tests
describe('Accordion Integration', () => {
  it('maintains state correctly across multiple interactions', async () => {
    const user = userEvent.setup();
    render(<ConditionalAccordion />);

    // Test multiple clicks and verify state
    const firstItem = screen.getByText(accordionData[0].title);
    const secondItem = screen.getByText(accordionData[1].title);

    // Initially first item is open
    expect(screen.getByText(accordionData[0].description)).toBeInTheDocument();

    // Click second item
    await user.click(secondItem);
    await waitFor(() => {
      expect(
        screen.getByText(accordionData[1].description)
      ).toBeInTheDocument();
      expect(
        screen.queryByText(accordionData[0].description)
      ).not.toBeInTheDocument();
    });

    // Click first item again
    await user.click(firstItem);
    await waitFor(() => {
      expect(
        screen.getByText(accordionData[0].description)
      ).toBeInTheDocument();
      expect(
        screen.queryByText(accordionData[1].description)
      ).not.toBeInTheDocument();
    });
  });

  it('handles rapid clicking correctly', async () => {
    const user = userEvent.setup();
    render(<ConditionalAccordion />);

    const firstItem = screen.getByText(accordionData[0].title);

    // Rapidly click the same item multiple times
    await user.click(firstItem);
    await user.click(firstItem);
    await user.click(firstItem);

    // Should end up in a consistent state
    await waitFor(() => {
      const isOpen = screen.queryByText(accordionData[0].description);
      expect(isOpen).not.toBeInTheDocument();
    });
  });
});
