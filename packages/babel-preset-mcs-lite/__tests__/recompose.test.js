import * as babel from 'babel-core';
import mcsLitePreset from '../index';

const babelOptions = {
  presets: [mcsLitePreset],
  babelrc: false,
};

const compile = code => babel.transform(code, babelOptions).code;

it('should work with recompose as default', () => {
  expect(
    compile(
      `
import Rc from 'recompose';
console.log(Rc.withState);
  `,
    ),
  ).toMatchSnapshot();
});

it('should work with recompose', () => {
  expect(
    compile(
      `
import { withState } from 'recompose';
console.log(withState);
  `,
    ),
  ).toMatchSnapshot();
});

it('should work with recompose/createHelper', () => {
  expect(
    compile(
      `
import createHelper from 'recompose/createHelper';
console.log(createHelper);
  `,
    ),
  ).toMatchSnapshot();
});
