import { ActionsObservable } from 'redux-observable';
import reducer, { constants, actions, epics } from '../routing';

describe('routing - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('routing - 2. Action Creators', () => {
  it('should return pushPathname actions', () => {
    expect(actions.pushPathname('/signin')).toMatchSnapshot();
  });

  it('should return pushLocale actions', () => {
    expect(actions.pushLocale('en')).toMatchSnapshot();
  });
});

describe('routing - 3. Epic', () => {
  it('should return correct actions when pushPathnameEpic', () => {
    const action$ = ActionsObservable.of(actions.pushPathname('/signin'));
    const store = {
      getState: () => ({
        routing: { locationBeforeTransitions: {}},
      }),
    };

    epics.pushPathnameEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });

  it('should return correct actions when pushLocaleEpic', () => {
    const action$ = ActionsObservable.of(actions.pushLocale('en'));
    const store = {
      getState: () => ({
        routing: { locationBeforeTransitions: {}},
      }),
    };

    epics.pushLocaleEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });
});

describe('routing - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle LOCATION_CHANGE', () => {
    const state = reducer({}, {
      type: constants.LOCATION_CHANGE,
      payload: { pathname: '/' },
    });
    expect(state).toMatchSnapshot();
  });
});
