'use strict';

module.exports = {
  extends: ['./plugins/node'].map(require.resolve),

  env: {
    browser: false,
    node: true,
    es6: true,
  },

  rules: {
    // ensure deprecated eslint rules are disabled
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'no-mixed-requires': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/import/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        mjs: 'always',
        js: 'never',
        ts: 'never',
      },
    ],
  },
};
