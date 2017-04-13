// @flow
import isString from '../isString';

describe('isString', () => {
  it('should return true value with string type', () => {
    expect(isString('123')).toBeTruthy();
  });

  it('should return false value with number type', () => {
    expect(isString(123)).toBeFalsy();
  });

  it('should return false value with object type', () => {
    expect(isString({})).toBeFalsy();
    expect(isString([])).toBeFalsy();
  });

  it('should return false value with null.', () => {
    expect(isString(null)).toBeFalsy();
  });

  it('should return false value with undefined.', () => {
    expect(isString(undefined)).toBeFalsy();
  });
});
