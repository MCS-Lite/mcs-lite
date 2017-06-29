import styled from 'styled-components';

const ImageLayerWrapper = styled.div`
  position: relative;
  height: 100%;

  > * {
    position: absolute;
    left: 0;
    right: 0;
  }
`;

export default ImageLayerWrapper;
