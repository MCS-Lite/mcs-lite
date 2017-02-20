/* eslint no-unused-expressions:0 */

import 'normalize.css';
import { injectGlobal } from 'styled-components';
import mobileTheme from './utils/mobileTheme';

injectGlobal`

  @font-face {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    src:
      url("//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2") format("woff2"),
      url("//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff") format("woff"),
      url("//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.otf") format("opentype");
  }

  @font-face {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 700;
    src:
      url("//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2") format("woff2"),
      url("//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff") format("woff"),
      url("//fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.otf") format("opentype");
  }

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
