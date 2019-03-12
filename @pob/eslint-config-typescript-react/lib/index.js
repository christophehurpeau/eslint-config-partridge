'use strict';

module.exports = {
  extends: ['@pob/eslint-config-react'].map(require.resolve),

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        mjs: 'never',
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['tsx'] }],

    // override js config for babel plugin react-require
    'react/react-in-jsx-scope': 'error',
  },
};
