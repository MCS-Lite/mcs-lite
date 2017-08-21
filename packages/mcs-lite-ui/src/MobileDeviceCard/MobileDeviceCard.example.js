import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import MobileDeviceCard from '.';

const StyledMobileDeviceCard = styled(MobileDeviceCard)`
  height: 200px;
`;

storiesOf('MobileDeviceCard', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <MobileDeviceCard
        image="https://img.mediatek.com/600/mtk.linkit/productBanner.png"
        title="範例 B 的測試裝置"
      />,
    ),
  )
  .add(
    'Override height',
    withInfo({
      text: '',
      inline: true,
    })(() =>
      <StyledMobileDeviceCard
        image="https://img.mediatek.com/600/mtk.linkit/productBanner.png"
        title="範例 B 的測試裝置"
      />,
    ),
  );
