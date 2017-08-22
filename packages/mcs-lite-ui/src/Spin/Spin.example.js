import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Spin from '.';

const ContentWrapper = styled.div`
  display: inline-block;
`;

storiesOf('Spin', module).add(
  'API',
  withInfo({
    text: `Content with display: inline-block;
  SVG Icon 請使用偶數（Safari）
`,
    inline: true,
  })(() =>
    <Spin>
      <ContentWrapper>Content</ContentWrapper>
    </Spin>,
  ),
);
