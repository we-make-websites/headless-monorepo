/**
 * Specific eslint rules for this workspace, learn how to compose
 * @link https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const {
  getDefaultIgnorePatterns,
} = require('@we-make-websites/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@we-make-websites/eslint-config-bases/typescript',
    '@we-make-websites/eslint-config-bases/sonar',
    '@we-make-websites/eslint-config-bases/regexp',
    '@we-make-websites/eslint-config-bases/jest',
    // Apply prettier and disable incompatible rules
    '@we-make-websites/eslint-config-bases/prettier',
  ],
  rules: {
    // optional overrides per project
  },
  overrides: [
    // optional overrides per project file match
  ],
};
