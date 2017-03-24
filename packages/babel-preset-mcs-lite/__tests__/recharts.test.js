import * as babel from 'babel-core';
import mcsLitePreset from '../index';

const babelOptions = {
  presets: [mcsLitePreset],
  babelrc: false,
};

const compile = code => babel.transform(code, babelOptions).code;

it('should work with recharts', () => {
  expect(
    compile(
      `
import { AreaChart } from 'recharts';
console.log(AreaChart);
  `
    )
  ).toMatchSnapshot();
});
