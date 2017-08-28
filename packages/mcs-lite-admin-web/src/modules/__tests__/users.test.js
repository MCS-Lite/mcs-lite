import { Observable } from 'rxjs/Observable';
import reducer, { constants, actions, cycles } from '../users';
import { actions as uiActions } from '../ui';
import { assertSourcesSinks } from '../../utils/helpers';

describe('users - 1. Constants', () => {
  it('should return constants', () => {
    expect(constants).toMatchSnapshot();
  });
});

describe('users - 2. Action Creators', () => {
  it('should return fetchUsers actions', () => {
    expect(actions.fetchUsers()).toMatchSnapshot();
  });

  it('should return setUsers actions', () => {
    expect(actions.setUsers('users')).toMatchSnapshot();
  });

  it('should return createUser actions', () => {
    expect(actions.createUser('user', 'message')).toMatchSnapshot();
  });

  it('should return createUserByCSV actions', () => {
    expect(actions.createUserByCSV('csv', 'message')).toMatchSnapshot();
  });

  it('should return setUser actions', () => {
    expect(actions.setUser('user')).toMatchSnapshot();
  });

  it('should return changePasswordById actions', () => {
    expect(
      actions.changePasswordById('userId', 'password', 'successMessage'),
    ).toMatchSnapshot();
  });

  it('should return putIsActiveById actions', () => {
    expect(
      actions.putIsActiveById('userId', 'isActive', 'successMessage'),
    ).toMatchSnapshot();
  });

  it('should return changeActiveById actions', () => {
    expect(actions.changeActiveById('evenchange4', true)).toMatchSnapshot();
  });

  it('should return deleteUsers actions', () => {
    expect(
      actions.deleteUsers('userIdList', 'successMessage'),
    ).toMatchSnapshot();
  });

  it('should return removeUsersById actions', () => {
    expect(actions.removeUsersById([1, 2, 3])).toMatchSnapshot();
  });

  it('should return clear actions', () => {
    expect(actions.clear()).toMatchSnapshot();
  });
});

describe('users - 3. Cycle', () => {
  it('should emit correct Sinks given Sources with fetchUsersCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.fetchUsers(),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({
          body: [1, 2, 3],
        }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: actions.setUsers([1, 2, 3]),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/users',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.FETCH_USERS,
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
    }, cycles.fetchUsersCycle, done);
  });

  it('should emit fetchUsers when createUserByCSV in fetchUsersCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {};
    const httpSource = {
      select: category => ({
        a: category !== constants.FETCH_USERS
          ? Observable.of({
              request: {
                category: constants.CREATE_USER_BY_CSV,
              },
            })
          : Observable.empty(),
        r: category === constants.FETCH_USERS
          ? Observable.of({
              body: [1, 2, 3],
            })
          : Observable.empty(),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: actions.setUsers([1, 2, 3]),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/users',
        method: 'GET',
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.FETCH_USERS,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's-------|': stateSource },
      ACTION: { '--------|': actionSource },
      HTTP:   { '-a--r---|': httpSource },
    }, {
      HTTP:   { '-r------|': httpSink },
      ACTION: { '-x--(yz)|': actionSink },
    }, cycles.fetchUsersCycle, done);
  });

  it('should emit correct Sinks given Sources with deleteUsersCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.deleteUsers([1, 2, 3], 'message'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({
          body: {},
          request: {
            send: {
              userId: [1, 2, 3],
            },
          },
        }),
      }),
    };

    const actionSink = {
      w: uiActions.setLoading(),
      x: actions.removeUsersById([1, 2, 3]),
      y: uiActions.addToast({ kind: 'success', children: 'message' }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/users/delete',
        method: 'POST',
        send: { userId: [1, 2, 3] },
        headers: { Authorization: 'Bearer faketoken123' },
        category: constants.DELETE_USERS,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's--------|': stateSource },
      ACTION: { 'a--------|': actionSource },
      HTTP:   { '----r----|': httpSource },
    }, {
      HTTP:   { 'r--------|': httpSink },
      ACTION: { 'w---(xyz)|': actionSink },
    }, cycles.deleteUsersCycle, done);
  });

  it('should emit correct Sinks given Sources with createUserCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.createUser({ id: 123 }, 'message'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({
          body: { name: 'MichaelHsu' },
        }),
      }),
    };

    const actionSink = {
      w: uiActions.setLoading(),
      x: actions.setUser({ name: 'MichaelHsu' }),
      y: uiActions.addToast({ kind: 'success', children: 'message' }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/users',
        method: 'POST',
        headers: { Authorization: 'Bearer faketoken123' },
        send: {
          id: 123,
          isAdmin: false,
        },
        category: constants.CREATE_USER,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's--------|': stateSource },
      ACTION: { 'a--------|': actionSource },
      HTTP:   { '----r----|': httpSource },
    }, {
      HTTP:   { 'r--------|': httpSink },
      ACTION: { 'w---(xyz)|': actionSink },
    }, cycles.createUserCycle, done);
  });

  it('should emit correct Sinks given Sources with createUserByCSVCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.createUserByCSV('csv', 'message'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({
          body: {},
        }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: uiActions.addToast({ kind: 'success', children: 'message' }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/users.csv',
        method: 'POST',
        headers: { Authorization: 'Bearer faketoken123' },
        send: 'csv',
        type: 'text/csv',
        category: constants.CREATE_USER_BY_CSV,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's--------|': stateSource },
      ACTION: { 'a--------|': actionSource },
      HTTP:   { '----r----|': httpSource },
    }, {
      HTTP:   { 'r--------|': httpSink },
      ACTION: { 'x---(yz)-|': actionSink },
    }, cycles.createUserByCSVCycle, done);
  });

  it('should emit correct Sinks given Sources with changePasswordByIdCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.changePasswordById(1234, 'password', 'successMessage'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({
          body: {},
        }),
      }),
    };

    const actionSink = {
      x: uiActions.setLoading(),
      y: uiActions.addToast({ kind: 'success', children: 'successMessage' }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/users/1234',
        method: 'PUT',
        headers: { Authorization: 'Bearer faketoken123' },
        send: {
          password: 'password',
        },
        category: constants.CHANGE_PASSWORD_BY_ID,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's--------|': stateSource },
      ACTION: { 'a--------|': actionSource },
      HTTP:   { '----r----|': httpSource },
    }, {
      HTTP:   { 'r--------|': httpSink },
      ACTION: { 'x---(yz)-|': actionSink },
    }, cycles.changePasswordByIdCycle, done);
  });

  it('should emit correct Sinks given Sources with putIsActiveByIdCycle', done => {
    const stateSource = {
      s: { auth: { access_token: 'faketoken123' } },
    };
    const actionSource = {
      a: actions.putIsActiveById(124, true, 'successMessage'),
    };
    const httpSource = {
      select: () => ({
        r: Observable.of({
          body: {},
          request: {
            url: '/api/users/124',
            send: {
              isActive: true,
            },
          },
        }),
      }),
    };

    const actionSink = {
      w: uiActions.setLoading(),
      x: actions.changeActiveById('124', true),
      y: uiActions.addToast({ kind: 'success', children: 'successMessage' }),
      z: uiActions.setLoaded(),
    };

    const httpSink = {
      r: {
        url: '/api/users/124',
        method: 'PUT',
        headers: { Authorization: 'Bearer faketoken123' },
        send: {
          isActive: true,
        },
        category: constants.PUT_IS_ACTIVE_BY_ID,
      },
    };

    // prettier-ignore
    assertSourcesSinks({
      STATE:  { 's--------|': stateSource },
      ACTION: { 'a--------|': actionSource },
      HTTP:   { '----r----|': httpSource },
    }, {
      HTTP:   { 'r--------|': httpSink },
      ACTION: { 'w---(xyz)|': actionSink },
    }, cycles.putIsActiveByIdCycle, done);
  });
});

describe('users - 4. Reducer', () => {
  it('should return the initial state', () => {
    const state = reducer();
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_USERS', () => {
    const state = reducer([], {
      type: constants.SET_USERS,
      payload: [1, 2, 3],
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle SET_USER', () => {
    const state = reducer([1, 2, 3], {
      type: constants.SET_USER,
      payload: 0,
    });
    expect(state).toMatchSnapshot();
  });

  it('should handle CHANGE_ACTIVE_BY_ID', () => {
    const state = reducer(
      [
        {
          userId: 0,
          isActive: true,
        },
        {
          userId: 1,
          isActive: true,
        },
        {
          userId: 2,
          isActive: false,
        },
      ],
      {
        type: constants.CHANGE_ACTIVE_BY_ID,
        payload: { userId: 1, isActive: false },
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle REMOVE_USERS_BY_ID with single userId [1]', () => {
    const state = reducer(
      [
        {
          userId: 0,
          isActive: true,
        },
        {
          userId: 1,
          isActive: true,
        },
        {
          userId: 2,
          isActive: false,
        },
      ],
      {
        type: constants.REMOVE_USERS_BY_ID,
        payload: [1],
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle REMOVE_USERS_BY_ID with multiple userIds [0, 1]', () => {
    const state = reducer(
      [
        {
          userId: 0,
          isActive: true,
        },
        {
          userId: 1,
          isActive: true,
        },
        {
          userId: 2,
          isActive: false,
        },
      ],
      {
        type: constants.REMOVE_USERS_BY_ID,
        payload: [0, 1],
      },
    );
    expect(state).toMatchSnapshot();
  });

  it('should handle CLEAR', () => {
    const state = reducer({ db: '1123' }, { type: constants.CLEAR });
    expect(state).toMatchSnapshot();
  });
});
