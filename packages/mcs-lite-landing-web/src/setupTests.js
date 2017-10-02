// Warning: React depends on requestAnimationFrame.
// Make sure that you load a polyfill in older browsers.
// http://fb.me/react-polyfills

import 'raf/polyfill';
import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// For Enzyme 3.0
Enzyme.configure({ adapter: new Adapter() });
