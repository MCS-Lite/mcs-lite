import PropTypes from 'prop-types';
import styled from 'styled-components';
import { opacity } from 'mcs-lite-theme';

const shadow = opacity(0.5);

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  outline: 0;
  padding: 0 10px;
  line-height: 1;
  min-height: ${props => props.theme.height.normal};
  color: ${props => props.theme.color.black};
  font-size: ${props => props.theme.fontSize.p};
  border-color: ${props =>
    props.focus ? props.theme.color[props.kind] : props.theme.color.grayDark};
  box-shadow: ${props =>
    props.focus
      ? `0 0 3px 0 ${shadow(props.theme.color[props.kind])}`
      : 'none'};

  &:focus {
    border-color: ${props => props.theme.color[props.kind]};
    box-shadow: 0 0 3px 0 ${props => shadow(props.theme.color[props.kind])};
  }

  &::placeholder {
    opacity: 1;
    color: ${props => props.theme.color.grayDark};
  }
`;

Input.displayName = 'Input';
Input.propTypes = {
  kind: PropTypes.string,
  focus: PropTypes.bool,
};

Input.defaultProps = {
  kind: 'primary',
  focus: false,
};
export default Input;
