import { Observable } from 'rxjs/Observable';
import { createFetch, method } from 'http-client';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/pluck';
import bearer from './stacks/bearer';

export const URL = '/devices';

const fetchDeviceList = (accessToken) => {
  const fetch = createFetch(
    method('GET'),
    bearer(accessToken),
  );

  return Observable
    .fromPromise(fetch(URL))
    .switchMap(({ ok, jsonData }) => {
      if (!ok) return Observable.throw(jsonData);
      return Observable.of(jsonData).pluck('data');
    });
};

export default fetchDeviceList;
