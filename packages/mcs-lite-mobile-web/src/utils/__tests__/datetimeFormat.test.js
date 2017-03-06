import of from 'date-fp/build/of';
import datetimeFormat from '../datetimeFormat';

it('should return datetimeFormat function', () => {
  expect(typeof datetimeFormat).toBe('function');
});

it('should return correct formated string', () => {
  const fixedDate = of([2015, 2, 4, 22, 8, 5, 23]);

  expect(datetimeFormat(fixedDate)).toBe('2015-03-04 22:08');
});
