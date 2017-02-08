import React from 'react';
import styled from 'styled-components';
import { Card, Img, Heading } from 'mcs-lite-ui';
import TextTruncate from 'react-text-truncate';

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

const DeviceCard = ({ title, image }) =>
  <StyledCard>
    <ImageWrapper>
      <Img src={image} />
    </ImageWrapper>
    <ContentWrapper>
      <Heading level={4}>
        <TextTruncate line={4} truncateText=" ..." text={title} />
      </Heading>
    </ContentWrapper>
  </StyledCard>;

export default DeviceCard;
