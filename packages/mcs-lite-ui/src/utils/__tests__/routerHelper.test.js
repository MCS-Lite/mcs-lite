// @flow

import { updatePathname, updateLocale } from '../routerHelper';

it('should return functions', () => {
  expect(typeof updatePathname).toBe('function');
  expect(typeof updateLocale).toBe('function');
});

it('should override pathname', () => {
  const mockLocation = {
    pathname: '/devices',
    query: { locale: 'zh-TW', other: 123 },
  };

  expect(updatePathname('/account')(mockLocation)).toEqual({
    pathname: '/account',
    query: { locale: 'zh-TW', other: 123 },
  });
});

it('should override locale', () => {
  const mockLocation = {
    pathname: '/devices',
    query: { locale: 'zh-TW' },
  };

  expect(updateLocale('en')(mockLocation)).toEqual({
    pathname: '/devices',
    query: { locale: 'en' },
  });
});

it('should override locale and keep others', () => {
  const mockLocation = {
    pathname: '/devices',
    query: { other: 123 },
  };

  expect(updateLocale('en')(mockLocation)).toEqual({
    pathname: '/devices',
    query: { locale: 'en', other: 123 },
  });
});
