import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../useToggle';
import { useTheme } from '../useTheme';
import { useTabMenu, useMultiTabMenu } from '../useTabMenu';

describe('Hooks', () => {
  describe('useToggle', () => {
    it('초기값이 올바르게 설정되어야 함', () => {
      const { result } = renderHook(() => useToggle({ initialValue: false }));
      expect(result.current.isOpen).toBe(false);
    });

    it('toggle 함수가 상태를 변경해야 함', () => {
      const { result } = renderHook(() => useToggle({ initialValue: false }));

      act(() => {
        result.current.toggle();
      });
      expect(result.current.isOpen).toBe(true);

      act(() => {
        result.current.toggle();
      });
      expect(result.current.isOpen).toBe(false);
    });

    it('open 함수가 상태를 true로 설정해야 함', () => {
      const { result } = renderHook(() => useToggle({ initialValue: false }));

      act(() => {
        result.current.open();
      });
      expect(result.current.isOpen).toBe(true);
    });

    it('close 함수가 상태를 false로 설정해야 함', () => {
      const { result } = renderHook(() => useToggle({ initialValue: true }));

      act(() => {
        result.current.close();
      });
      expect(result.current.isOpen).toBe(false);
    });
  });

  describe('useTheme', () => {
    beforeEach(() => {
      // localStorage 모킹
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn(),
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

    it('기본 테마가 설정되어야 함', () => {
      const { result } = renderHook(() => useTheme());
      expect(result.current.theme).toBeDefined();
    });

    it('테마 변경이 올바르게 작동해야 함', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.theme).toBeDefined();
    });
  });

  describe('useTabMenu', () => {
    it('기본값으로 초기화되어야 함', () => {
      const { result } = renderHook(() => useTabMenu());
      expect(result.current.activeId).toBe('');
    });

    it('defaultActiveId로 초기화되어야 함', () => {
      const { result } = renderHook(() =>
        useTabMenu({ defaultActiveId: 'tab1' })
      );
      expect(result.current.activeId).toBe('tab1');
    });

    it('setActiveTab이 활성 탭을 변경해야 함', () => {
      const { result } = renderHook(() =>
        useTabMenu({ defaultActiveId: 'tab1' })
      );

      act(() => {
        result.current.setActiveTab('tab2');
      });

      expect(result.current.activeId).toBe('tab2');
    });

    it('onChange 콜백이 호출되어야 함', () => {
      const onChange = vi.fn();
      const { result } = renderHook(() => useTabMenu({ onChange }));

      act(() => {
        result.current.setActiveTab('tab2');
      });

      expect(onChange).toHaveBeenCalledWith('tab2');
    });

    it('isActive가 올바른 상태를 반환해야 함', () => {
      const { result } = renderHook(() =>
        useTabMenu({ defaultActiveId: 'tab1' })
      );

      expect(result.current.isActive('tab1')).toBe(true);
      expect(result.current.isActive('tab2')).toBe(false);

      act(() => {
        result.current.setActiveTab('tab2');
      });

      expect(result.current.isActive('tab1')).toBe(false);
      expect(result.current.isActive('tab2')).toBe(true);
    });

    it('onChange가 없어도 정상 작동해야 함', () => {
      const { result } = renderHook(() => useTabMenu());

      act(() => {
        result.current.setActiveTab('tab1');
      });

      expect(result.current.activeId).toBe('tab1');
    });
  });

  describe('useMultiTabMenu', () => {
    it('기본값으로 초기화되어야 함', () => {
      const { result } = renderHook(() => useMultiTabMenu());
      expect(result.current.activeIds).toEqual([]);
    });

    it('defaultActiveIds로 초기화되어야 함', () => {
      const { result } = renderHook(() =>
        useMultiTabMenu({ defaultActiveIds: ['tab1', 'tab2'] })
      );
      expect(result.current.activeIds).toEqual(['tab1', 'tab2']);
    });

    it('toggleTab이 탭을 토글해야 함', () => {
      const { result } = renderHook(() =>
        useMultiTabMenu({ defaultActiveIds: ['tab1'] })
      );

      act(() => {
        result.current.toggleTab('tab2');
      });

      expect(result.current.activeIds).toEqual(['tab1', 'tab2']);

      act(() => {
        result.current.toggleTab('tab1');
      });

      expect(result.current.activeIds).toEqual(['tab2']);
    });

    it('activateTab이 탭을 활성화해야 함', () => {
      const { result } = renderHook(() => useMultiTabMenu());

      act(() => {
        result.current.activateTab('tab1');
      });

      expect(result.current.activeIds).toEqual(['tab1']);

      act(() => {
        result.current.activateTab('tab1'); // 이미 활성화된 탭
      });

      expect(result.current.activeIds).toEqual(['tab1']); // 중복 추가되지 않음
    });

    it('deactivateTab이 탭을 비활성화해야 함', () => {
      const { result } = renderHook(() =>
        useMultiTabMenu({ defaultActiveIds: ['tab1', 'tab2'] })
      );

      act(() => {
        result.current.deactivateTab('tab1');
      });

      expect(result.current.activeIds).toEqual(['tab2']);
    });

    it('isActive가 올바른 상태를 반환해야 함', () => {
      const { result } = renderHook(() =>
        useMultiTabMenu({ defaultActiveIds: ['tab1'] })
      );

      expect(result.current.isActive('tab1')).toBe(true);
      expect(result.current.isActive('tab2')).toBe(false);
    });

    it('selectAll이 모든 탭을 선택해야 함', () => {
      const { result } = renderHook(() => useMultiTabMenu());

      act(() => {
        result.current.selectAll(['tab1', 'tab2', 'tab3']);
      });

      expect(result.current.activeIds).toEqual(['tab1', 'tab2', 'tab3']);
    });

    it('deselectAll이 모든 탭을 해제해야 함', () => {
      const { result } = renderHook(() =>
        useMultiTabMenu({ defaultActiveIds: ['tab1', 'tab2'] })
      );

      act(() => {
        result.current.deselectAll();
      });

      expect(result.current.activeIds).toEqual([]);
    });

    it('onChange 콜백이 모든 변경에 호출되어야 함', () => {
      const onChange = vi.fn();
      const { result } = renderHook(() => useMultiTabMenu({ onChange }));

      act(() => {
        result.current.toggleTab('tab1');
      });
      expect(onChange).toHaveBeenCalledWith(['tab1']);

      act(() => {
        result.current.activateTab('tab2');
      });
      expect(onChange).toHaveBeenCalledWith(['tab1', 'tab2']);

      act(() => {
        result.current.deactivateTab('tab1');
      });
      expect(onChange).toHaveBeenCalledWith(['tab2']);

      act(() => {
        result.current.selectAll(['tab3', 'tab4']);
      });
      expect(onChange).toHaveBeenCalledWith(['tab3', 'tab4']);

      act(() => {
        result.current.deselectAll();
      });
      expect(onChange).toHaveBeenCalledWith([]);
    });

    it('onChange가 없어도 정상 작동해야 함', () => {
      const { result } = renderHook(() => useMultiTabMenu());

      act(() => {
        result.current.toggleTab('tab1');
      });

      expect(result.current.activeIds).toEqual(['tab1']);
    });
  });
});
