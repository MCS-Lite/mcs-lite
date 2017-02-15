import React from 'react';
import DataChannelCard from './DataChannelCard';

const withDataChannelCard = dataChannelCardProps => (BaseComponent) => {
  const WrapperComponent = props =>
    <DataChannelCard {...dataChannelCardProps} {...props}>
      <BaseComponent />
    </DataChannelCard>;

  WrapperComponent.displayName = `withDataChannelCard(${BaseComponent.displayName})`;

  return WrapperComponent;
};

export default withDataChannelCard;
