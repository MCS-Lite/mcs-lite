import reducer, { constants, actions, cycles } from '../ui';
import { assertSourcesSinks } from '../../utils/helpers';

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

describe('ui - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with addToastCycle', (done) => {
    const actionSource = {
      a: actions.addToast({}),
      b: actions.addToast({}),
    };

    const actionSink = {
      x: actions.removeToast('mockUuid()'),
      y: actions.removeToast('mockUuid()'),
    };

    assertSourcesSinks(
      { ACTION: { '-ab---|': actionSource }},
      { ACTION: { '---x-y|': actionSink }},
      cycles.addToastCycle, () => {}, { interval: 1250 },
    );

    assertSourcesSinks(
      { ACTION: { '-(ab)---|': actionSource }},
      { ACTION: { '---x-y--|': actionSink }},
      cycles.addToastCycle, () => {}, { interval: 1250 },
    );

    assertSourcesSinks(
      { ACTION: { '-a-----b--|': actionSource }},
      { ACTION: { '---x-----y|': actionSink }},
      cycles.addToastCycle, done, { interval: 1250 },
    );
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
