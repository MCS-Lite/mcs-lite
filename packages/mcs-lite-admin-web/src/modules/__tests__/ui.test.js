import { Observable } from 'rxjs/Observable';
import reducer, { constants, actions, cycles } from '../ui';
import { constants as usersConstants } from '../users';
import { constants as serviceConstants } from '../service';
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

  it('should return setIsRestartRequired actions', () => {
    expect(actions.setIsRestartRequired(true)).toMatchSnapshot();
  });

  it('should return storeIsRestartRequired actions', () => {
    expect(actions.storeIsRestartRequired()).toMatchSnapshot();
  });

  it('should return removeIsRestartRequired actions', () => {
    expect(actions.removeIsRestartRequired()).toMatchSnapshot();
  });

  it('should return addToast actions', () => {
    expect(actions.addToast({})).toMatchSnapshot();
  });

  it('should return removeToast actions', () => {
    expect(actions.removeToast('key')).toMatchSnapshot();
  });
});

describe('ui - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with addToastCycle', done => {
    const actionSource = {
      a: actions.addToast({}),
      b: actions.addToast({}),
    };

    const actionSink = {
      x: actions.removeToast('mockUuid()'),
      y: actions.removeToast('mockUuid()'),
    };

    // prettier-ignore
    assertSourcesSinks(
      { ACTION: { '-ab---|': actionSource } },
      { ACTION: { '---x-y|': actionSink } },
      cycles.addToastCycle, () => {}, { interval: 1250 },
    );

    // prettier-ignore
    assertSourcesSinks(
      { ACTION: { '-(ab)---|': actionSource } },
      { ACTION: { '---x-y--|': actionSink } },
      cycles.addToastCycle, () => {}, { interval: 1250 },
    );

    // prettier-ignore
    assertSourcesSinks(
      { ACTION: { '-a-----b--|': actionSource } },
      { ACTION: { '---x-----y|': actionSink } },
      cycles.addToastCycle, done, { interval: 1250 },
    );
  });

  it('should emit correct Sinks given Sources with storeIsRestartRequiredCycle after response', done => {
    const storageSource = {
      local: {
        getItem: () => ({
          s: 'false',
          t: 'true',
        }),
      },
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({
          request: { category: usersConstants.DELETE_USERS },
        }),
      }),
    };

    const actionSink = {
      x: actions.setIsRestartRequired(false),
      y: actions.setIsRestartRequired(true),
    };

    const storageSink = {
      r: {
        target: 'local',
        action: 'setItem',
        key: constants.SET_IS_RESTART_REQUIRED,
        value: 'true',
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STORAGE: { '-s--t--|': storageSource },
      HTTP:    { '---r--r|': httpSource },
    }, {
      STORAGE: { '---r---|': storageSink },
      ACTION:  { 'x---y--|': actionSink },
    }, cycles.storeIsRestartRequiredCycle, done);
  });

  it('should emit correct Sinks given Sources with removeIsRestartRequiredCycle after response', done => {
    const httpSource = {
      select: () => ({
        r: Observable.of({
          request: { category: serviceConstants.STOP },
        }),
        s: Observable.of({
          request: { category: serviceConstants.START },
        }),
        t: Observable.of({
          request: { category: `${serviceConstants.RESTART}_START` },
        }),
      }),
    };

    const storageSink = {
      r: {
        target: 'local',
        action: 'removeItem',
        key: constants.SET_IS_RESTART_REQUIRED,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      HTTP:    { 'rst-|': httpSource },
    }, {
      STORAGE: { 'r-r-|': storageSink },
    }, cycles.removeIsRestartRequiredCycle, done);
  });
});

describe('ui - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_LOADING', () => {
    const state = reducer(
      {},
      {
        type: constants.SET_LOADING,
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_LOADED', () => {
    const state = reducer(
      {},
      {
        type: constants.SET_LOADED,
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_IS_RESTART_REQUIRED', () => {
    const state = reducer(
      {},
      {
        type: constants.SET_IS_RESTART_REQUIRED,
        payload: false,
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle ADD_TOAST', () => {
    const state = reducer(
      { toasts: [] },
      {
        type: constants.ADD_TOAST,
        payload: { message: 'message' },
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle REMOVE_TOAST', () => {
    const state = reducer(
      { toasts: [{ key: 'key' }] },
      {
        type: constants.REMOVE_TOAST,
        payload: 'key',
      },
    );
    expect(state).toMatchSnapshot();
  });
});
