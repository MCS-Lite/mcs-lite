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
