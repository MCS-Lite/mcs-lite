import { Observable } from 'rxjs/Observable';
import { createFetch } from 'http-client';
import bearer from './utils/bearer';

export const URL = '/devices';

const fetchUser = (accessToken) => {
  const fetch = createFetch(
    bearer(accessToken),
  );

  return Observable
    .fromPromise(fetch(URL))
    .pluck('jsonData', 'data');
};

export default fetchUser;
