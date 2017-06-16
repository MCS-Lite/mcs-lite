import R from 'ramda';

const localeMapper = R.memoize(defaultLocale =>
  R.cond([
    [R.test(/^en/gi), R.always('en')],
    [R.test(/^zh-TW/gi), R.always('zh-TW')],
    [R.test(/^zh-CN/gi), R.always('zh-CN')],
    [R.test(/^zh/gi), R.always('zh-TW')],
    [R.T, R.always(defaultLocale)],
  ]),
);

export default localeMapper;
