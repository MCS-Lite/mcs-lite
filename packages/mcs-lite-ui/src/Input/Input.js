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
  padding: 0 10px;
  min-height: ${props => props.theme.height.normal};
  color: ${props => props.theme.color.black};
  border-color: ${props => props.theme.color.grayDark};
  font-size: ${props => props.theme.fontSize.p};

  &:focus {
    border-color: ${props => props.theme.color[props.kind]};
    box-shadow: 0 0 3px 0 ${props => shadow(props.theme.color[props.kind])};
  }

  /* stylelint-disable selector-no-vendor-prefix */
  &::placeholder,
  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &::-ms-input-placeholder {
    opacity: 1;
    color: ${props => props.theme.color.grayDark};
  }

  /* stylelint-enable */
`;

Input.displayName = 'Input';
Input.propTypes = {
  kind: PropTypes.string,
};

Input.defaultProps = {
  kind: 'primary',
};
export default Input;
