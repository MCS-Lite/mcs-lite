import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageLayerWrapper = styled.div`
  position: relative;
  height: ${props => props.height}px;

  > * {
    position: absolute;
    left: 0;
    right: 0;
  }
`;

ImageLayerWrapper.displayName = 'ImageLayerWrapper';
ImageLayerWrapper.propTypes = {
  height: PropTypes.number.isRequired,
};

export default ImageLayerWrapper;
