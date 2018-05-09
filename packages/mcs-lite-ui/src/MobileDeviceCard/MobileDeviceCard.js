import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';
import Card from '../Card';
import Img from '../Img';
import Heading from '../Heading';

export const StyledCard = Card.extend`
  height: 120px;
  display: flex;
`;

export const ImageWrapper = styled.div`
  flex-grow: 2;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 8px;
`;

const MobileDeviceCard = ({ title, image, ...otherProps }) => (
  <StyledCard {...otherProps}>
    <ImageWrapper>
      <Img src={image} />
    </ImageWrapper>

    <ContentWrapper>
      <Heading level={4} color="black">
        <TextTruncate line={4} truncateText=" ..." text={title} />
      </Heading>
    </ContentWrapper>
  </StyledCard>
);

MobileDeviceCard.displayName = 'MobileDeviceCard';
MobileDeviceCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MobileDeviceCard;
