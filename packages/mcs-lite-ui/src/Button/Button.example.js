import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import Button from './index';
import { darken1, darken2, darken3 } from '../utils/darken';

const Container = styled.div`

  > * {
    margin: 5px;
  }
`;

const KindContainer = () =>
  <Container>
    <Button onClick={action('clicked')} kind="default">default</Button>
    <Button onClick={action('clicked')} kind="primary">primary</Button>
    <Button onClick={action('clicked')} kind="success">success</Button>
    <Button onClick={action('clicked')} kind="error">error</Button>
    <Button onClick={action('clicked')} kind="warning">warning</Button>
  </Container>;

const customTheme = {
  color: {
    default: '#FAFAFA',
    primary: '#00A1DE',
    success: '#69BE28',
    error: '#F5364E',
    warning: '#F39A1E',
    black: '#353630',
    grayBase: '#999A94',
    grayDark: '#D1D2D3',
    grayLight: '#FAFAFA',
    white: '#FFFFFF',
  },
  base: {
    bodyBackground: '#F1F2F7',
    textColor: '#353630',
  },
  fontSize: {
    p: '16px',
    h4: '18px',
    h3: '22px',
    h2: '26px',
    h1: '34px',
  },
};

const TomatoButton = styled(Button)`
  font-size: 56px;
  color: #FFFFFF;
  border-radius: 6px;
  border-color: ${darken3('tomato')};
  background-color: tomato;

  &:hover {
    background-color: ${darken1('tomato')};
  }

  &:active {
    background-color: ${darken2('tomato')};
  }
`;

storiesOf('Button', module)
  .add('With kind props', () =>
    <KindContainer />,
  )
  .add('With theme provider', () =>
    <ThemeProvider theme={customTheme}>
      <KindContainer />
    </ThemeProvider>,
  )
  .add('Overriding style', () =>
    <TomatoButton onClick={action('clicked')}>Overriding style</TomatoButton>,
  );
