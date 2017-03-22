import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import { kindList, darken1, darken2, darken3 } from 'mcs-lite-theme';
import { IconLoading, IconCalendar } from 'mcs-lite-icon';
import Button from '.';
import Spin from '../Spin';

const Container = styled.div`
  > * {
    margin: 5px;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const KindContainer = () =>
  <Container>
    {
      kindList.map(key =>
        <Button key={key} kind={key} onClick={action(`Kind ${key}`)}>{key}</Button>,
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
  min-height: 80px;

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
    'Different size in order: min-width: 80px / auto / 100%.',
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
    'With square props',
    '方',
    () =>
      <Container>
        <Button square>A</Button>
        <Button square kind="default"><IconCalendar /></Button>
      </Container>,
    { inline: true },
  )
  .addWithInfo(
    'With round props',
    '圓',
    () =>
      <Container>
        <Button round>A</Button>
        <Button round kind="default"><IconCalendar /></Button>
      </Container>,
    { inline: true },
  )
  .addWithInfo(
    'With size props',
    '小 (min-width: 40px)',
    () =>
      <Container>
        <Button size="small">Btn</Button>
        <Button size="small" kind="default">Small Button</Button>
      </Container>,
    { inline: true },
  )
  .addWithInfo(
    'With icon inside',
    'loading',
    () =>
      <Button>
        <CenterContainer>
          <Spin>
            <IconLoading />
          </Spin>
          &nbsp;Loading ...
        </CenterContainer>
      </Button>,
    { inline: true },
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
  )
  .addWithInfo(
    'With component props',
    '使用 a tag。',
    () =>
      <Button onClick={action('clicked a')} component="a">
        I am {'<a>'} tag.
      </Button>,
    { inline: true },
  )
  .addWithInfo(
    'With component props - Input submit',
    '',
    () =>
      <Button
        onClick={action('clicked input')}
        component="input"
        type="submit"
        value="Input Submit"
        block
      />,
    { inline: true },
  );
