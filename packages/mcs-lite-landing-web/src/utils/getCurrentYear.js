import R from 'ramda';

const getCurrentYear = R.once(() => new Date().getFullYear());

export default getCurrentYear;
