module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: '@pancakeswap-libs/eslint-config-pancake',
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
  },
};
