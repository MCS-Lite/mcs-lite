// @flow
import * as React from 'react';
import InputOrder, {
  type Props as InputOrderProps,
} from '../InputOrder/InputOrder';
import Checkbox from '../Checkbox';

type Props = $Diff<InputOrderProps, typeof InputOrder.defaultProps>;

const InputMultiSelect = (props: Props) => (
  <InputOrder
    {...props}
    itemRenderer={({ value: itemValue }, { value, kind }) => (
      <Checkbox value={value.includes(itemValue)} size={14} kind={kind} />
    )}
  />
);

export default InputMultiSelect;
