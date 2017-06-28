// @flow
import R from 'ramda';

type LocaleMapper = string => string => string;
type GetMCSLinkByLocale = string => string;

export const LOCALES = [
  {
    id: 'en',
    children: 'English',
  },
  {
    id: 'zh-TW',
    children: '繁體中文',
  },
  {
    id: 'zh-CN',
    children: '简体中文',
  },
];

export const localeMapper: LocaleMapper = defaultLocale =>
  R.memoize(string =>
    R.cond([
      [R.test(/^en/gi), R.always('en')],
      [R.test(/^zh-TW/gi), R.always('zh-TW')],
      [R.test(/^zh-CN/gi), R.always('zh-CN')],
      [R.test(/^zh/gi), R.always('zh-TW')],
      [R.T, R.always(defaultLocale)],
    ])(string),
  );

export const getMCSLinkByLocale: GetMCSLinkByLocale = R.memoize(locale =>
  R.cond([
    [R.equals('en'), R.always('https://mcs.mediatek.com/')],
    [R.equals('zh-CN'), R.always('https://mcs.mediatek.cn/')],
    [R.T, l => `https://mcs.mediatek.com/${l}/`],
  ])(locale),
);
