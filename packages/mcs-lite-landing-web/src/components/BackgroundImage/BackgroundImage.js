import React from 'react';
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';

const StyledProgressiveImage = styled(ProgressiveImage)`
  height: 100%;
`;

const BackgroundImage = props =>
  <StyledProgressiveImage
    blur={0.5}
    opacity={1}
    transition="all 0.3 linear"
    component="img"
    {...props}
  />;

export default BackgroundImage;
