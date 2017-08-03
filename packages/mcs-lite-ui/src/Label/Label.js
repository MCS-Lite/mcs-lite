import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  &::after {
    content: "${props => (props.required ? ' *' : '')}";
    color: ${props => props.theme.color.error};
  }
`;

Label.displayName = 'Label';
Label.propTypes = {
  required: PropTypes.bool,
};

export default Label;
