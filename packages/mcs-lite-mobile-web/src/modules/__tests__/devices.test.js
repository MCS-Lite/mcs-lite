import { ActionsObservable } from 'redux-observable';
import reducer, { constants, actions, epics } from '../devices';

describe('devices - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('devices - 2. Action Creators', () => {
  it('should return fetchDeviceList actions', () => {
    expect(actions.fetchDeviceList()).toMatchSnapshot();
  });

  it('should return fetchDeviceDetail actions', () => {
    expect(actions.fetchDeviceDetail('deviceId')).toMatchSnapshot();
  });

  it('should return setDeviceList actions', () => {
    expect(actions.setDeviceList([])).toMatchSnapshot();
  });

  it('should return setDeviceDetail actions', () => {
    expect(actions.setDeviceDetail({})).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

jest.mock('mcs-lite-fetch-rx', () => ({
  fetchDeviceList: () => ['response'],
  fetchDeviceDetail: () => ['response'],
}));

describe('devices - 3. Epic', () => {
  it('should return correct actions when setDeviceListEpic', () => {
    const action$ = ActionsObservable.of(actions.setDeviceList());
    const store = null;

    epics.setDeviceListEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });

  it('should return correct actions when setDeviceDetailEpic', () => {
    const action$ = ActionsObservable.of(actions.setDeviceDetail());
    const store = null;

    epics.setDeviceDetailEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });

  it('should return correct actions when fetchDeviceListEpic', () => {
    const action$ = ActionsObservable.of(actions.fetchDeviceList());
    const store = {
      getState: () => ({
        auth: { access_token: 123 },
      }),
    };

    epics.fetchDeviceListEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });


  it('should return correct actions when fetchDeviceListEpic without access_token', () => {
    const action$ = ActionsObservable.of(actions.fetchDeviceList());
    const store = {
      getState: () => ({
        auth: {},
      }),
    };

    epics.fetchDeviceListEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });

  it('should return correct actions when fetchDeviceDetailEpic', () => {
    const action$ = ActionsObservable.of(actions.fetchDeviceDetail('deviceId'));
    const store = {
      getState: () => ({
        auth: { access_token: 123 },
      }),
    };

    epics.fetchDeviceDetailEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });
});

describe('devices - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_DEVICE_LIST', () => {
    const state = reducer({}, {
      type: constants.SET_DEVICE_LIST,
      payload: [
        { deviceId: 'deviceId_1' },
      ],
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_DEVICE_DETAIL', () => {
    const state = reducer({}, {
      type: constants.SET_DEVICE_DETAIL,
      payload: { deviceId: 'deviceId_1' },
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle CLEAR', () => {
    const state = reducer(
      { deviceId: 'deviceId_1' },
      { type: constants.CLEAR },
    );
    expect(state).toMatchSnapshot();
  });
});
