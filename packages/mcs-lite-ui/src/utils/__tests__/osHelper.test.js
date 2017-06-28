/* global window */

import { getOSBit, osNameMapper, fileNameMapper } from '../osHelper';

it('should return correct bit with getOSBit', () => {
  // Hint: Mutate the navigator.userAgent
  // ref: https://github.com/facebook/jest/issues/717#issuecomment-246471809
  /* eslint-disable*/
  Object.defineProperty(
    window.navigator,
    'userAgent',
    (function(_value) {
      return {
        get: () => _value,
        set: v => {
          _value = v;
        },
      };
    })(window.navigator.userAgent),
  );
  /* eslint-enable */

  window.navigator.userAgent = 'WOW64';
  expect(getOSBit()).toBe(64);

  window.navigator.userAgent = 'Win64';
  expect(getOSBit()).toBe(64);

  window.navigator.userAgent = '';
  expect(getOSBit()).toBe(32);
});

it('should return correct name with osNameMapper', () => {
  expect(osNameMapper({ mac: true })).toBe('MAC');
  expect(osNameMapper({ windows: true })).toBe('Windows');
  expect(osNameMapper({})).toBe('Windows');
});

it('should return correct name with fileNameMapper', () => {
  expect(fileNameMapper({ mac: true })).toBe('osx64.tar.gz');

  window.navigator.userAgent = '';
  expect(fileNameMapper({ windows: true })).toBe('win32.zip');

  expect(fileNameMapper({})).toBe('win64.zip');
});
