import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import Img from '../Img';

const Container = styled.div`
  height: 300px;
`;

storiesOf('Img', module)
  .addWithInfo(
    'API',
    'default size="cover"',
    () =>
      <Container>
        <Img src="http://placehold.it/350x150" />
      </Container>,
    { inline: true },
  )
  .addWithInfo(
    'With size props',
    'size="contain"',
    () =>
      <Container>
        <Img src="http://placehold.it/350x150" size="contain" />
      </Container>,
    { inline: true },
  );
