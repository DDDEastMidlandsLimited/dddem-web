module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.(test|spec).(js)', '**/__tests__/**/*.(js)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/out/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
