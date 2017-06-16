import R from 'ramda';

const localeMapper = defaultLocale =>
  R.memoize(string =>
    R.cond([
      [R.test(/^en/gi), R.always('en')],
      [R.test(/^zh-TW/gi), R.always('zh-TW')],
      [R.test(/^zh-CN/gi), R.always('zh-CN')],
      [R.test(/^zh/gi), R.always('zh-TW')],
      [R.T, R.always(defaultLocale)],
    ])(string),
  );

export default localeMapper;
