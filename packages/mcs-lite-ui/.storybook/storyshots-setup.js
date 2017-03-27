import { addDecorator, setAddon } from '@kadira/storybook';
import centered from './decorator-centered';

/**
 * Mocking InfoAddon for preventing big snapshots.
 * ref: https://github.com/storybooks/storyshots/issues/78#issuecomment-278123759
 */
const mockInfoAddon = {
  addWithInfo(storyName, info, storyFn) {
    return this.add(storyName, context => storyFn(context));
  },
};

setAddon(mockInfoAddon);
addDecorator(centered);

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
jest.mock('react-syntax-highlighter/dist/highlight', () => () => 'MockSyntaxHighlighter');
// For Header & some portal to body problems
jest.mock('react-overlays/lib/Portal', () => 'MockPortal');
jest.mock('dom-align');
jest.mock('react-motion-ui-pack');
