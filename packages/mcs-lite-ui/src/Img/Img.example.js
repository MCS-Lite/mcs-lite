import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Img from '../Img';

const Container = styled.div`
  height: 300px;
`;

const StyledImg = styled(Img)`
  height: 100px;
`;

storiesOf('Img', module)
  .addWithInfo(
    'API',
    'default size="cover"',
    () => (
      <Container>
        <Img src="http://placehold.it/350x150" />
      </Container>
    ),
    { inline: true },
  )
  .addWithInfo(
    'With size props',
    'size="contain"',
    () => (
      <Container>
        <Img src="http://placehold.it/350x150" size="contain" />
      </Container>
    ),
    { inline: true },
  )
  .addWithInfo(
    'With height override',
    'height=100',
    () => <StyledImg src="http://placehold.it/350x150" />,
    { inline: true },
  );
