import { Observable } from 'rxjs/Observable';
import { createFetch, parse, method, params } from 'http-client';

export const URL = '/oauth/cookies/mobile';

const fetchUser = (cookieToken) => {
  if (!cookieToken) return Observable.throw('[fetchUser] cookieToken is required.');

  const fetch = createFetch(
    method('POST'),
    params({ token: cookieToken }),
    parse('json', 'jsonData'),
  );

  return Observable
    .fromPromise(fetch(URL))
    .pluck('jsonData')
    .pluck('results');
};

export default fetchUser;
