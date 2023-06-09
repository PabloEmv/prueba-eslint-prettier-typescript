module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn' /* este error nos indica que no se está utilizando lávariable */,
    'react/react-in-jsx-scope': 'off' /* este error se debe a que no se está importando react */,
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/indent': 'off'
  }
}
