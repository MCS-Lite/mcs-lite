import getTime from 'date-fns/get_time';
import setYear from 'date-fns/set_year';
import setMonth from 'date-fns/set_month';
import setDate from 'date-fns/set_date';
import setHours from 'date-fns/set_hours';
import setMinutes from 'date-fns/set_minutes';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import getDate from 'date-fns/get_date';
import getHours from 'date-fns/get_hours';
import getMinutes from 'date-fns/get_minutes';
import endOfMonth from 'date-fns/end_of_month';

const DATE_API = {
  from: timestamp => new Date(timestamp), // timestamp:number => Date
  to: date => getTime(date), // Date => timestamp:number
  setYear: year => date => setYear(date, year),
  setMonth: month => date => setMonth(date, month),
  setDate: dayOfMonth => date => setDate(date, dayOfMonth),
  setHours: hours => date => setHours(date, hours),
  setMinutes: minutes => date => setMinutes(date, minutes),
  getYear: date => getYear(date),
  getMonth: date => getMonth(date),
  getDate: date => getDate(date),
  getHours: date => getHours(date),
  getMinutes: date => getMinutes(date),
  endOfMonth: date => endOfMonth(date),
};

export default DATE_API;
