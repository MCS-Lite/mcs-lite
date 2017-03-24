import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import Spin from '.';

const ContentWrapper = styled.div`
  display: inline-block;
`;

storiesOf(
  'Spin',
  module
).addWithInfo(
  'API',
  'Content with display: inline-block;',
  () => (
    <Spin>
      <ContentWrapper>Content</ContentWrapper>
    </Spin>
  ),
  { inline: true }
);
