module.exports = {
  root: false,
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: './tsconfig.json',
  //   tsconfigRootDir: __dirname,
  // },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  env: {
    'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',

    'eol-last': ['error', 'always'],
    'indent': ['warn', 2],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': ['error'],

    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],

    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['error'],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],

    // ----------------------------------------------------
    // Tests
    // ----------------------------------------------------
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/expect-expect': ['error', { assertFunctionNames: ['expect'] }],
    'jest/no-conditional-expect': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/prefer-expect-assertions': ['error', { onlyFunctionsWithAsyncKeyword: true }],
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
  },
  overrides: [
    {
      files: ['**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      }
    }
  ],
};
