module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'arrow-parens': 0,
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'generator-star-spacing': 0,
    'space-before-function-paren': 0,
    'one-var': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

