import R from 'ramda';

const isNotEmpty = R.complement(R.isEmpty);
const notEquals = R.complement(R.equals);

const isNotEqual = (new1, new2) => isNotEmpty(new1) && isNotEmpty(new2)
  && notEquals(new1, new2);

const isLt8 = string => isNotEmpty(string)
  && string.length < 8;

export default {
  isNotEqual,
  isLt8,
};
