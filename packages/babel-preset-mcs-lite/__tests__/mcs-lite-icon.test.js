import * as babel from 'babel-core';
import mcsLitePreset from '../index';

const babelOptions = {
  presets: [mcsLitePreset],
  babelrc: false,
};

const compile = code => babel.transform(code, babelOptions).code;

it('should work with mcs-lite-icon', () => {
  expect(
    compile(
      `
import { Icon } from 'mcs-lite-icon';
console.log(Icon);
  `,
    ),
  ).toMatchSnapshot();
});

it('should work with mcs-lite-icon/lib', () => {
  expect(
    compile(
      `
import Icon from 'mcs-lite-icon/lib/Icon';
console.log(Icon);
  `,
    ),
  ).toMatchSnapshot();
});
