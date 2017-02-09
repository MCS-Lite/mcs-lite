import { actions } from '../auth';

describe('auth', () => {
  it('should return signin actions', () => {
    const payload = { account: 'account', password: 'password' };
    expect(actions.signin(payload)).toMatchSnapshot();
  });

  it('should return signout actions', () => {
    expect(actions.signout()).toMatchSnapshot();
  });

  it('should return changePassword actions', () => {
    expect(actions.changePassword({})).toMatchSnapshot();
  });

  it('should return setUserInfo actions', () => {
    expect(actions.setUserInfo('payload')).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});
