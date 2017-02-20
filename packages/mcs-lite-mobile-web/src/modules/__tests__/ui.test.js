import reducer, { constants, actions } from '../ui';

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
});
