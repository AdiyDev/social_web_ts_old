module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/button-has-type': 'off',
    'no-debugger': 'warn',
    'no-alert': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  plugins: ['react', 'prettier']
};
