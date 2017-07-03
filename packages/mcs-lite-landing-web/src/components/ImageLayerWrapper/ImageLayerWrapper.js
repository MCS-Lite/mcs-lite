import styled from 'styled-components';

const ImageLayerWrapper = styled.div`
  position: relative;
  height: 100%;

  > * {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default ImageLayerWrapper;
