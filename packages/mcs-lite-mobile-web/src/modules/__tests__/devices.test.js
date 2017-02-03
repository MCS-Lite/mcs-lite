import { actions } from '../devices';

describe('devices', () => {
  it('should return fetchDevices actions', () => {
    expect(actions.fetchDevices()).toMatchSnapshot();
  });

  it('should return setDevices actions', () => {
    expect(actions.setDevices('payload')).toMatchSnapshot();
  });
});
