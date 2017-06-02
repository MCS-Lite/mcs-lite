// @flow
import R from 'ramda';
import { darken1, darken2, darken3 } from 'mcs-lite-theme';

const SMALL = 'small';
const DEFAULT = 'default';

export const width = R.cond([
  [R.propEq('block', true), R.always('100%')],
  [
    R.anyPass([R.propEq('square', true), R.propEq('round', true)]),
    R.path(['theme', 'height', 'normal']),
  ],
  [R.T, R.always('initial')],
]);

export const minWidth = R.cond([
  [
    R.anyPass([
      R.propEq('block', true),
      R.propEq('square', true),
      R.propEq('round', true),
    ]),
    R.always('initial'),
  ],
  [R.propEq('size', SMALL), R.always('40px')],
  [R.T, R.always('80px')],
]);

export const borderRadius = R.cond([
  [R.propEq('round', true), R.always('50%')],
  [R.T, R.always('3px')],
]);

export const padding = R.cond([
  [
    R.anyPass([R.propEq('square', true), R.propEq('round', true)]),
    R.always('0'),
  ],
  [R.propEq('size', SMALL), R.always('0 5px')],
  [R.T, R.always('6px 15px')],
]);

export const fontSize = R.cond([
  [R.propEq('size', SMALL), R.path(['theme', 'fontSize', 'small'])],
  [R.T, R.path(['theme', 'fontSize', 'p'])],
]);

export const color = R.cond([
  [R.propEq('kind', DEFAULT), R.path(['theme', 'color', 'grayBase'])],
  [R.T, R.path(['theme', 'color', 'white'])],
]);

export const backgroundColor = R.cond([
  [R.propEq('active', true), props => darken2(props.theme.color[props.kind])],
  [R.propEq('disabled', true), R.path(['theme', 'color', 'grayDark'])],
  [R.T, props => props.theme.color[props.kind]],
]);

export const hoverBackgroundColor = R.cond([
  [R.propEq('disabled', true), R.path(['theme', 'color', 'grayDark'])],
  [R.T, props => darken1(props.theme.color[props.kind])],
]);

export const activeBackgroundColor = R.cond([
  [R.propEq('disabled', true), R.path(['theme', 'color', 'grayDark'])],
  [R.T, props => darken2(props.theme.color[props.kind])],
]);

export const borderColor = R.cond([
  [R.propEq('disabled', true), props => darken3(props.theme.color.grayDark)],
  [R.T, props => darken3(props.theme.color[props.kind])],
]);
