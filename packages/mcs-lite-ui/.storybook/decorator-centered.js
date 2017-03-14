/* eslint no-unused-expressions:0 */
import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import 'normalize.css';

injectGlobal`
  html {
    font-size: ${theme.base.fontSize};
    line-height: ${theme.base.lineHeight};
  }

  body {
    background-color: ${theme.base.bodyBackgroundColor};
    color: ${theme.base.bodyColor};
    padding: 30px;
  }
`;

export default function (renderStory) {
  return (
    <ThemeProvider theme={theme}>
      {renderStory()}
    </ThemeProvider>
  );
}
