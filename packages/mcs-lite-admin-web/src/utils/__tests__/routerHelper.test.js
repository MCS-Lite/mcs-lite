import { updatePathname, updateLocale } from '../../utils/routerHelper';

it('should return functions', () => {
  expect(typeof updatePathname).toBe('function');
  expect(typeof updateLocale).toBe('function');
});

it('should override pathname', () => {
  const mockLocation = {
    pathname: '/devices',
    query: { locale: 'zh-TW' },
  };

  expect(updatePathname('/account')(mockLocation)).toMatchSnapshot();
});

it('should override locale', () => {
  const mockLocation = {
    pathname: '/devices',
    query: { locale: 'zh-TW' },
  };

  expect(updateLocale('en')(mockLocation)).toMatchSnapshot();
});
