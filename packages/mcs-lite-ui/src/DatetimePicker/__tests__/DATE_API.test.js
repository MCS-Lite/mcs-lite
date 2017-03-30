import D from '../DATE_API';

const fixedDate = new Date(1490855461424);

it('should setup TZ="UTC+08:00"', () => {
  expect(
    fixedDate.getTimezoneOffset() / 60,
  ).toBe(8);
});

it('should return correct value of D.from', () => {
  expect(
    D.from(1490855461424).toISOString(),
  ).toBe('2017-03-30T06:31:01.424Z');
});

it('should return correct value of D.to', () => {
  expect(fixedDate.toISOString()).toBe('2017-03-30T06:31:01.424Z');
  expect(
    D.to(fixedDate),
  ).toBe(1490855461424);
});

it('should return correct value of D.setYear', () => {
  expect(fixedDate.toISOString()).toBe('2017-03-30T06:31:01.424Z');
  expect(
    D.setYear(2019)(fixedDate).toISOString(),
  ).toBe('2019-03-30T06:31:01.424Z');
});

it('should return correct value of D.setMonth', () => {
  expect(fixedDate.toISOString()).toBe('2017-03-30T06:31:01.424Z');
  expect(
    D.setMonth(9)(fixedDate).toISOString(),
  ).toBe('2017-10-30T06:31:01.424Z');
});

it('should return correct value of D.setDate', () => {
  expect(fixedDate.toISOString()).toBe('2017-03-30T06:31:01.424Z');
  expect(
    D.setDate(2)(fixedDate).toISOString(),
  ).toBe('2017-03-03T06:31:01.424Z');
});

it('should return correct value of D.setHours', () => {
  expect(fixedDate.toISOString()).toBe('2017-03-30T06:31:01.424Z');
  expect(
    D.setHours(2)(fixedDate).toISOString(),
  ).toBe('2017-03-29T10:31:01.424Z');
});

it('should return correct value of D.setMinutes', () => {
  expect(fixedDate.toISOString()).toBe('2017-03-30T06:31:01.424Z');
  expect(
    D.setMinutes(2)(fixedDate).toISOString(),
  ).toBe('2017-03-30T06:02:01.424Z');
});

it('should return correct value of D.setMinutes', () => {
  expect(fixedDate.toISOString()).toBe('2017-03-30T06:31:01.424Z');
  expect(
    D.setMinutes(2)(fixedDate).toISOString(),
  ).toBe('2017-03-30T06:02:01.424Z');
});
