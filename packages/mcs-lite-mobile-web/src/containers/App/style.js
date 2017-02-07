/* eslint no-unused-expressions:0 */

import 'normalize.css';
import 'typeface-noto-sans-tc/index.css';
import { injectGlobal } from 'styled-components';
import { theme } from 'mcs-lite-theme';

injectGlobal`
  html {
    font-size: ${theme.base.fontSize};
    line-height: ${theme.base.lineHeight};
  }

  body {
    font-family: "Noto Sans TC", "RionaSans", "Helvetica", "微軟正黑體", "Microsoft JhengHei", "黑體-繁", "Heiti TC", "新細明體", "PMingLiU", "sans-serif";
    background-color: ${theme.base.bodyBackgroundColor};
    color: ${theme.base.bodyColor};
  }
`;
