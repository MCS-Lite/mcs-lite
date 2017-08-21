import './src/utils/rafPolyfill';

// For DataChannelCard component.
jest.mock('react-text-truncate', () => 'MockReactTextTruncate');
// For DomAlign, findDOMNode not supported. ref: https://github.com/facebook/react/issues/8324
jest.mock('react-dom');
// For PullToRefresh component.
jest.mock('react-hammerjs', () => 'MockReactHammerJS');
// For recharts
jest.mock('react-resize-detector', () => 'MockReactHammerJS');
// For Icon
jest.mock('react-svg-morph/lib/MorphReplace', () => 'MockMorphReplace');
// For Code
jest.mock('react-syntax-highlighter/dist/highlight', () => () =>
  'MockSyntaxHighlighter',
);
// For Header & some portal to body problems
jest.mock('react-overlays/lib/Portal', () => 'MockPortal');
jest.mock('dom-align');
jest.mock('react-motion-ui-pack');
