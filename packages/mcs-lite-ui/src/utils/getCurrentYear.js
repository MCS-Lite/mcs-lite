// @flow

import R from 'ramda';

type Fn = () => number;

const getCurrentYear: Fn = R.once(() => new Date().getFullYear());

export default getCurrentYear;
