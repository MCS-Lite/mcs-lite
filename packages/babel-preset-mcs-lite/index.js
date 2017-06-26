const env = process.env.BABEL_ENV || process.env.NODE_ENV;

module.exports = {
  presets: [
    require.resolve('babel-preset-react-app'),
    require.resolve('babel-preset-stage-0'),
    // TODO: Override react-app 'modules', we need to transform to CJS.
    [
      require.resolve('babel-preset-env'),
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    require.resolve('babel-plugin-add-module-exports'),

    // Minify styled-components css
    [
      require.resolve('babel-plugin-styled-components'),
      {
        // Better debugging
        displayName: env !== 'production' || env === 'test',

        // Only necessary if you're server-side renderin
        ssr: false,
        minify: false, // TODO: CI snapshot testing problem
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
