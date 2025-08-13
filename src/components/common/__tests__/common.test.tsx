import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { vi } from 'vitest';
import VanillaWrapper from '../vanillaWrapper';
import ThemeToggle from '../../ThemeToggle';

// Next.js router 모킹
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
    };
  },
  usePathname() {
    return '/test';
  },
}));

describe('Common Components', () => {
  afterEach(() => {
    cleanup();
  });

  describe('VanillaWrapper', () => {
    it('기본 렌더링이 올바르게 되어야 함', () => {
      const mockInitiator = vi.fn();

      render(
        <VanillaWrapper
          title="테스트 래퍼"
          initiator={mockInitiator}
          className="test-class"
        />
      );

      expect(screen.getByText('⚡')).toBeInTheDocument();
      expect(screen.getByText('테스트 래퍼')).toBeInTheDocument();
      expect(screen.getByText('⚡')).toBeInTheDocument();
    });

    it('initiator 함수가 호출되어야 함', () => {
      const mockInitiator = vi.fn();

      render(<VanillaWrapper title="테스트" initiator={mockInitiator} />);

      expect(mockInitiator).toHaveBeenCalled();
    });

    it('사용자 정의 클래스가 적용되어야 함', () => {
      const mockInitiator = vi.fn();

      const { container } = render(
        <VanillaWrapper
          title="테스트"
          initiator={mockInitiator}
          className="custom-class"
        />
      );

      const wrapper = container.querySelector('.custom-class');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('ThemeToggle', () => {
    beforeEach(() => {
      // localStorage 모킹
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn(() => 'dark'), // 초기값을 dark로 설정
          setItem: vi.fn(),
          removeItem: vi.fn(),
        },
        writable: true,
      });

      // document.documentElement 모킹
      Object.defineProperty(document, 'documentElement', {
        value: {
          setAttribute: vi.fn(),
          removeAttribute: vi.fn(),
        },
        writable: true,
      });
    });

    it('테마 토글 버튼이 렌더링되어야 함', () => {
      render(<ThemeToggle />);
      const button = screen.getByLabelText('Switch to light theme');
      expect(button).toBeInTheDocument();
    });

    it('현재 테마에 따라 올바른 아이콘이 표시되어야 함', () => {
      render(<ThemeToggle />);
      const button = screen.getByLabelText('Switch to light theme');
      expect(button).toHaveTextContent('☀️'); // dark 테마일 때는 ☀️ (light로 변경)
    });

    it('테마 변경 시 아이콘이 변경되어야 함', async () => {
      render(<ThemeToggle />);
      const button = screen.getByLabelText('Switch to light theme');

      // 초기에는 dark 테마 (☀️ 아이콘)
      expect(button).toHaveTextContent('☀️');

      // 클릭하여 light 테마로 변경
      fireEvent.click(button);
      expect(button).toHaveTextContent('🌙'); // light 테마일 때는 🌙 (dark로 변경)
    });
  });
});
