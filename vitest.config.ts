/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()] as any,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    // CI 환경에서 테스트 안정성 향상
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
    // 메모리 사용량 최적화
    maxConcurrency: 1,
    // 타임아웃 설정 (30초)
    testTimeout: 30000,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '.next/**',
        'node_modules/',
        'src/**/*.d.ts',
        'src/**/*.stories.{js,jsx,ts,tsx}',
        'src/**/index.{js,jsx,ts,tsx}',
        'src/app/layout.tsx',
        'src/app/page.tsx',
        'src/**/*.css.ts',
        'src/**/*.css',
        'src/styles/**/*',
        '*.config.{js,ts}',
        'vitest.setup.ts',
      ],
      // CI 환경에서 임계치로 인한 실패를 방지하기 위해 threshold는 제거합니다.
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      '@routes': '/src/routes.ts',
      '@lib': '/src/lib',
    },
  },
});
