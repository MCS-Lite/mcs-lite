/* eslint no-unused-expressions:0 */

import { injectGlobal } from 'styled-components';
import mobileTheme from './utils/mobileTheme';

injectGlobal`
  html {
    font-size: ${mobileTheme.base.fontSize};
    line-height: ${mobileTheme.base.lineHeight};
  }

  body {
    font-family: "Noto Sans TC", "RionaSans", "Helvetica", "微軟正黑體", "Microsoft JhengHei", "黑體-繁", "Heiti TC", "新細明體", "PMingLiU", "sans-serif";
    background-color: ${mobileTheme.base.bodyBackgroundColor};
    color: ${mobileTheme.base.bodyColor};
  }

  ${''/* DO NOT use 100vh for mobile (safari) */}
  html,
  body,
  body > div:first-child {
    height: 100%;
  }
`;
