import * as babel from 'babel-core';
import mcsLitePreset from '../index';

const babelOptions = {
  presets: [mcsLitePreset],
  babelrc: false,
};

const compile = code => babel.transform(code, babelOptions).code;

it('should work with mcs-lite-ui', () => {
  expect(
    compile(
      `
import { Button } from 'mcs-lite-ui';
console.log(Button);
  `
    )
  ).toMatchSnapshot();
});

it('should work with mcs-lite-ui/lib', () => {
  expect(
    compile(
      `
import Button from 'mcs-lite-ui/lib/Button';
console.log(Button);
  `
    )
  ).toMatchSnapshot();
});
