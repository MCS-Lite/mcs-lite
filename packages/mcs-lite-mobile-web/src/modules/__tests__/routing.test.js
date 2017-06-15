/* eslint key-spacing: 0 */

import { push } from 'react-router-redux';
import reducer, { constants, actions, cycles } from '../routing';
import { assertSourcesSinks } from '../../utils/helpers';

jest.mock('browser-locale', () => () => 'zh-TW');

describe('routing - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('routing - 2. Action Creators', () => {
  it('should return actions', () => {
    expect(actions).toMatchSnapshot();
  });
});

describe('ui - 3. Cycle', () => {
  it('should handle Case1: defaultLocale', done => {
    const stateSource = {
      i: {
        routing: {
          locationBeforeTransitions: null,
        },
      },
      s: {
        routing: {
          locationBeforeTransitions: {
            pathname: '/a',
            query: { query: '123' },
          },
        },
      },
    };

    const actionSink = {
      x: push({ pathname: '/a', query: { locale: 'zh-TW' } }),
      y: push({ pathname: '/a', query: { locale: 'zh-TW', query: '123' } }),
    };

    // prettier-ignore
    assertSourcesSinks(
      {
        STATE:  { 'is---|': stateSource },
      },
      { ACTION: { '-(xy)|': actionSink } },
      cycles.localeCycle, done,
    );
  });

  it('should handle Case2: Keep last local state with push()', done => {
    const stateSource = {
      i: {
        routing: {
          locationBeforeTransitions: null,
        },
      },
      s: {
        routing: {
          locationBeforeTransitions: {
            pathname: '/a',
            query: {},
          },
        },
      },
      t: {
        routing: {
          locationBeforeTransitions: {
            pathname: '/a',
            query: { locale: 'en' },
          },
        },
      },
      u: {
        routing: {
          locationBeforeTransitions: {
            pathname: '/logout',
            query: {},
          },
        },
      },
    };

    const actionSink = {
      x: push({ pathname: '/a', query: { locale: 'zh-TW' } }),
      y: push({ pathname: '/a', query: { locale: 'en' } }),
      z: push({ pathname: '/logout', query: { locale: 'en' } }),
    };

    // prettier-ignore
    assertSourcesSinks(
      {
        STATE:  { 'istu|': stateSource },
      },
      { ACTION: { '-xyz|': actionSink } },
      cycles.localeCycle, done,
    );
  });
});

describe('routing - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle LOCATION_CHANGE', () => {
    const state = reducer(
      {},
      {
        type: constants.LOCATION_CHANGE,
        payload: { pathname: '/' },
      },
    );
    expect(state).toMatchSnapshot();
  });
});
