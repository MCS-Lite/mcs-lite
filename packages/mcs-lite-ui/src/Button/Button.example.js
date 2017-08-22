import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
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
    {kindList.map(key =>
      <Button key={key} kind={key} onClick={action(`Kind ${key}`)}>
        {key}
      </Button>,
    )}
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
  .add(
    'API',
    withInfo({
      text: 'Default min-width',
      inline: true,
    })(() => <Button>button</Button>),
  )
  .add(
    'With block props',
    withInfo({
      text: 'Different size in order: min-width: 80px / auto / 100%.',
      inline: true,
    })(() =>
      <Container>
        <Button>Button</Button>
        <Button>Simple button</Button>
        <Button block>block</Button>
      </Container>,
    ),
  )
  .add(
    'With kind props',
    withInfo({
      text: '使用內建 kind props 樣式。',
      inline: true,
      propTables: false,
    })(() => <KindContainer />),
  )
  .add(
    'With square props',
    withInfo({
      text: '方',
      inline: true,
    })(() =>
      <Container>
        <Button square>A</Button>
        <Button square kind="default"><IconCalendar /></Button>
      </Container>,
    ),
  )
  .add(
    'With round props',
    withInfo({
      text: '圓',
      inline: true,
    })(() =>
      <Container>
        <Button round>A</Button>
        <Button round kind="default"><IconCalendar /></Button>
      </Container>,
    ),
  )
  .add(
    'With size props',
    withInfo({
      text: '小 (min-width: 40px)',
      inline: true,
    })(() =>
      <Container>
        <Button size="small">Btn</Button>
        <Button size="small" kind="default">Small Button</Button>
      </Container>,
    ),
  )
  .add(
    'With active props',
    withInfo({
      text: '',
      inline: true,
    })(() => <Button active>Active</Button>),
  )
  .add(
    'With disabled props',
    withInfo({
      text: '',
      inline: true,
    })(() => <Button disabled>Disabled</Button>),
  )
  .add(
    'With icon inside',
    withInfo({
      text: 'loading',
      inline: true,
    })(() =>
      <Button>
        <CenterContainer>
          <Spin>
            <IconLoading size={14} />
          </Spin>
          &nbsp;Loading ...
        </CenterContainer>
      </Button>,
    ),
  )
  .add(
    'With theme provider (Material)',
    withInfo({
      text: '使用全局的 theme 來調整色調。',
      inline: true,
      propTables: false,
    })(() =>
      <ThemeProvider theme={customTheme}>
        <KindContainer />
      </ThemeProvider>,
    ),
  )
  .add(
    'Overriding style',
    withInfo({
      text: '使用 styled-components 來覆蓋 css。',
      inline: true,
      propTables: false,
    })(() =>
      <TomatoButton onClick={action('clicked')}>Overriding style</TomatoButton>,
    ),
  )
  .add(
    'With component props',
    withInfo({
      text: '使用 a tag。',
      inline: true,
    })(() =>
      <Button onClick={action('clicked a')} component="a">
        I am {'<a>'} tag.
      </Button>,
    ),
  )
  .add(
    'With component props - Input submit',
    withInfo({
      text: '',
      // inline: true,
    })(() =>
      <Button
        onClick={action('clicked input')}
        component="input"
        type="submit"
        value="Input Submit"
        block
      />,
    ),
  );
