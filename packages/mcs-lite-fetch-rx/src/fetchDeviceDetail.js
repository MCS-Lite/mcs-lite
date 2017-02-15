import { Observable } from 'rxjs/Observable';
import { createFetch } from 'http-client';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/pluck';
import bearer from './stacks/bearer';
import proxy from './stacks/proxy';

export const URL = '/devices';

const fetchDeviceDetail = ({ deviceId }, accessToken) => {
  const fetch = createFetch(
    bearer(accessToken),
    proxy,
  );

  return Observable
    .fromPromise(fetch(`${URL}/${deviceId}`))
    .pluck('jsonData', 'data');
};

export default fetchDeviceDetail;
