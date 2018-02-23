// Warning: React depends on requestAnimationFrame.
// Make sure that you load a polyfill in older browsers.
// http://fb.me/react-polyfills
import 'raf/polyfill';
import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// For Enzyme 3.0
Enzyme.configure({ adapter: new Adapter() });

/**
 * Hint: mock for snapshot
 * ref: https://github.com/storybooks/storybook/issues/1011#issuecomment-322698049
 */
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

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
// For rc-tween-one
jest.mock('react-overlay-pack/lib/Transition/index', () => 'mock-transition');

// TODO: For svgr.macro (CRA mono jest problem)
jest.mock('./src/ImageDropzone/Image', () => 'Image-svgr.macro');
jest.mock('./src/Logo/MCS', () => 'MCS-svgr.macro');
jest.mock('./src/Popover/Arrow', () => 'Arrow-svgr.macro');
jest.mock('./src/Tooltip/Arrow', () => 'Arrow-svgr.macro');
jest.mock('./src/Checkbox/IconCheck', () => 'IconCheck.macro');
