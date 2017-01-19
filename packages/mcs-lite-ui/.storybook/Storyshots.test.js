import initStoryshots from 'storyshots';

initStoryshots({
  storyRegex: /^((?!\[JSON\]).)*$/, // 不要跑 JSON example
});
