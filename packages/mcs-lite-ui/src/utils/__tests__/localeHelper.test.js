// @flow

import { LOCALES, localeMapper, getMCSLinkByLocale } from '../localeHelper';

it('should return LOCALES', () => {
  expect(LOCALES).toMatchSnapshot();
});

it('should return correct locale with localeMapper', () => {
  const defaultLocaleMapper = localeMapper('zh-TW');

  expect(defaultLocaleMapper('zh-tW')).toBe('zh-TW');
  expect(defaultLocaleMapper('zh-tw')).toBe('zh-TW');
  expect(defaultLocaleMapper('zh-TW')).toBe('zh-TW');
  expect(defaultLocaleMapper('zh-CN')).toBe('zh-CN');
  expect(defaultLocaleMapper('zh-cN')).toBe('zh-CN');
  expect(defaultLocaleMapper('zh-cn')).toBe('zh-CN');
  expect(defaultLocaleMapper('zh')).toBe('zh-TW');
  expect(defaultLocaleMapper('zH')).toBe('zh-TW');
  expect(defaultLocaleMapper('ZH')).toBe('zh-TW');
  expect(defaultLocaleMapper('en')).toBe('en');
  expect(defaultLocaleMapper('en-US')).toBe('en');
  expect(defaultLocaleMapper('EN')).toBe('en');
  expect(defaultLocaleMapper('ja')).toBe('zh-TW');
  expect(defaultLocaleMapper('others')).toBe('zh-TW');
});

it('should return correct links with getMCSLinkByLocale', () => {
  expect(getMCSLinkByLocale('zh-TW')).toBe('https://mcs.mediatek.com/zh-TW/');
  expect(getMCSLinkByLocale('zh-CN')).toBe('https://mcs.mediatek.cn/');
  expect(getMCSLinkByLocale('en')).toBe('https://mcs.mediatek.com/');
});
