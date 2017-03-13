import R from 'ramda';
import format from 'date-fp/build/format';
import local from './local';

const localTimeFormat = R.pipe(
  local,
  format('YYYY-MM-DD HH:mm'),
);

export default localTimeFormat;
