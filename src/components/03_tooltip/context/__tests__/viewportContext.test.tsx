import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ViewportContextProvider, { DefaultRect } from '../viewportContext';

// Mock useSyncExternalStore
vi.mock('react', async () => {
  const actual = await vi.importActual('react');
  return {
    ...actual,
    useSyncExternalStore: vi.fn((subscribe, getSnapshot, getServerSnapshot) => {
      // getServerSnapshot이 매번 같은 참조를 반환하는지 테스트
      const serverSnapshot1 = getServerSnapshot();
      const serverSnapshot2 = getServerSnapshot();

      // 같은 참조여야 함 (경고 방지)
      expect(serverSnapshot1).toBe(serverSnapshot2);

      return getSnapshot();
    }),
  };
});

describe('ViewportContextProvider', () => {
  it('getServerSnapshot이 항상 같은 참조를 반환해야 함', () => {
    // 이 테스트가 통과하면 경고가 발생하지 않음
    render(
      <ViewportContextProvider>
        <div>Test Content</div>
      </ViewportContextProvider>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('DefaultRect 상수가 올바른 값을 가져야 함', () => {
    expect(DefaultRect).toEqual({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      scrollHeight: 0,
    });
  });
});
