import D from '../DATE_API';

const fixedDate = new Date(1490855461424);
console.log(fixedDate.toString()); // eslint-disable-line
console.log(fixedDate.toISOString()); // eslint-disable-line

it('should return correct value of D.from', () => {
  expect(
    D.from(1490855461424).toString(),
  ).toBe('Thu Mar 30 2017 14:31:01 GMT+0800 (CST)');
});

it('should return correct value of D.to', () => {
  expect(
    D.to(fixedDate),
  ).toBe(1490855461424);
  expect(fixedDate.toString()).toBe('Thu Mar 30 2017 14:31:01 GMT+0800 (CST)');
});

it('should return correct value of D.setYear', () => {
  expect(
    D.setYear(2019)(fixedDate).toString(),
  ).toBe('Sat Mar 30 2019 14:31:01 GMT+0800 (CST)');
  expect(fixedDate.toString()).toBe('Thu Mar 30 2017 14:31:01 GMT+0800 (CST)');
});

it('should return correct value of D.setMonth', () => {
  expect(
    D.setMonth(9)(fixedDate).toString(),
  ).toBe('Mon Oct 30 2017 14:31:01 GMT+0800 (CST)');
  expect(fixedDate.toString()).toBe('Thu Mar 30 2017 14:31:01 GMT+0800 (CST)');
});

it('should return correct value of D.setDate', () => {
  expect(
    D.setDate(2)(fixedDate).toString(),
  ).toBe('Thu Mar 02 2017 14:31:01 GMT+0800 (CST)');
  expect(fixedDate.toString()).toBe('Thu Mar 30 2017 14:31:01 GMT+0800 (CST)');
});

it('should return correct value of D.setHours', () => {
  expect(
    D.setHours(2)(fixedDate).toString(),
  ).toBe('Thu Mar 30 2017 02:31:01 GMT+0800 (CST)');
  expect(fixedDate.toString()).toBe('Thu Mar 30 2017 14:31:01 GMT+0800 (CST)');
});

it('should return correct value of D.setMinutes', () => {
  expect(
    D.setMinutes(2)(fixedDate).toString(),
  ).toBe('Thu Mar 30 2017 14:02:01 GMT+0800 (CST)');
  expect(fixedDate.toString()).toBe('Thu Mar 30 2017 14:31:01 GMT+0800 (CST)');
});
