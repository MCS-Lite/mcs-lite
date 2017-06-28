// @flow
import isNumber from '../isNumber';

describe('isNumber', () => {
  it('should return false value with string type', () => {
    expect(isNumber('123')).toBeFalsy();
  });

  it('should return true value with number type', () => {
    expect(isNumber(123)).toBeTruthy();
  });

  it('should return false value with object type', () => {
    expect(isNumber({})).toBeFalsy();
    expect(isNumber([])).toBeFalsy();
  });

  it('should return false value with null.', () => {
    expect(isNumber(null)).toBeFalsy();
  });

  it('should return false value with undefined.', () => {
    expect(isNumber(undefined)).toBeFalsy();
  });
});
