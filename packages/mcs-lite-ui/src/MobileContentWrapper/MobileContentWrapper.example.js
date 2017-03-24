import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import MobileContentWrapper from '.';

const Content = styled.div`
  border: 1px dashed ${props => props.theme.color.black};
`;

storiesOf('MobileContentWrapper', module).addWithInfo(
  'API',
  '',
  () => (
    <MobileContentWrapper>
      <Content>
        With max-width
      </Content>
    </MobileContentWrapper>
  ),
  { inline: true }
);
