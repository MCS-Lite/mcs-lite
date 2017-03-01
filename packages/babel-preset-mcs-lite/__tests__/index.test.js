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

it('should work with mcs-lite-icon', () => {
  expect(compile(`
import { Icon } from 'mcs-lite-icon';
console.log(Icon);
  `)).toMatchSnapshot();
});

it('should work with mcs-lite-icon/lib', () => {
  expect(compile(`
import Icon from 'mcs-lite-icon/lib/Icon';
console.log(Icon);
  `)).toMatchSnapshot();
});

it('should work with mcs-lite-ui', () => {
  expect(compile(`
import { Button } from 'mcs-lite-ui';
console.log(Button);
  `)).toMatchSnapshot();
});

it('should work with mcs-lite-ui/lib', () => {
  expect(compile(`
import Button from 'mcs-lite-ui/lib/Button';
console.log(Button);
  `)).toMatchSnapshot();
});
