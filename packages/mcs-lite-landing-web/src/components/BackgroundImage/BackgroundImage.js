import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
`;

BackgroundImage.displayName = 'BackgroundImage';
BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default BackgroundImage;
