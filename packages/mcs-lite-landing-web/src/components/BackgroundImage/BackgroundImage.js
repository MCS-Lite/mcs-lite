import React from "react";
import styled from "styled-components";
import ProgressiveImage from "react-progressive-bg-image";

const StyledProgressiveImage = styled(ProgressiveImage)`
  min-height: 100%;
`;

const BackgroundImage = props => (
  <StyledProgressiveImage
    blur={3}
    opacity={0.7}
    transition="all 0.3 linear"
    component="img"
    {...props}
  />
);

export default BackgroundImage;
