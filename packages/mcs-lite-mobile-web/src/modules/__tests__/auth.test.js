import { ActionsObservable } from 'redux-observable';
import reducer, { constants, actions, epics } from '../auth';

describe('auth - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('auth - 2. Action Creators', () => {
  it('should return requireAuth actions', () => {
    expect(actions.requireAuth()).toMatchSnapshot();
  });

  it('should return tryEnter actions', () => {
    expect(actions.tryEnter()).toMatchSnapshot();
  });

  it('should return signout actions', () => {
    expect(actions.signout('payload', false)).toMatchSnapshot();
  });

  it('should return setUserInfo actions', () => {
    expect(actions.setUserInfo('payload')).toMatchSnapshot();
  });

  it('should return changePassword actions', () => {
    expect(actions.changePassword({})).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

jest.mock('mcs-lite-fetch-rx', () => ({
  fetchUserInfo: () => ['response'],
  changePassword: () => ['response'],
}));

describe('auth - 3. Epic', () => {
  it('should return correct actions when requireAuthEpic', () => {
    const action$ = ActionsObservable.of(actions.requireAuth());
    const store = null;

    epics.requireAuthEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });

  it('should return correct actions when tryEnterEpic without cookie', () => {
    const action$ = ActionsObservable.of(actions.tryEnter());
    const store = null;

    epics.tryEnterEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });

  it('should return correct actions when signoutEpic', () => {
    const action$ = ActionsObservable.of(actions.signout());
    const store = null;

    epics.signoutEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });

  it('should return correct actions when changePassword', () => {
    const payload = { key: 'key', password: 'password', message: 'message' };
    const action$ = ActionsObservable.of(actions.changePassword(payload));
    const store = {
      getState: () => ({
        auth: { access_token: 123 },
      }),
    };

    epics.changePasswordEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });
});

describe('devices - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_USERINFO', () => {
    const state = reducer({}, {
      type: constants.SET_USERINFO,
      payload: { token: 'token' },
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle CLEAR', () => {
    const state = reducer(
      { token: 'token' },
      { type: constants.CLEAR },
    );
    expect(state).toMatchSnapshot();
  });
});
