module.exports = {
  rules: {
    // Errors
    // ------

    // disallow use of constant expressions in conditions
    'no-constant-condition': true,
    // disallow control characters in regular expressions
    'no-control-regex': true,
    // disallow a duplicate case label.
    'no-duplicate-case': true,
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': true,
    // disallow assigning to the exception in a catch block
    'no-ex-assign': true,
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': true,
    // disallow unnecessary semicolons
    'no-extra-semi': true,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': true,
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': true,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': true,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': true,
    // disallow sparse arrays
    'no-sparse-arrays': true,
    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': true,
    // disallow comparisons with the value NaN
    'use-isnan': true,
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': true,

    // Best Practices
    // --------------

    // disallow use of multiple spaces
    'no-multi-spaces': 'error',

    // Style
    // --------------

    // enforce spacing inside array brackets
    'array-bracket-spacing': [true, 'never'],
    // enforce spacing inside single-line blocks
    'block-spacing': [true, 'always'],
    // enforce one true brace style
    'brace-style': [true, '1tbs', { allowSingleLine: true }],
    // this option sets a specific tab width for your code
    // 'ter-indent': [true, 2],
    // require or disallow spaces inside parentheses
    'space-in-parens': [true, 'never'],

    // ES6
    // --------------

    // enforces no braces where they can be omitted
    'ter-arrow-body-style': [true, 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    // require parens in arrow function arguments
    'ter-arrow-parens': [true, 'as-needed', {
      requireForBlockBody: true,
    }],
    // require space before/after arrow function's arrow
    'ter-arrow-spacing': [true, {
      before: true,
      after: true,
    }],
    // suggest using arrow functions as callbacks
    'ter-prefer-arrow-callback': true,
  },
};
