// Warning: React depends on requestAnimationFrame.
// Make sure that you load a polyfill in older browsers.
// http://fb.me/react-polyfills
import 'raf/polyfill';
import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// For Enzyme 3.0
Enzyme.configure({ adapter: new Adapter() });

// For DataChannelCard component.
jest.mock('react-text-truncate', () => 'mock-react-text-truncate');
// For PullToRefresh/Picker component.
jest.mock('./src/utils/react-hammerjs', () => 'mock-react-hammerjs');
// For recharts
jest.mock('react-resize-detector', () => 'mock-react-resize-detector');
// For Icon
jest.mock('react-svg-morph/lib/MorphReplace', () => 'mock-morph-replace');
// For Code
jest.mock('react-syntax-highlighter/dist/highlight', () => () =>
  'mock-syntax-highlighter',
);
// For Header & some portal to body problems
jest.mock('react-overlays/lib/Portal', () => 'mock-portal');
jest.mock('dom-align');
jest.mock('react-motion-ui-pack');
