import getCurrentYear from '../getCurrentYear';

it('should return correct year', () => {
  // Hint: mock new Date
  // ref: https://github.com/facebook/jest/issues/2234#issuecomment-308121037
  const constantDate = new Date('2017-06-13T04:41:20');

  /* eslint no-global-assign:off */
  Date = class extends Date {
    constructor() {
      return constantDate;
    }
  };

  expect(getCurrentYear()).toBe(2017);
});
