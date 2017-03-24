import R from 'ramda';

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
