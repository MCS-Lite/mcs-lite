// @flow
import R from 'ramda';

type Fun = (any) => boolean

const isString: Fun = R.is(String);

export default isString;
