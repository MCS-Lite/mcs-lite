import styled from 'styled-components';
import TextCenter from 'mcs-lite-ui/lib/TextCenter';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';

export const ScrollParallaxMachine = styled(ScrollParallax)`
  transform-origin: 143px 0;
`;

export const BackgroundOverlay = styled.div`
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 2%, rgba(255, 255, 255, 0) 8%, rgba(255, 255, 255, 0) 92%, rgba(255, 255, 255, 1) 98%);
  height: 100%;
  left: -10px;
  right: -10px;
`;

export const StyledTextCenter = styled(TextCenter)`
  overflow-x: hidden;
`;
