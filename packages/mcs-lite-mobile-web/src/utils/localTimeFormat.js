import R from 'ramda';
import format from 'date-fp/build/format';
import fromTime from 'date-fp/build/fromTime';
import local from './local';

const localTimeFormat = R.pipe(
  fromTime,
  local,
  format('YYYY-MM-DD HH:mm'),
);

export default localTimeFormat;
