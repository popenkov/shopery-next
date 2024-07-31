/** @type {import('jest').Config} */

import path from 'path';

import type { Config } from 'jest';

const config: Config = {
  // todo
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.jsx', '!src/api.js'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  rootDir: '../../../../',
  setupFilesAfterEnv: ['<rootDir>/src/app/configs/jest/setupTests.ts'],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
    '/node_modules/(?!test-component).+\\.ts$',
    'node_modules/(?!(swiper|ssr-window|dom7)/)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': ['jest-transform-css', { modules: true }],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^@/(.*)$': '<rootDir>/src/$1',
    'swiper/css': '<rootDir>/node_modules/swiper/swiper.min.css',
  },
  moduleDirectories: ['node_modules', '<rootDir>/node_modules'],
  modulePaths: ['<rootDir>src'],
  // transformIgnorePatterns: ['<rootDir>/node_modules'],

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
};

export default config;
