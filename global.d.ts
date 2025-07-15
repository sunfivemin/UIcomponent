/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

declare module "*.md";

// Import jest-dom types to extend Vitest's expect
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends TestingLibraryMatchers<T, void> {}
  }
}

export {};
