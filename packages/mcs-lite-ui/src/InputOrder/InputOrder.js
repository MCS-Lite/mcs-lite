// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import P from '../P';
import Orderbox from '../Orderbox';
import Item from './Item';
import { Container, CheckboxWrapper } from './styled-components';
import { type Value, type ItemProps } from './type.flow';

export const HEIGHT = 192;

class InputOrder extends React.Component<{
  value: Array<Value>,
  onChange: (value: Array<Value>) => Promise<void> | void,
  items: Array<ItemProps>,
  height: number,
  placeholder?: string,
  kind?: string,
}> {
  static defaultProps = {
    height: HEIGHT,
    kind: 'primary',
  };
  onClick = (itemValue: Value) => {
    const { value, onChange } = this.props;
    const index = R.indexOf(itemValue)(value);

    if (index === -1) {
      onChange([...value, itemValue]);
    } else {
      onChange(R.remove(index, 1)(value));
    }
  };
  render() {
    const { items = [], value, height, placeholder, kind } = this.props;
    const { onClick } = this;

    return (
      <Container height={height}>
        {/* Placeholder */}
        {items.length === 0 &&
          placeholder && <P color="grayDark">{placeholder}</P>}

        {/* Item list */}
        {items.length > 0 &&
          items.map(({ value: itemValue, children }: ItemProps) => (
            <Item key={itemValue} value={itemValue} onClick={onClick}>
              <CheckboxWrapper>
                <Orderbox value={R.indexOf(itemValue)(value) + 1} kind={kind} />
              </CheckboxWrapper>
              {children}
            </Item>
          ))}
      </Container>
    );
  }
}

InputOrder.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  onChange: PropTypes.func.isRequired, // (value: Value) => Promise<void> | void,(value: Array<Value>) => Promise<void> | void,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      children: PropTypes.node,
    }),
  ).isRequired,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  kind: PropTypes.string,
};

export default InputOrder;
