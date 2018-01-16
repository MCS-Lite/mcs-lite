// @flow
import format from 'date-fns/format/index';

type Formatter = Date => string;

// Remind: date-fns always return local time
const localTimeFormat: Formatter = date =>
  format(new Date(date), 'YYYY-MM-DD HH:mm');

export default localTimeFormat;
