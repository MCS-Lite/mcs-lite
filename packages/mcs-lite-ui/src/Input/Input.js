import { PropTypes } from 'react';
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
  height: 32px;
  padding: 0 10px;
  color: ${props => props.theme.color.black};
  border-color: ${props => props.theme.color.grayDark};
  font-size: ${props => props.theme.fontSize.p};

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
};

Input.defaultProps = {
  kind: 'primary',
};
export default Input;
