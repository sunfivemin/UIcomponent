import { describe, it, expect } from 'vitest';
import { debounce, throttle, deepClone, formatDate } from '../utils';

describe('Utils', () => {
  describe('debounce', () => {
    it('함수가 지연되어 실행되어야 함', async () => {
      let count = 0;
      const debouncedFn = debounce(() => {
        count++;
      }, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      expect(count).toBe(0);

      await new Promise(resolve => setTimeout(resolve, 150));
      expect(count).toBe(1);
    });

    it('지연 시간 내에 다시 호출되면 실행이 취소되어야 함', async () => {
      let count = 0;
      const debouncedFn = debounce(() => {
        count++;
      }, 100);

      debouncedFn();
      await new Promise(resolve => setTimeout(resolve, 50));
      debouncedFn();
      await new Promise(resolve => setTimeout(resolve, 150));

      expect(count).toBe(1);
    });
  });

  describe('throttle', () => {
    it('함수가 제한된 빈도로 실행되어야 함', async () => {
      let count = 0;
      const throttledFn = throttle(() => {
        count++;
      }, 100);

      throttledFn();
      throttledFn();
      throttledFn();

      expect(count).toBe(1);

      await new Promise(resolve => setTimeout(resolve, 150));
      throttledFn();
      expect(count).toBe(2);
    });
  });

  describe('deepClone', () => {
    it('깊은 복사가 올바르게 되어야 함', () => {
      const original = {
        a: 1,
        b: { c: 2, d: [3, 4, { e: 5 }] },
        f: null,
        g: undefined,
      };

      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned.b).not.toBe(original.b);
      expect(cloned.b.d).not.toBe(original.b.d);
    });

    it('원시값을 올바르게 처리해야 함', () => {
      expect(deepClone(42)).toBe(42);
      expect(deepClone('test')).toBe('test');
      expect(deepClone(true)).toBe(true);
      expect(deepClone(null)).toBe(null);
      expect(deepClone(undefined)).toBe(undefined);
    });

    it('배열을 올바르게 복사해야 함', () => {
      const original = [1, [2, 3], { a: 4 }];
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned[1]).not.toBe(original[1]);
      expect(cloned[2]).not.toBe(original[2]);
    });
  });

  describe('formatDate', () => {
    it('날짜가 올바른 형식으로 포맷되어야 함', () => {
      const date = new Date('2023-12-25T10:30:00');
      const formatted = formatDate(date);

      expect(formatted).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(formatted).toBe('2023-12-25');
    });

    it('현재 날짜가 올바르게 포맷되어야 함', () => {
      const now = new Date();
      const formatted = formatDate(now);

      expect(formatted).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });
});
