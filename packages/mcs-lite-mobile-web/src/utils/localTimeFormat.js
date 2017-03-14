import format from 'date-fns/format';

// Remind: date-fns always return local time
const localTimeFormat = date =>
  format(new Date(date), 'YYYY-MM-DD HH:mm');

export default localTimeFormat;
