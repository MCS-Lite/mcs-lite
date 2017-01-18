import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../src/themes/default';

const Center = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function (renderStory) {
  return (
    <ThemeProvider theme={theme}>
      <Center>
        {renderStory()}
      </Center>
    </ThemeProvider>
  );
}
