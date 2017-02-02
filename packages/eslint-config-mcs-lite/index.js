module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  globals: {
    jest: true,
    describe: true,
    it: true,
    expect: true,
  },
  rules: {
    'react/prop-types': 0,
    'react/sort-comp': [
      2,
      {
        order: [
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'object-shorthand': [
      2,
      'always',
    ],
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
        arraysInObjects: false,
      },
    ],
    'react/jsx-curly-spacing': [
      2,
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/no-multi-comp': [
      2,
      {
        ignoreStateless: true,
      },
    ],
    'no-use-before-define': [
      2,
      'nofunc',
    ],
    'no-console': 2,
    'import/no-unresolved': 0,
    'global-require': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
        ],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'no-confusing-arrow': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
  },
};
