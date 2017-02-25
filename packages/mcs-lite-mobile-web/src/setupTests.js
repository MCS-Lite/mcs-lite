/* global window */

import './utils/rxjs';

// For signout require comfirm
window.confirm = () => true;

// For toast
jest.mock('uuid/v1', () => () => 'mockUuid()');
