import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

/**
 * Languages supports for react-intl
 * ref: https://github.com/yahoo/react-intl/wiki#locale-data-in-browsers
 */

addLocaleData([...en, ...zh]);
addLocaleData({ locale: 'zh-TW', parentLocale: 'zh' });
addLocaleData({ locale: 'zh-CN', parentLocale: 'zh-TW' });
