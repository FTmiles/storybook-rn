import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Run cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
