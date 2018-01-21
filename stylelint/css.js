module.exports = {
  extends: [
    'stylelint-config-standard',
    './rules/color',
    './rules/font',
    './rules/order',
    './rules/selector',
    './rules/sheet',
    './rules/syntax',
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    // Declarations
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
