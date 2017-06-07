import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import styled from 'styled-components';
import { IconFold } from 'mcs-lite-icon';
import InputGroup from '../InputGroup';
import Input from '../Input';
import Button from '../Button';

const PLACEHOLDER_VALUE = 'SELECT/PLACEHOLDER_VALUE';

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
`;

export const StyledButton = styled(Button)`
  font-size: 18px;

  > * {
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: ${props => (props.active ? 'rotate(-180deg)' : 'initial')};
  }
`;

class Select extends React.Component {
  static propTypes = {
    kind: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    placeholder: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        children: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      }),
    ).isRequired,
  };
  static defaultProps = {
    kind: 'primary',
    value: '',
  };
  state = { isOpen: false };
  onFocus = () => this.setState({ isOpen: true });
  onBlur = () => this.setState({ isOpen: false });
  valueMapper = value =>
    R.pipe(R.find(R.propEq('value', value)), R.pathOr('', ['children']))(
      this.props.items,
    );
  render() {
    const { isOpen } = this.state;
    const { items, kind, value, placeholder, ...otherProps } = this.props;
    const { onFocus, onBlur, valueMapper } = this;
    return (
      <Wrapper>
        <StyledInputGroup>
          <Input
            kind={kind}
            value={valueMapper(value)}
            placeholder={placeholder}
            readOnly
            focus={isOpen}
          />
          <StyledButton kind={kind} active={isOpen} square>
            <IconFold />
          </StyledButton>
        </StyledInputGroup>

        <StyledSelect
          value={value || PLACEHOLDER_VALUE}
          {...otherProps}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {placeholder &&
            <option value={PLACEHOLDER_VALUE} disabled>{placeholder}</option>}
          {items.map(e => <option key={e.value} {...e} />)}
        </StyledSelect>
      </Wrapper>
    );
  }
}

export default Select;
