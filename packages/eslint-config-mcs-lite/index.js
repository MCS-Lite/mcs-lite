module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['prettier'],
  globals: {
    jest: true,
    describe: true,
    it: true,
    expect: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    // <div onClick={() => {}} />
    'jsx-a11y/no-static-element-interactions': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,

    // Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
