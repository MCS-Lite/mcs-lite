import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import MobileContentWrapper from '.';

const Content = styled.div`
  border: 1px dashed ${props => props.theme.color.black};
`;

storiesOf('MobileContentWrapper', module).add(
  'API',
  withInfo({
    text: '',
    inline: true,
  })(() => (
    <MobileContentWrapper>
      <Content>With max-width</Content>
    </MobileContentWrapper>
  )),
);
