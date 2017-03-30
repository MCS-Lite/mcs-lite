import { timeLeftPad, MONTH_RANGE, HOUR_RANGE, MINUTE_RANGE } from '../utils';

it('should return functions', () => {
  expect(typeof timeLeftPad).toBe('function');
});

it('should return correct string with timeLeftPad', () => {
  expect(timeLeftPad(0)).toBe('00');
  expect(timeLeftPad(1)).toBe('01');
  expect(timeLeftPad('01')).toBe('01');
  expect(timeLeftPad(59)).toBe('59');
  expect(timeLeftPad(60)).toBe('60');
});

it('should return correct MONTH_RANGE', () => {
  expect(MONTH_RANGE).toMatchSnapshot();
});

it('should return correct HOUR_RANGE', () => {
  expect(HOUR_RANGE).toMatchSnapshot();
});

it('should return correct MINUTE_RANGE', () => {
  expect(MINUTE_RANGE).toMatchSnapshot();
});
