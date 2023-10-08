/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': 'error',
    semi: 'error',
    quotes: ['error', 'single', { avoidEscape: false }],
    'vue/html-quotes': ['error', 'single', { avoidEscape: false }]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
