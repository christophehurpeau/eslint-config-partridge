module.exports = {
  extends: [
    'eslint-config-airbnb',
    './settings/globals',
    './settings/prettier',
    './settings/react',
    './rules/code-quality',
    './rules/style',
    './rules/expert',
    './rules/babel',
    './rules/react',
  ].map(require.resolve),
  parser: 'babel-eslint',
};
