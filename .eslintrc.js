module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {},
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    // 'plugin:vue/recommended',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-unused-labels': 1,
    'linebreak-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 2,
    'vue/singleline-html-element-content-newline': 0,
  },
};
