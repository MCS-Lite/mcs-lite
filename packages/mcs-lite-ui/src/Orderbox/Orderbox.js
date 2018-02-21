// @flow
import * as React from 'react';
import Checkbox, { type Props } from '../Checkbox/Checkbox';

const numberRenderer = (value: number): React.Node => {
  const checked = typeof value === 'number' && value > 0;
  return checked ? value : null;
};

const Orderbox = (props: Props) => (
  <Checkbox render={numberRenderer} size={18} {...props} />
);

export default Orderbox;
