import React, { PropTypes } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { IconFold } from 'mcs-lite-icon';
import InputGroup from '../InputGroup';
import Input from '../Input';
import Button from '../Button';

const PLACEHOLDER_VALUE = 'SELECT/PLACEHOLDER_VALUE';

const StyledInputGroup = styled(InputGroup)`
  position: absolute;
  width: 100%;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  ${''/* opacity: 0.5; */}
  ${''/* background-color: red; */}
  width: 100%;
  ${''/* padding: 0 10px; */}
  border: 0;
  height: ${props => props.theme.height.normal};
  background-color: ${props => props.theme.color.white};
  outline: 0;
  font-size: ${props => props.theme.fontSize.p};
  color: ${props => props.theme.color.black};

  ${''/* &:focus {
    border-color: ${props => props.theme.color[props.kind]};
    box-shadow: 0 0 3px 0 ${props => shadow(props.theme.color[props.kind])};
    outline: none;
  } */}
`;

const StyledButton = styled(Button)`
  font-size: 18px;
`;

const Select = ({ items, kind, value, placeholder, ...otherProps }) =>
  <Wrapper kind={kind}>
    <StyledInputGroup>
      <Input
        value={
          R.pipe(
            R.find(R.propEq('value', value)),
            R.pathOr('', ['children']),
          )(items)
        }
        placeholder={placeholder}
        readOnly
      />
      <StyledButton square><IconFold /></StyledButton>
    </StyledInputGroup>

    <StyledSelect
      value={value || PLACEHOLDER_VALUE}
      {...otherProps}
      onFocus={console.log}
      onBlur={console.log}
    >
      {placeholder && <option value={PLACEHOLDER_VALUE} disabled>{placeholder}</option>}
      {items.map(e => <option key={e.value} {...e} />)}
    </StyledSelect>
  </Wrapper>;

Select.displayName = 'Select';
Select.propTypes = {
  kind: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  valueMapper: PropTypes.func.isRequired, // value => string
};

Select.defaultProps = {
  kind: 'primary',
  value: '',
  valueMapper: R.identity,
};

export default Select;
