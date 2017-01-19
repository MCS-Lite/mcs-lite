/* eslint no-unused-expressions:0 */
import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../src/themes/default';

injectGlobal`

  html {
    font-size: ${theme.base.fontSize};
  }

  body {
    ${''/* font-family: 'Courier New', sans-serif; */}
    background-color: ${theme.base.bodyBackground};
  }
`;

export default function (renderStory) {
  return (
    <ThemeProvider theme={theme}>
      {renderStory()}
    </ThemeProvider>
  );
}
