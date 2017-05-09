/* eslint no-unused-expressions:0 */

import { injectGlobal } from 'styled-components';
import { theme } from 'mcs-lite-theme';

injectGlobal`
  html {
    font-size: ${theme.base.fontSize};
    line-height: ${theme.base.lineHeight};
    min-width: 640px;
  }

  body {
    font-family: "Noto Sans TC", "RionaSans", "Helvetica", "微軟正黑體", "Microsoft JhengHei", "黑體-繁", "Heiti TC", "新細明體", "PMingLiU", "sans-serif";
    background-color: ${theme.color.white};
    color: ${theme.base.bodyColor};

    ${/* Remind: We need this for normalize.css ^6.0.0 */ ''}
    margin: 0;
  }

  ${/* DO NOT use 100vh for mobile (safari) */ ''}
  html,
  body,
  body > div:first-child {
    height: 100%;
  }
`;
