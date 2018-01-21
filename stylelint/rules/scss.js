module.exports = {
  rules: {
    // @-else
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',

    // @-extend
    'scss/at-extend-no-missing-placeholder': true,

    // @-function
    'scss/at-function-pattern': '^([a-z][a-z]*)(-[a-z]+)*$',

    // @-if
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // @-import
    'scss/at-import-no-partial-leading-underscore': true,

    // @-mixin
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': '^_([a-z][a-z]*)(-[a-z]+)*$',

    // $-variable
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',

    // Disable until this is implemented
    // https://github.com/kristerkari/stylelint-scss/issues/94
    // 'scss/dollar-variable-empty-line-before': ['never', {
    //   ignore: ['after-comment'],
    // }],

    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',

    // %-placeholder
    'scss/percent-placeholder-pattern': '^([a-z][a-z]*)(-[a-z]+)*$',

    // //-comment
    'scss/double-slash-comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['between-comments', 'stylelint-commands'],
    }],
    'scss/double-slash-comment-inline': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',

    // Declaration
    'scss/declaration-nested-properties-no-divided-groups': true,

    // Media feature
    'scss/media-feature-value-dollar-variable': 'always',

    // Operator
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,

    // Partial
    'scss/partial-no-import': true,

    // Selector
  },
};
