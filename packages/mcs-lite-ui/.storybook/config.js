import { configure } from '@kadira/storybook';

const context = require.context('../src/', true, /\.example\.js$/);


function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
