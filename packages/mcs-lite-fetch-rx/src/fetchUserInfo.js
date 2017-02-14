import { Observable } from 'rxjs/Observable';
import { createFetch, parse, method, params } from 'http-client';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/pluck';

export const URL = '/oauth/cookies/mobile';

const fetchUserInfo = (cookieToken) => {
  if (!cookieToken) return Observable.throw('[fetchUserInfo] cookieToken is required.');

  const fetch = createFetch(
    method('POST'),
    params({ token: cookieToken }),
    parse('json', 'jsonData'),
  );

  return Observable
    .fromPromise(fetch(URL))
    .pluck('jsonData', 'results');
};

export default fetchUserInfo;
