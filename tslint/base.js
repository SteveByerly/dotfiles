const path = require('path');

const microsoft = require.resolve('tslint-microsoft-contrib');

module.exports = {
  extends: [
    'tslint:latest',
    'tslint-eslint-rules',
    'tslint-consistent-codestyle',
    './rules/codestyle.js',
    './rules/eslint.js',
    './rules/functionality.js',
    './rules/maintainability.js',
    './rules/microsoft.js',
    './rules/react.js',
    './rules/style.js',
    './rules/typescript.js',
  ],
  rulesDirectory: [
    path.dirname(microsoft),
  ],
};
