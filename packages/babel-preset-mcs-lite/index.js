module.exports = {
  presets: [
    require.resolve('babel-preset-react'),
    require.resolve('babel-preset-latest'),
    require.resolve('babel-preset-stage-0'),
  ],
  plugins: [
    require.resolve('babel-plugin-add-module-exports'),

    // minify styled-components css
    [
      require.resolve('babel-plugin-styled-components'),
      {
        ssr: false,
        displayName: false,
        transpileTemplateLiterals: false,
      },
    ],

    [
      require.resolve('babel-plugin-lodash'),
      {
        id: [
          'ramda',
          'mcs-lite-ui',
        ],
      },
    ],
  ],
};
