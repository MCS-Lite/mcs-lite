import cookieHelper from '../cookieHelper';

it('should return cookieHelper function', () => {
  expect(typeof cookieHelper.getCookieToken).toBe('function');
  expect(typeof cookieHelper.removeCookieToken).toBe('function');
});

jest.mock('react-cookie', () => ({
  load: key => key,
  remove: (key, options) => ({ key, options }),
}));

it('should invoke load with correct arguments', () => {
  expect(cookieHelper.getCookieToken()).toBe('token');
});

it('should invoke remove with correct arguments', () => {
  expect(cookieHelper.removeCookieToken()).toMatchSnapshot();
});
