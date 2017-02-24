import { Observable } from 'rxjs/Observable';
import { createFetch, method } from 'http-client';
import 'rxjs/add/observable/fromPromise';
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
    .pluck('jsonData', 'data');
};

export default fetchDeviceDetail;
