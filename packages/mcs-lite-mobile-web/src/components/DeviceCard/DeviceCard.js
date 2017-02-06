import React from 'react';
import styled from 'styled-components';
import { Card, Img, Heading } from 'mcs-lite-ui';

const StyledCard = styled(Card)`
  height: 112px;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex-grow: 2;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 16px;
`;

const DeviceCard = ({ title, image }) =>
  <StyledCard>
    <ImageWrapper>
      <Img src={image} />
    </ImageWrapper>
    <ContentWrapper>
      <Heading level={3}>
        {title}
      </Heading>
    </ContentWrapper>
  </StyledCard>;

export default DeviceCard;
