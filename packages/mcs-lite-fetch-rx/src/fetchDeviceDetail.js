import { Observable } from 'rxjs/Observable';
import { createFetch, method } from 'http-client';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/pluck';
import bearer from './stacks/bearer';

export const URL = '/devices';

const fetchDeviceDetail = ({ deviceId }, accessToken) => {
  const fetch = createFetch(
    method('GET'),
    bearer(accessToken),
  );

  return Observable
    .fromPromise(fetch(`${URL}/${deviceId}`))
    .switchMap(({ ok, jsonData }) => {
      if (!ok) return Observable.throw(jsonData);
      return Observable.of(jsonData).pluck('data');
    });
};

export default fetchDeviceDetail;
