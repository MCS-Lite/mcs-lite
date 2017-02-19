import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@kadira/storybook';
import MobileDeviceCard from '.';

const StyledMobileDeviceCard = styled(MobileDeviceCard)`
  height: 200px;
`;

storiesOf('MobileDeviceCard', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <MobileDeviceCard
        image="https://img.mediatek.com/600/mtk.linkit/productBanner.png"
        title="範例 B 的測試裝置"
      />,
    { inline: true },
  )
  .addWithInfo(
    'Override height',
    '',
    () =>
      <StyledMobileDeviceCard
        image="https://img.mediatek.com/600/mtk.linkit/productBanner.png"
        title="範例 B 的測試裝置"
      />,
    { inline: true },
  );
