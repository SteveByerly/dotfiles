module.exports = {
  rules: {
    'array-type': [true, 'array'],
    // Prefer the eslint rules for this
    'arrow-parens': false,
    'arrow-return-shorthand': [true, 'multiline'],
    'import-spacing': true,
    'interface-name': [
      true,
      'never-prefix',
    ],
    'no-angle-bracket-type-assertion': true,
    'no-reference-import': true,
    'no-unnecessary-callback-wrapper': true,
    'object-curly-spacing': [
      true,
      'always',
    ],
    'object-literal-key-quotes': [
      true,
      'as-needed',
    ],
    'object-literal-shorthand': true,
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'case-insensitive',
        'named-imports-order': 'lowercase-first',
      },
    ],
    'prefer-method-signature': true,
    'prefer-template': true,
    quotemark: [true, 'single', 'jsx-double', 'avoid-escape'],
    semicolon: true,
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-leading-underscore',
      'allow-pascal-case'
    ]
  },
};
