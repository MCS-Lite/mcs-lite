import { actions } from '../auth';

describe('auth', () => {
  it('should return signin actions', () => {
    const payload = { account: 'account', password: 'password' };
    expect(actions.signin(payload)).toMatchSnapshot();
  });

  it('should return setCookie actions', () => {
    expect(actions.setCookie('payload')).toMatchSnapshot();
  });
});
