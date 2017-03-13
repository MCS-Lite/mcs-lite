import of from 'date-fp/build/of';
import localTimeFormat from '../localTimeFormat';

it('should return localTimeFormat function', () => {
  expect(typeof localTimeFormat).toBe('function');
});

it('should return correct formated string', () => {
  const fixedDate = of([2015, 2, 4, 22, 8, 5, 23]);

  expect(localTimeFormat(fixedDate)).toBe('2015-03-04 22:08');
});
