import React, { PropTypes } from 'react';
import Switch from '../Switch';

const ControlSwitch = ({ value, onSubmit, ...otherProps }) => (
  <Switch {...otherProps} checked={value} onClick={onSubmit} />
);

ControlSwitch.displayName = 'ControlSwitch';
ControlSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default ControlSwitch;
