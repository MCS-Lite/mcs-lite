// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import { StyledLabel } from './styled-components';

const InputCheckbox = ({
  value,
  onChange,
  children,
  ...otherProps
}: {
  value: boolean,
  onChange: (value: boolean) => Promise<void> | void,
  children: React.Node,
}) => (
  <StyledLabel onClick={onChange}>
    <Checkbox value={value} {...otherProps} />
    {children}
  </StyledLabel>
);

InputCheckbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputCheckbox;
