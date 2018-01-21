const path = require('path');

const tslintReact = require.resolve('tslint-react');

module.exports = {
  extends: [
    'tslint-react',
    './base',
  ],
  rulesDirectory: [
    path.join(path.dirname(tslintReact), 'rules'),
  ],
};
