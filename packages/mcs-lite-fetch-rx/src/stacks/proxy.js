/* global window */
/* eslint no-console: 0 */

import { createStack, base } from 'http-client';

export const API_HOSTNAME = process.env.REACT_APP_API_HOSTNAME || '';

if (process.env.NODE_ENV !== 'production' && !process.env.REACT_APP_API_HOSTNAME) {
  console.error('[Proxy] You must provide "process.env.REACT_APP_API_HOSTNAME"');
}

const proxy = createStack(
  base(API_HOSTNAME),
);

export default proxy;
