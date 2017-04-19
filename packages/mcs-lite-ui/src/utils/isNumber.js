// @flow
import R from 'ramda';

type Fun = any => boolean;

const isNumber: Fun = R.is(Number);

export default isNumber;
