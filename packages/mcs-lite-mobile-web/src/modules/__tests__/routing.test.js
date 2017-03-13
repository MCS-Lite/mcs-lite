/* eslint key-spacing: 0 */

import { push } from 'react-router-redux';
import reducer, { constants, actions, cycles } from '../routing';
import { assertSourcesSinks } from '../../utils/helpers';

describe('routing - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('routing - 2. Action Creators', () => {
  it('should return pushPathname actions', () => {
    expect(actions.pushPathname('/login')).toMatchSnapshot();
  });

  it('should return pushLocale actions', () => {
    expect(actions.pushLocale('en')).toMatchSnapshot();
  });
});

describe('ui - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with pushPathnameCycle', (done) => {
    const stateSource = {
      s: { routing: { locationBeforeTransitions: { pathname: '/' }}},
    };
    const actionSource = {
      a: actions.pushPathname('/fakepath/123'),
    };

    const actionSink = {
      x: push({ pathname: '/fakepath/123' }),
    };

    assertSourcesSinks(
      {
        STATE:  { 's|': stateSource },
        ACTION: { 'a|': actionSource },
      },
      { ACTION: { 'x|': actionSink }},
      cycles.pushPathnameCycle, done,
    );
  });

  it('should emit correct Sinks given Sources with pushLocaleCycle', (done) => {
    const stateSource = {
      s: { routing: { locationBeforeTransitions: {
        pathname: '/',
        query: {},
      }}},
    };
    const actionSource = {
      a: actions.pushLocale('zh-TW'),
    };

    const actionSink = {
      x: push({ pathname: '/', query: { locale: 'zh-TW' }}),
    };

    assertSourcesSinks(
      {
        STATE:  { 's|': stateSource },
        ACTION: { 'a|': actionSource },
      },
      { ACTION: { 'x|': actionSink }},
      cycles.pushLocaleCycle, done,
    );
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
