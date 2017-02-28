import { Observable } from 'rxjs/Observable';
import { createFetch, method, params } from 'http-client';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/pluck';
import bearer from './stacks/bearer';

export const URL = '/users/changepassword';

const changePassword = ({ password }, accessToken) => {
  const fetch = createFetch(
    method('PUT'),
    bearer(accessToken),
    params({ password }),
  );

  return Observable
    .fromPromise(fetch(URL))
    .switchMap(({ ok, jsonData }) => {
      if (!ok) return Observable.throw(jsonData);
      return Observable.of(jsonData).pluck('message');
    });
};

export default changePassword;
