import { getJestProjectsAsync } from '@nx/jest';

export default async () => ({
  automock: true,
  bail: 1,
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  errorOnDeprecated: true,
  globals: { // add global variables here that need to be used in all test environments
    __DEV__: true,
  },
  maxConcurrency: 5,
  maxWorkers: '50%',
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  slowTestThreshold: 1,
  testTimeout: 2000,
  projects: await getJestProjectsAsync(),
});
