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
    <Button onClick={action('clicked')}>primary (default)</Button>
    <Button onClick={action('clicked')} kind="secondary">secondary</Button>
    <Button onClick={action('clicked')} kind="cancel">cancel</Button>
  </Container>;

const customTheme = {
  backgroundColor: {
    primary: '#F39A1E',
    secondary: '#00A1DE',
    cancel: '#69BE28',
  },
  color: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    cancel: '#FFFFFF',
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
