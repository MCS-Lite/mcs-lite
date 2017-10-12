/* global window */

import 'jest-styled-components';
import 'mcs-lite-ui/lib/utils/rafPolyfill';
import './utils/rxjs';

// For signout require comfirm
window.confirm = () => true;

// For toast
jest.mock('uuid/v1', () => () => 'mockUuid()');

// For localstorage driver
window.localStorage = {
  getItem: () => {},
};
