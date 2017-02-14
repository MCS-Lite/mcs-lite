import {
  createStack, createFetch, base, header, parse,
  method, params, body, init,
} from 'http-client';
import devicesJSON from './mocks/devices.api.json';
import deviceDetailJSON from './mocks/D2rbGd3.api.json';

// const commonStack = createStack(
//   base('/v1'),
//   method('GET'),
//   header('Accept', 'application/json'),
//   header('Content-Type', 'application/json'),
//   parse('json', 'jsonData'),
// );
//

const signinMobile = ({ email, password }) => {
  const fetch = createFetch(
    // commonStack,
    method('POST'),
    // body(JSON.stringify({ email, password }), 'application/x-www-form-urlencoded'),
    params({ email, password }),
  );

  return fetch('/oauth/login/mobile');
};

const fetchUser = (cookieToken) => {
  const fetch = createFetch(
    method('POST'),
    params({ token: cookieToken }),
    parse('json', 'jsonData'),
  );

  return fetch('/oauth/cookies/mobile');
};

const fetchDeviceList = () => new Promise(resolve =>
  setTimeout(() => resolve(devicesJSON), (Math.random() * 800)),
);

const fetchDeviceDetail = () => new Promise(resolve =>
  setTimeout(() => resolve(deviceDetailJSON), (Math.random() * 800)),
);

export default {
  signinMobile,
  fetchUser,
  fetchDeviceList,
  fetchDeviceDetail,
};
