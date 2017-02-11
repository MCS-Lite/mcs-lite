import devicesJSON from './mocks/devices.api.json';
import deviceDetailJSON from './mocks/D2rbGd3.api.json';

const fetchDeviceList = () => new Promise(resolve =>
  setTimeout(() => resolve(devicesJSON), (Math.random() * 800)),
);

const fetchDeviceDetail = () => new Promise(resolve =>
  setTimeout(() => resolve(deviceDetailJSON), (Math.random() * 800)),
);

export default {
  fetchDeviceList,
  fetchDeviceDetail,
};
