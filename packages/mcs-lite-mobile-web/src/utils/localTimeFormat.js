import R from 'ramda';
import fromTime from 'date-fp/build/fromTime';
import localFormat from './localFormat';

const localTimeFormat = R.pipe(
  fromTime,
  localFormat('YYYY-MM-DD HH:mm'),
);

export default localTimeFormat;
