import localTimeFormat from '../localTimeFormat';

// Remind: We just test the two argument of date-fns' format function.
jest.mock('date-fns/format', () => (date, format) => ({
  date: date.toISOString(),
  format,
}));

it('should return localTimeFormat function', () => {
  expect(typeof localTimeFormat).toBe('function');
});

it('should return correct formated string', () => {
  const fixedDate = 1489455029878; // Tue Mar 14 2017 09:30:29 GMT+0800 (CST)

  expect(localTimeFormat(fixedDate)).toMatchSnapshot();
});
