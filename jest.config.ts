import type { Config } from 'jest';

const config: Config = {
  // Using the Node test environment so tests run without requiring the
  // external "jest-environment-jsdom" package.
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/jest.transformer.js',
  },
};

export default config;
