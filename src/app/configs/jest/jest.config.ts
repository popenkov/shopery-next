/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import path from 'path';

import nextJest from 'next/jest.js';
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../../../../tsconfig.json');
import { defaults } from 'jest-config';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '../../../../',
});

const config: Config = {
  verbose: true,
  // automock: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: [
    // ...defaults.moduleFileExtensions,
    'js',
    'jsx',
    'ts',
    'tsx',
    // 'json',
    // 'node',
  ],
  // extensionsToTreatAsEsm: ['.ts', '.tsx'],

  rootDir: '../../../../',
  moduleDirectories: ['node_modules', '<rootDir>/node_modules'],
  modulePaths: ['<rootDir>src'],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/app/configs/jest/setupTests.ts'],
  // transform: {
  //   // '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  //   '^.+\\.(ts|tsx|js)$': 'babel-jest', // this is probably something you already had, if using ts-jest, it's probably fine to leave as ts-jest
  //   '^.+\\.(css)$': '<rootDir>/src/app/configs/jest/fileTransform.js', // add this to fix css import issues
  //   // '^.+\\.(css)$': 'jest-transform-css',
  // },
  transform: {
    '^.+\\.css$': ['jest-transform-css', { modules: true }],
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  // transformIgnorePatterns: [
  //   '<rootDir>/node_modules/',
  //   '^.+\\.module\\.(css|sass|scss)$',
  //   '/node_modules/(?!test-component).+\\.ts$',
  //   'node_modules/(?!(swiper|ssr-window|dom7)/)',
  // ],
  transformIgnorePatterns: ['node_modules/(?!swiper|ssr-window|dom7)'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^@/(.*)$': '<rootDir>/src/$1',
    // '@/widgets/(.*)': '<rootDir>/src/widgets/$1',
    // '@/shared/(.*)': '<rootDir>/src/shared/$1',
    // '@/features/(.*)': '<rootDir>/src/features/$1',
    // '@/app/(.*)': '<rootDir>/src/app/$1',
    // '@/entities/(.*)': '<rootDir>/src/entities/$1',
    // 'swiper/react': 'swiper/swiper.min.js',
    'swiper/css': '<rootDir>/node_modules/swiper/swiper.min.css',
    // 'swiper/css': 'swiper/swiper.min.css',
  },
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        // openReport: true,
        inlineSource: true,
      },
    ],
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

// export default createJestConfig(config);
export default config;
