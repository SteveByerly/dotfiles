module.exports = {
  rules: {
    eofline: true,
    indent: [true, 'spaces'],
    'linebreak-style': [true, 'LF'],
    'max-classes-per-file': [true, 4],
    'max-line-length': {
      options: 140,
      severity: 'warning',
    },
    'no-default-export': true,
    'no-require-imports': true,
    'no-trailing-whitespace': true,
    'object-literal-sort-keys': true,
    'prefer-const': true,
    'trailing-comma': [true, {
      multiline: 'always',
      singleline: 'never',
    }],
  },
};
