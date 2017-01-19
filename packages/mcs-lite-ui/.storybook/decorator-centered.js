import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/default';

export default function (renderStory) {
  return (
    <ThemeProvider theme={theme}>
      {renderStory()}
    </ThemeProvider>
  );
}
