/* global window */

import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './utils/rxjs';

// For signout require comfirm
window.confirm = () => true;

// For Enzyme 3.0
Enzyme.configure({ adapter: new Adapter() });

// For toast
jest.mock('uuid/v1', () => () => 'mockUuid()');

// Enzyme Portals support issue
// https://github.com/airbnb/enzyme/issues/1150
jest.mock('react-overlays/lib/Portal', () => 'mock-portal');

// For localstorage driver
window.localStorage = {
  getItem: () => {},
};
