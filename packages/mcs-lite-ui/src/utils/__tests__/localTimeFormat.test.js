import localTimeFormat from '../localTimeFormat';

it('should setup TZ="UTC"', () => {
  expect(new Date(1490855461424).getTimezoneOffset() / 60).toBe(0);
});

it('should return localTimeFormat function', () => {
  expect(typeof localTimeFormat).toBe('function');
});

it('should return correct formated string', () => {
  const fixedDate = 1489455029878; // Tue Mar 14 2017 09:30:29 GMT+0800 (CST)

  expect(localTimeFormat(fixedDate)).toBe('2017-03-14 01:30');
});
