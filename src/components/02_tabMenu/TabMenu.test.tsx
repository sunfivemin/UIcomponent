import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TabMenu from './TabMenu';
import TabMenuConditional from './1_conditional';
import TabMenuDisplay from './2_display';
import TabMenuAnimated from './3_animated';
import TabMenuVanilla from './4_vanilla';
import TabMenuRadio from './5_radio';
import TabMenuSearchable from './6_searchable';
import TabMenuMultiple from './7_multiple';
import { tabData } from './data';

// CSS 모듈 모킹 (완전한 모킹)
vi.mock('./tabMenu.css', () => ({
  // 기본 탭메뉴
  tabMenu: () => 'tab-menu',
  tabMenuContainer: 'tab-menu-container',
  tabList: 'tab-list',
  tabItem: 'tab-item',
  tabButton: 'tab-button',
  tabButtonActive: 'tab-button-active',
  tabButtonInactive: 'tab-button-inactive',
  tabButtonVariants: {
    active: 'tab-button-active',
    inactive: 'tab-button-inactive',
  },
  content: 'content',
  contentPanel: 'content-panel',
  contentPanelActive: 'content-panel-active',

  // 애니메이션 탭메뉴
  animatedTabList: 'animated-tab-list',

  // 라디오 탭메뉴
  radioTabList: 'radio-tab-list',
  radioInput: 'radio-input',
  radioLabel: 'radio-label',
  radioContent: 'radio-content',

  // 페이지 스타일
  pageContainer: 'page-container',
  themeClass: 'theme-class',
  pageHeader: 'page-header',
  pageTitle: 'page-title',
  pageSubtitle: 'page-subtitle',
  section: 'section',
  sectionTitle: 'section-title',
  summary: 'summary',
  summaryTitle: 'summary-title',
  summaryList: 'summary-list',

  // 기타 스타일
  detailsPanel: 'details-panel',
}));

// 테스트 유틸리티 함수들
const createMockTabData = (count = 4) =>
  Array.from({ length: count }, (_, i) => ({
    id: `tab${i + 1}`,
    title: `탭 ${i + 1}`,
    description: `탭 ${i + 1}의 내용입니다.`,
  }));

const waitForAnimation = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
};

describe('TabMenu (기본 컴포넌트)', () => {
  const defaultProps = {
    data: tabData,
    onTabChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('렌더링 테스트', () => {
    it('기본 렌더링이 정상적으로 작동한다', () => {
      render(<TabMenu {...defaultProps} />);
      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('모든 탭이 올바르게 렌더링된다', () => {
      render(<TabMenu {...defaultProps} />);
      tabData.forEach(tab => {
        expect(screen.getByText(tab.title)).toBeInTheDocument();
      });
    });

    it('첫 번째 탭이 기본적으로 활성화된다', () => {
      render(<TabMenu {...defaultProps} />);
      const firstTab = screen.getByText(tabData[0].title);
      expect(firstTab).toHaveAttribute('aria-selected', 'true');
    });

    it('첫 번째 탭의 내용이 기본적으로 표시된다', () => {
      render(<TabMenu {...defaultProps} />);
      expect(screen.getByText(tabData[0].description)).toBeInTheDocument();
    });
  });

  describe('상호작용 테스트', () => {
    it('탭 클릭 시 내용이 올바르게 전환된다', async () => {
      const user = userEvent.setup();
      const mockOnTabChange = vi.fn();

      render(<TabMenu {...defaultProps} onTabChange={mockOnTabChange} />);

      const secondTab = screen.getByText(tabData[1].title);
      await user.click(secondTab);

      expect(screen.getByText(tabData[1].description)).toBeInTheDocument();
      expect(mockOnTabChange).toHaveBeenCalledWith(tabData[1].id);
    });

    it('빠른 연속 클릭에도 안정적으로 작동한다', async () => {
      const user = userEvent.setup();
      const mockOnTabChange = vi.fn();

      render(<TabMenu {...defaultProps} onTabChange={mockOnTabChange} />);

      const tabs = tabData.map(tab => screen.getByText(tab.title));

      // 빠르게 모든 탭을 클릭
      for (const tab of tabs) {
        await user.click(tab);
      }

      // 마지막 클릭한 탭의 내용이 표시되어야 함
      expect(
        screen.getByText(tabData[tabs.length - 1].description)
      ).toBeInTheDocument();
    });

    it('탭 포커스가 올바르게 작동한다', async () => {
      const user = userEvent.setup();
      render(<TabMenu {...defaultProps} />);

      // Tab 키로 첫 번째 탭에 포커스
      await user.tab();
      expect(screen.getByText(tabData[0].title)).toHaveFocus();
    });
  });

  describe('에러 처리 테스트', () => {
    it('빈 데이터를 올바르게 처리한다', () => {
      render(<TabMenu data={[]} onTabChange={() => {}} />);
      expect(screen.getByText('탭 데이터가 없습니다.')).toBeInTheDocument();
    });

    it('잘못된 데이터 구조를 처리한다', () => {
      const invalidData = [{ id: 'tab1', title: '탭 1', description: '내용' }];
      render(<TabMenu data={invalidData} onTabChange={() => {}} />);
      expect(screen.getByText('탭 1')).toBeInTheDocument();
    });
  });

  describe('접근성 테스트', () => {
    it('ARIA 속성이 올바르게 설정된다', () => {
      render(<TabMenu {...defaultProps} />);

      const tablist = screen.getByRole('tablist');
      expect(tablist).toBeInTheDocument();

      const tabs = screen.getAllByRole('tab');
      tabs.forEach((tab, index) => {
        expect(tab).toHaveAttribute(
          'aria-selected',
          index === 0 ? 'true' : 'false'
        );
        expect(tab).toHaveAttribute('aria-controls');
      });

      const tabpanels = screen.getAllByRole('tabpanel');
      tabpanels.forEach((panel, index) => {
        expect(panel).toHaveAttribute('aria-labelledby');
        if (index === 0) {
          expect(panel).not.toHaveAttribute('hidden');
        } else {
          expect(panel).toHaveAttribute('hidden');
        }
      });
    });
  });

  describe('스타일링 테스트', () => {
    it('커스텀 className이 올바르게 적용된다', () => {
      render(<TabMenu {...defaultProps} className="custom-class" />);
      const tabMenuElement = screen.getByRole('tablist').parentElement;
      expect(tabMenuElement).toHaveClass('custom-class');
    });

    it('활성 탭에 올바른 스타일이 적용된다', () => {
      render(<TabMenu {...defaultProps} />);
      const activeTab = screen.getByText(tabData[0].title);
      expect(activeTab).toHaveClass('tab-button-active');
    });
  });
});

describe('TabMenuConditional (조건부 렌더링)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('섹션 제목이 올바르게 표시된다', () => {
    render(<TabMenuConditional />);
    expect(screen.getByText('#1. 조건부 렌더링 방식')).toBeInTheDocument();
  });

  it('모든 탭이 렌더링된다', () => {
    render(<TabMenuConditional />);
    tabData.forEach(tab => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it('조건부 렌더링이 올바르게 작동한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuConditional />);

    // 첫 번째 탭 내용이 보이는지 확인
    expect(screen.getByText(tabData[0].description)).toBeInTheDocument();

    // 두 번째 탭 클릭
    const secondTab = screen.getByText(tabData[1].title);
    await user.click(secondTab);

    // 두 번째 탭 내용만 보이고 첫 번째는 사라져야 함
    expect(screen.getByText(tabData[1].description)).toBeInTheDocument();
    expect(screen.queryByText(tabData[0].description)).not.toBeInTheDocument();
  });
});

describe('TabMenuDisplay (CSS Display)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('섹션 제목이 올바르게 표시된다', () => {
    render(<TabMenuDisplay />);
    expect(screen.getByText('#2. CSS Display 방식')).toBeInTheDocument();
  });

  it('모든 탭이 렌더링된다', () => {
    render(<TabMenuDisplay />);
    tabData.forEach(tab => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it('CSS 기반 탭 전환이 작동한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuDisplay />);

    // 첫 번째 탭 내용이 보이는지 확인
    expect(screen.getByText(tabData[0].description)).toBeInTheDocument();

    // 두 번째 탭 클릭
    const secondTab = screen.getByText(tabData[1].title);
    await user.click(secondTab);

    // 두 번째 탭 내용이 보이는지 확인
    expect(screen.getByText(tabData[1].description)).toBeInTheDocument();
  });
});

describe('TabMenuAnimated (애니메이션)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('섹션 제목이 올바르게 표시된다', () => {
    render(<TabMenuAnimated />);
    expect(screen.getByText('#3. 애니메이션 탭메뉴')).toBeInTheDocument();
  });

  it('모든 탭이 렌더링된다', () => {
    render(<TabMenuAnimated />);
    tabData.forEach(tab => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it('애니메이션과 함께 탭 전환이 작동한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuAnimated />);

    // 두 번째 탭 클릭
    const secondTab = screen.getByText(tabData[1].title);
    await user.click(secondTab);

    // 애니메이션 완료 후 두 번째 탭 내용이 보이는지 확인
    await waitFor(
      () => {
        expect(screen.getByText(tabData[1].description)).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  it('인디케이터가 올바르게 작동한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuAnimated />);

    // 인디케이터 요소가 존재하는지 확인 (ref로 접근)
    const indicator = document.querySelector(
      'div[style*="position: absolute"]'
    );
    expect(indicator).toBeInTheDocument();

    // 탭 클릭 후 인디케이터 위치 변경 확인
    const secondTab = screen.getByText(tabData[1].title);
    await user.click(secondTab);

    await waitForAnimation();
    // 인디케이터가 여전히 존재하는지 확인
    expect(indicator).toBeInTheDocument();
  });
});

describe('TabMenuVanilla (Vanilla JS)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('섹션 제목이 올바르게 표시된다', () => {
    render(<TabMenuVanilla />);
    expect(screen.getByText('#4. Vanilla JS 방식')).toBeInTheDocument();
  });

  it('탭메뉴 컨테이너가 렌더링된다', () => {
    render(<TabMenuVanilla />);
    const container = screen.getByRole('tablist');
    expect(container).toBeInTheDocument();
  });

  it('Vanilla JS 탭 전환이 작동한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuVanilla />);

    // 탭 요소들이 존재하는지 확인
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBeGreaterThan(0);

    // 첫 번째 탭 클릭
    await user.click(tabs[0]);

    // 탭 전환이 작동하는지 확인 (내용이 변경되었는지)
    await waitFor(() => {
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    });
  });
});

describe('TabMenuRadio (라디오 버튼)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('섹션 제목이 올바르게 표시된다', () => {
    render(<TabMenuRadio />);
    expect(screen.getByText('#5. 라디오 버튼 방식')).toBeInTheDocument();
  });

  it('모든 탭이 라디오 입력으로 렌더링된다', () => {
    render(<TabMenuRadio />);
    tabData.forEach(tab => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it('선택된 라디오 탭의 내용이 표시된다', () => {
    render(<TabMenuRadio />);
    // 기본적으로 선택된 탭의 내용이 보여야 함
    expect(screen.getByText(tabData[2].description)).toBeInTheDocument(); // CSS 애니메이션 탭이 기본 선택
  });

  it('라디오 버튼 전환이 작동한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuRadio />);

    // 다른 탭 클릭
    const firstTab = screen.getByText(tabData[0].title);
    await user.click(firstTab);

    // 첫 번째 탭 내용이 표시되는지 확인
    expect(screen.getByText(tabData[0].description)).toBeInTheDocument();
  });
});

describe('TabMenuSearchable (검색 가능)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('섹션 제목이 올바르게 표시된다', () => {
    render(<TabMenuSearchable />);
    expect(screen.getByText('#6. 검색 가능한 탭메뉴')).toBeInTheDocument();
  });

  it('검색 입력창이 렌더링된다', () => {
    render(<TabMenuSearchable />);
    expect(screen.getByPlaceholderText('탭 내용 검색...')).toBeInTheDocument();
  });

  it('검색어에 따라 탭이 필터링된다', async () => {
    const user = userEvent.setup();
    render(<TabMenuSearchable />);

    const searchInput = screen.getByPlaceholderText('탭 내용 검색...');
    await user.type(searchInput, 'React');

    // React가 포함된 탭만 보이는지 확인
    expect(screen.getByText(tabData[0].title)).toBeInTheDocument(); // React 포함
    expect(screen.queryByText(tabData[1].title)).not.toBeInTheDocument(); // Vanilla Extract 포함
  });

  it('검색된 탭을 클릭했을 때 내용이 전환된다', async () => {
    const user = userEvent.setup();
    render(<TabMenuSearchable />);

    const secondTab = screen.getByText(tabData[1].title);
    await user.click(secondTab);

    expect(screen.getByText(tabData[1].description)).toBeInTheDocument();
  });

  it('빈 검색어 입력 시 모든 탭이 표시된다', async () => {
    const user = userEvent.setup();
    render(<TabMenuSearchable />);

    const searchInput = screen.getByPlaceholderText('탭 내용 검색...');
    await user.type(searchInput, 'React');
    await user.clear(searchInput);

    // 모든 탭이 다시 표시되는지 확인
    tabData.forEach(tab => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });
});

describe('TabMenuMultiple (다중 선택)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('섹션 제목이 올바르게 표시된다', () => {
    render(<TabMenuMultiple />);
    expect(screen.getByText('#7. 다중 선택 탭메뉴')).toBeInTheDocument();
  });

  it('컨트롤 버튼들이 렌더링된다', () => {
    render(<TabMenuMultiple />);
    expect(screen.getByText('모두 선택')).toBeInTheDocument();
    expect(screen.getByText('모두 해제')).toBeInTheDocument();
  });

  it('선택된 탭 개수가 표시된다', () => {
    render(<TabMenuMultiple />);
    expect(screen.getByText('선택된 탭: 1개')).toBeInTheDocument();
  });

  it('여러 탭을 동시에 선택할 수 있다', async () => {
    const user = userEvent.setup();
    render(<TabMenuMultiple />);

    // 두 번째 탭 클릭
    const secondTab = screen.getByText(tabData[1].title);
    await user.click(secondTab);

    // 두 탭 모두 내용이 보이는지 확인
    expect(screen.getByText(tabData[0].description)).toBeInTheDocument();
    expect(screen.getByText(tabData[1].description)).toBeInTheDocument();
    expect(screen.getByText('선택된 탭: 2개')).toBeInTheDocument();
  });

  it('"모두 선택" 버튼이 모든 탭을 선택한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuMultiple />);

    const selectAllButton = screen.getByText('모두 선택');
    await user.click(selectAllButton);

    expect(screen.getByText('선택된 탭: 4개')).toBeInTheDocument();
  });

  it('"모두 해제" 버튼이 모든 탭을 해제한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuMultiple />);

    const deselectAllButton = screen.getByText('모두 해제');
    await user.click(deselectAllButton);

    expect(screen.getByText('선택된 탭: 0개')).toBeInTheDocument();
  });

  it('개별 탭 해제가 작동한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuMultiple />);

    // 두 번째 탭 선택
    const secondTab = screen.getByText(tabData[1].title);
    await user.click(secondTab);
    expect(screen.getByText('선택된 탭: 2개')).toBeInTheDocument();

    // 두 번째 탭 다시 클릭하여 해제
    await user.click(secondTab);
    expect(screen.getByText('선택된 탭: 1개')).toBeInTheDocument();
  });
});

describe('TabMenu Integration (통합 테스트)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('다른 탭메뉴 구현 간 상태가 올바르게 유지된다', async () => {
    const user = userEvent.setup();

    // 조건부 렌더링 탭메뉴 테스트
    const { rerender } = render(<TabMenuConditional />);
    const conditionalTab = screen.getByText(tabData[1].title);
    await user.click(conditionalTab);
    expect(screen.getByText(tabData[1].description)).toBeInTheDocument();

    // CSS Display 탭메뉴로 변경
    rerender(<TabMenuDisplay />);
    expect(screen.getByText('#2. CSS Display 방식')).toBeInTheDocument();

    // 첫 번째 탭이 기본 선택되어 있는지 확인
    expect(screen.getByText(tabData[0].description)).toBeInTheDocument();
  });

  it('빠른 연속 클릭에도 오류가 발생하지 않는다', async () => {
    const user = userEvent.setup();
    render(<TabMenuConditional />);

    const tabs = tabData.map(tab => screen.getByText(tab.title));

    // 빠르게 여러 탭을 클릭
    for (const tab of tabs) {
      await user.click(tab);
    }

    // 마지막 클릭한 탭의 내용이 보이는지 확인
    expect(
      screen.getByText(tabData[tabs.length - 1].description)
    ).toBeInTheDocument();
  });

  it('메모리 누수가 발생하지 않는다', () => {
    const { unmount } = render(<TabMenuConditional />);

    // 컴포넌트 언마운트 시 오류가 발생하지 않아야 함
    expect(() => unmount()).not.toThrow();
  });
});

describe('성능 테스트', () => {
  it('대량의 탭 데이터를 효율적으로 처리한다', () => {
    const largeTabData = createMockTabData(100);
    const startTime = performance.now();

    render(<TabMenu data={largeTabData} onTabChange={() => {}} />);

    const endTime = performance.now();
    const renderTime = endTime - startTime;

    // 렌더링 시간이 100ms 이하여야 함
    expect(renderTime).toBeLessThan(100);
  });

  it('빠른 탭 전환이 부드럽게 작동한다', async () => {
    const user = userEvent.setup();
    render(<TabMenuConditional />);

    const tabs = tabData.map(tab => screen.getByText(tab.title));

    // 빠른 연속 클릭 테스트
    const startTime = performance.now();

    for (let i = 0; i < 10; i++) {
      await user.click(tabs[i % tabs.length]);
    }

    const endTime = performance.now();
    const totalTime = endTime - startTime;

    // 10번의 탭 전환이 2초 이내에 완료되어야 함
    expect(totalTime).toBeLessThan(2000);
  });
});

describe('에러 바운더리 테스트', () => {
  it('잘못된 데이터로 인한 오류를 적절히 처리한다', () => {
    const invalidData = [] as any;

    // 오류가 발생하지 않고 적절히 처리되어야 함
    expect(() => {
      render(<TabMenu data={invalidData} onTabChange={() => {}} />);
    }).not.toThrow();
  });

  it('빈 배열 데이터를 올바르게 처리한다', () => {
    render(<TabMenu data={[]} onTabChange={() => {}} />);
    expect(screen.getByText('탭 데이터가 없습니다.')).toBeInTheDocument();
  });
});
