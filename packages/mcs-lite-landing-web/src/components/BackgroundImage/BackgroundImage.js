import React from 'react';
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';

const StyledProgressiveImage = styled(ProgressiveImage)`
  background-position: center center;
  height: 100%;
  background-size: auto 100%;
`;

const BackgroundImage = props =>
  <StyledProgressiveImage
    blur={0.5}
    opacity={1}
    transition="blur 0.3 linear"
    {...props}
  />;

export default BackgroundImage;
