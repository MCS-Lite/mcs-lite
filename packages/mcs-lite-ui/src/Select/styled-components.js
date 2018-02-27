// @flow
import styled from 'styled-components';
import InputGroup from '../InputGroup';
import Button from '../Button';

export const StyledInputGroup = styled(InputGroup)`
  position: absolute;
  width: 100%;
  pointer-events: none;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border: 0;
  height: ${props => props.theme.height.normal};
  background-color: ${props => props.theme.color.white};
  outline: 0;
  font-size: ${props => props.theme.fontSize.p};
  color: ${props => props.theme.color.black};
  appearance: none;
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  font-size: 18px;
  color: ${props => props.theme.color.white};
`;
