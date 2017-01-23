import React, { PropTypes } from 'react';
import DataChannelCard from '../DataChannelCard';

const withDataChannelCard = (BaseComponent, displayName) => {
  const WrapperComponent = ({ childrenProps, ...otherProps }) =>
    <DataChannelCard {...otherProps}>
      <BaseComponent {...childrenProps} />
    </DataChannelCard>;

  WrapperComponent.displayName = displayName || `withDataChannelCard(${BaseComponent.displayName})`;
  WrapperComponent.propTypes = {
    childrenProps: PropTypes.any,
  };

  WrapperComponent.defaultProps = {
    childrenProps: {},
  };

  return WrapperComponent;
};

export default withDataChannelCard;
