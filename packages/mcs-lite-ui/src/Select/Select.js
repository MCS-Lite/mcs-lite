import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { opacity } from 'mcs-lite-theme';
import InputGroup from '../InputGroup';
import Input from '../Input';
import Button from '../Button';

const StyledInputGroup = styled(InputGroup)`
  position: absolute;
  width: 100%;
  pointer-events: none;
`;

const shadow = opacity(0.5);

const Wrapper = styled.div`
  position: relative;
  ${''/* box-sizing: border-box; */}
  ${''/* width: 100%; */}
  ${''/* border-width: 1px; */}
  ${''/* border-style: solid; */}
  ${''/* border-radius: 3px; */}
  ${''/* outline: 0; */}
  ${''/* height: ${props => props.theme.height.normal}; */}
  ${''/* border-color: ${props => props.theme.color.grayDark}; */}
  ${''/* background-color: ${props => props.theme.color.white}; */}
  ${''/* background-color: red; */}
  ${''/* padding-right: 10px; */}

  > select {
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

    &:focus {
      border-color: ${props => props.theme.color[props.kind]};
      box-shadow: 0 0 3px 0 ${props => shadow(props.theme.color[props.kind])};
      outline: none;
    }
  }
`;

const Select = ({ items, kind, ...otherProps }) =>
  <Wrapper kind={kind}>
    <StyledInputGroup>
      <Input />
      <Button square>V</Button>
    </StyledInputGroup>
    <select {...otherProps}>
      {
        items.map(i => (
          <option value={i.value}>{i.children}</option>
        ))
      }
    </select>
  </Wrapper>;

Select.displayName = 'Select';
Select.propTypes = {
  kind: PropTypes.string,
};

Select.defaultProps = {
  kind: 'primary',
};

export default Select;
