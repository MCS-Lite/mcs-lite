import { ActionsObservable } from 'redux-observable';
import reducer, { constants, actions, epics } from '../ui';

describe('ui - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('ui - 2. Action Creators', () => {
  it('should return setLoading actions', () => {
    expect(actions.setLoading()).toMatchSnapshot();
  });

  it('should return setLoaded actions', () => {
    expect(actions.setLoaded()).toMatchSnapshot();
  });

  it('should return addToast actions', () => {
    expect(actions.addToast({})).toMatchSnapshot();
  });

  it('should return removeToast actions', () => {
    expect(actions.removeToast('key')).toMatchSnapshot();
  });
});

describe('ui - 3. Epic', () => {
  it('should return correct actions when addToastEpic', () => {
    const action$ = ActionsObservable.of(actions.addToast({ key: 'key' }));
    const store = null;

    // TODO: test for delay operator ??
    epics.addToastEpic(action$, store)
      .toArray()
      .subscribe(action => expect(action).toMatchSnapshot());
  });
});

describe('ui - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_LOADING', () => {
    const state = reducer({}, {
      type: constants.SET_LOADING,
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_LOADED', () => {
    const state = reducer({}, {
      type: constants.SET_LOADED,
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle ADD_TOAST', () => {
    const state = reducer({ toasts: []}, {
      type: constants.ADD_TOAST,
      payload: { message: 'message' },
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle REMOVE_TOAST', () => {
    const state = reducer({ toasts: [{ key: 'key' }]}, {
      type: constants.REMOVE_TOAST,
      payload: 'key',
    });
    expect(state).toMatchSnapshot();
  });
});
