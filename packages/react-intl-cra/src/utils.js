import * as babel from 'babel-core';

const babelOptions = {
  presets: ['babel-preset-react-app'],
  plugins: ['babel-plugin-react-intl'],
};
babelOptions.babelrc = false;

const compile = code => babel.transform(code, babelOptions).metadata['react-intl'].messages;

export default {
  compile,
};
