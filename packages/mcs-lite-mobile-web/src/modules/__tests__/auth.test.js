import { actions } from '../auth';

describe('auth', () => {
  it('should return signin actions', () => {
    expect(actions.signin()).toMatchSnapshot();
  });

  it('should return setCookie actions', () => {
    expect(actions.setCookie('payload')).toMatchSnapshot();
  });
});
