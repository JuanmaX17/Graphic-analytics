module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint-config-prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/prop-types': 0,
  },
};
