/* eslint no-unused-expressions:0 */

import { injectGlobal } from 'styled-components';
import { theme } from 'mcs-lite-theme';

injectGlobal`
  html {
    font-size: ${theme.base.fontSize};
    line-height: ${theme.base.lineHeight};
  }

  body {
    font-family: "Noto Sans TC", "RionaSans", "Helvetica", "微軟正黑體", "Microsoft JhengHei", "黑體-繁", "Heiti TC", "新細明體", "PMingLiU", "sans-serif";
    background-color: ${theme.color.white};
    color: ${theme.base.bodyColor};
  }
`;
