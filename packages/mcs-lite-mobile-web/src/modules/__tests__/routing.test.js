import { actions } from '../routing';

describe('devices', () => {
  it('should return pushPathname actions', () => {
    expect(actions.pushPathname('/signin')).toMatchSnapshot();
  });

  it('should return pushLocale actions', () => {
    expect(actions.pushLocale('en')).toMatchSnapshot();
  });
});
