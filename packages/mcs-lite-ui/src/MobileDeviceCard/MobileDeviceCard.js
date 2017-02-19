import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';
import Card from '../Card';
import Img from '../Img';
import Heading from '../Heading';

const StyledCard = styled(Card)`
  height: 120px;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex-grow: 2;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 8px;
`;

const MobileDeviceCard = ({ title, image, ...otherProps }) =>
  <StyledCard {...otherProps}>
    <ImageWrapper>
      <Img src={image} />
    </ImageWrapper>

    <ContentWrapper>
      <Heading level={4} color="black">
        <TextTruncate line={4} truncateText=" ..." text={title} />
      </Heading>
    </ContentWrapper>
  </StyledCard>;

MobileDeviceCard.displayName = 'MobileDeviceCard';
MobileDeviceCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MobileDeviceCard;
