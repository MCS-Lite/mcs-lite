import updatePathname from '../updatePathname';

it('should return updatePathname function', () => {
  expect(typeof updatePathname).toBe('function');
});

it('should override pathname', () => {
  const mockLocation = {
    pathname: '/devices',
    query: { locale: 'zh-TW' },
  };

  expect(
    updatePathname('/account')(mockLocation),
  ).toMatchSnapshot();
});
