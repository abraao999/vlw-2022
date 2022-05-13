module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/button-has-type': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
  },
};
