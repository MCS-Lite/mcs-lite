import R from 'ramda';
import sub from 'date-fp/build/sub';
import format from 'date-fp/build/format';

// Remind: Create an Date object to get local timezone.
const timezoneOffset = new Date().getTimezoneOffset();
let local = sub('minutes', timezoneOffset); // eslint-disable-line

// Remind: Use default timezone behavior of date-fp@5 (+0) .
if (process.env.NODE_ENV === 'test') {
  local = R.identity;
}

const localFormat = R.curry((string, date) => R.pipe(
  local,
  format(string),
)(date));


export default localFormat;
