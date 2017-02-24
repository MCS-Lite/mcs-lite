import { Observable } from 'rxjs/Observable';
import { createFetch, method, params } from 'http-client';
import 'rxjs/add/observable/fromPromise';
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
    .pluck('jsonData', 'message');
};

export default changePassword;
