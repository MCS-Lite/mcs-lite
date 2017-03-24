import R from 'ramda';

const resolveImage = (defaultImage, path) =>
  R.cond([
    [R.anyPass([R.isEmpty, R.isNil]), R.always(defaultImage)],
    [R.T, R.concat('/images/')],
  ])(path);

export default resolveImage;
