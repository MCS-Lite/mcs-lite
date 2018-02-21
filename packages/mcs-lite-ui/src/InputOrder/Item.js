// @flow
import * as React from 'react';
import { type Value, type ItemProps } from './type.flow';

class Item extends React.Component<
  ItemProps & {
    onClick: Value => Promise<any> | any,
  },
> {
  onClick = () => {
    const { value, onClick } = this.props;
    onClick(value);
  };
  render() {
    const { children } = this.props;
    const { onClick } = this;

    return (
      <div onClick={onClick} onKeyPress={onClick} role="button" tabIndex="0">
        {children}
      </div>
    );
  }
}

export default Item;
