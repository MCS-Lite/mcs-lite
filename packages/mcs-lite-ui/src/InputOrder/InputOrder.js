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
export type Props = {
  value: Array<Value>,
  onChange: (value: Array<Value>) => Promise<void> | void,
  items: Array<ItemProps>,
  height: number,
  placeholder?: string,
  kind: string,
  itemRenderer: (
    item: ItemProps,
    props: { value: Array<Value>, kind?: string },
  ) => React.Node,
};

class InputOrder extends React.Component<Props> {
  static defaultProps = {
    height: HEIGHT,
    kind: 'primary',
    itemRenderer: (
      item: ItemProps,
      { value, kind }: { value: Array<Value>, kind?: string },
    ) => <Orderbox value={R.indexOf(item.value)(value) + 1} kind={kind} />,
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
    const {
      items = [],
      value,
      height,
      placeholder,
      kind,
      itemRenderer,
    } = this.props;
    const { onClick } = this;

    return (
      <Container height={height}>
        {/* Placeholder */}
        {items.length === 0 &&
          placeholder && (
            <div>
              <P color="grayBase">{placeholder}</P>
            </div>
          )}

        {/* Item list */}
        {items.length > 0 &&
          items.map((item: ItemProps) => (
            <Item key={item.value} value={item.value} onClick={onClick}>
              <CheckboxWrapper>
                {itemRenderer(item, { value, kind })}
              </CheckboxWrapper>
              {item.children}
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
  itemRenderer: PropTypes.func, // (item: ItemProps, props: any) => React.Node,
};

export default InputOrder;
