module.exports = {
  testURL: 'http://localhost/3000',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  modulePaths: ['<rootDir>/src/**'],
  moduleNameMapper: {
    '.css$': '<rootDir>/test/module-mock.js',
    '.scss$': '<rootDir>/test/module-mock.js',
    '.svg$': '<rootDir>/test/module-mock.js',
  },
  collectCoverageFrom: ['/src//*.js'],
  coverageThreshold: {
    global: {
      statements: 20,
      branches: 20,
      functions: 20,
      lines: 20,
    },
  },
};
