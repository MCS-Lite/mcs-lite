// @flow
import * as React from 'react';
import styled from 'styled-components';
import InputOrder, {
  type Props as InputOrderProps,
} from '../InputOrder/InputOrder';
import Checkbox from '../Checkbox';

type Props = $Diff<InputOrderProps, typeof InputOrder.defaultProps>;

const StyledInputOrder = styled(InputOrder)`
  > * {
    margin: 5px 10px;
  }
`;

const InputMultiSelect = (props: Props) => (
  <StyledInputOrder
    {...props}
    itemRenderer={({ value: itemValue }, { value, kind }) => (
      <Checkbox value={value.includes(itemValue)} size={14} kind={kind} />
    )}
  />
);

export default InputMultiSelect;
