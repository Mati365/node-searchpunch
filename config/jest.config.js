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
      displayName: 'searchpunk-core',
      rootDir: resolve(__dirname, '../packages/searchpunch-core/tests/'),
      ...SHARED_CONFIG,
    },
    {
      displayName: 'searchpunk-typeorm-driver',
      rootDir: resolve(__dirname, '../packages/searchpunch-typeorm-driver/tests/'),
      ...SHARED_CONFIG,
    },
  ],
};
