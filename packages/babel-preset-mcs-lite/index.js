const plugins = [
  require.resolve('babel-plugin-add-module-exports'),

  [
    require.resolve('babel-plugin-lodash'),
    {
      id: [
        'ramda',
        'mcs-lite-ui',
      ],
    },
  ],
];

// This is similar to how `env` works in Babel:
// https://babeljs.io/docs/usage/babelrc/#env-option
// We are not using `env` because it’s ignored in versions > babel-core@6.10.4:
// https://github.com/babel/babel/issues/4539
// https://github.com/facebookincubator/create-react-app/issues/720
// It’s also nice that we can enforce `NODE_ENV` being specified.
const env = process.env.BABEL_ENV || process.env.NODE_ENV;
if (env === 'production') {
  plugins.push.apply(plugins, [
    // minify styled-components css
    [
      require.resolve('babel-plugin-styled-components'),
      {
        ssr: false,
        displayName: false,
        transpileTemplateLiterals: false,
      },
    ],
  ]);
}

module.exports = {
  presets: [
    require.resolve('babel-preset-react'),
    require.resolve('babel-preset-latest'),
    require.resolve('babel-preset-stage-0'),
  ],
  plugins,
};
