import * as babel from 'babel-core';
import mcsLitePreset from '../index';

const babelOptions = {
  presets: [mcsLitePreset],
  babelrc: false,
};

const compile = code => babel.transform(code, babelOptions).code;

it('should work with ramda', () => {
  expect(compile(`
import R from 'ramda';
console.log(R.pipe);
  `)).toMatchSnapshot();
});

it('should work with ramda/src', () => {
  expect(compile(`
import pipe from 'ramda/src/pipe';
console.log(pipe);
  `)).toMatchSnapshot();
});
