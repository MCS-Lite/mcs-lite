import { actions } from '../ui';

describe('devices', () => {
  it('should return setLoading actions', () => {
    expect(actions.setLoading()).toMatchSnapshot();
  });

  it('should return setLoaded actions', () => {
    expect(actions.setLoaded()).toMatchSnapshot();
  });
});
