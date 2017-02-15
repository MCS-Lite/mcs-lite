/* global window */

import { createStack, base } from 'http-client';

export const API_HOSTNAME = process.env.REACT_APP_API_HOSTNAME || '';

// console.log(window.API_HOSTNAME)
console.log(process.env.REACT_APP_API_HOSTNAME);
// console.log(process.env.NODE_ENV);

const proxy = createStack(
  base(API_HOSTNAME),
);

export default proxy;
