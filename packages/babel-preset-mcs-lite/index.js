module.exports = {
  presets: [
    require.resolve('babel-preset-react-app'),
    require.resolve('babel-preset-stage-0'),
  ],
  plugins: [
    require.resolve('babel-plugin-add-module-exports'),

    // Minify styled-components css
    [
      require.resolve('babel-plugin-styled-components'),
      {
        // TODO: withConfig problem
        displayName: false,

        // Only necessary if you're server-side renderin
        ssr: false,
        minify: true, // TODO: CI snapshot testing problem
        transpileTemplateLiterals: false,
      },
    ],

    // Optimize bundle size
    require.resolve('babel-plugin-recharts'),
    [
      require.resolve('babel-plugin-import'),
      [
        {
          libraryName: 'mcs-lite-icon',
          libraryDirectory: 'lib', // default: lib
          camel2DashComponentName: false, // default: true
        },
        {
          libraryName: 'mcs-lite-ui',
          libraryDirectory: 'lib', // default: lib
          camel2DashComponentName: false, // default: true
        },
        {
          libraryName: 'ramda',
          libraryDirectory: 'src', // default: lib
          camel2DashComponentName: false, // default: true
        },
        {
          libraryName: 'recompose',
          libraryDirectory: '/', // default: lib
          camel2DashComponentName: false, // default: true
        },
      ],
    ],
  ],
};
