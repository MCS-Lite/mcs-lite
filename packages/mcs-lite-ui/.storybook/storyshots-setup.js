import { addDecorator, setAddon } from '@kadira/storybook';
import centered from './decorator-centered';

// 避免 storyshot 會拍到 InfoAddon 附加的結構。
const mockInfoAddon = {
  addWithInfo(storyName, info, storyFn) {
    this.add(storyName, context => storyFn(context));
  },
};

setAddon(mockInfoAddon);
addDecorator(centered);

// For DataChannelCard
jest.mock('react-text-truncate', () => 'MockReactTextTruncate');
// For DomAlign, findDOMNode not supported. ref: https://github.com/facebook/react/issues/8324
jest.mock('react-dom');
