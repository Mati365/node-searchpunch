const {resolve} = require('path');

const SHARED_CONFIG = {
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist/*',
  ],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  projects: [
    {
      displayName: 'union-struct',
      rootDir: resolve(__dirname, '../tests/'),
      ...SHARED_CONFIG,
    },
  ],
};
