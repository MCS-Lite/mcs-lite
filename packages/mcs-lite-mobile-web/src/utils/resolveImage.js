// @flow
import * as R from 'ramda';

type Func = (string, string) => string;

const resolveImage: Func = (defaultImage, path) =>
  R.cond([
    [R.anyPass([R.isEmpty, R.isNil]), R.always(defaultImage)],
    [R.T, R.concat('/images/')],
  ])(path);

export default resolveImage;
