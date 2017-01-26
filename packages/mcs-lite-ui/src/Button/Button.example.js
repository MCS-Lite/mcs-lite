import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import { kindList, darken1, darken2, darken3 } from 'mcs-lite-theme';
import Button from '.';

const Container = styled.div`

  > * {
    margin: 5px;
  }
`;

const KindContainer = () =>
  <Container>
    {
      kindList.map(key =>
        <Button key={key} kind={key} onClick={action(key)}>{key}</Button>,
      )
    }
  </Container>;

const customTheme = {
  color: {
    default: '#FAFAFA',
    primary: '#2196F3',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    black: '#000000',
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
  .addWithInfo(
    'API',
    'Default min-width',
    () => <Button>button</Button>,
    { inline: true },
  )
  .addWithInfo(
    'With block props',
    'different size',
    () =>
      <Container>
        <Button>Button</Button>
        <Button>Simple button</Button>
        <Button block>block</Button>
      </Container>,
    { inline: true },
  )
  .addWithInfo(
    'With kind props',
    '使用內建 kind props 樣式。',
    () => <KindContainer />,
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'With theme provider (Material)',
    '使用全局的 theme 來調整色調。',
    () =>
      <ThemeProvider theme={customTheme}>
        <KindContainer />
      </ThemeProvider>,
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'Overriding style',
    '使用 styled-components 來覆蓋 css。',
    () => <TomatoButton onClick={action('clicked')}>Overriding style</TomatoButton>,
    { inline: true, propTables: false },
  );
