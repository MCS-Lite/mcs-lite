import localeMapper from '../localeMapper';

it('should return correct locale', () => {
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
