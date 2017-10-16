import { Observable } from 'rxjs/Observable';
import { constants, actions, cycles } from '../data';
import { actions as uiActions } from '../ui';
import { assertSourcesSinks } from '../../utils/helpers';

describe('data - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('data - 2. Action Creators', () => {
  it('should return deleteData actions', () => {
    expect(actions.deleteData('message')).toMatchSnapshot();
  });
});

describe('data - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with deleteDataCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.deleteData('message123'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({ body: {} }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: uiActions.addToast({
        kind: 'success',
        children: 'message123',
      }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/clear',
        method: 'DELETE',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.DELETE_DATA,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { 'a-------|': actionSource },
      HTTP:   { '----r---|': httpSource },
    }, {
      HTTP:   { 'r-------|': httpSink },
      ACTION: { 'x---(yz)|': actionSink },
    }, cycles.deleteDataCycle, done);
  });
});
