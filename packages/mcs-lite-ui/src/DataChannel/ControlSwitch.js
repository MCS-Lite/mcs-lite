import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../Switch';

const ControlSwitch = ({ value, onSubmit, ...otherProps }) =>
  <Switch {...otherProps} checked={value} onClick={onSubmit} />;

ControlSwitch.displayName = 'ControlSwitch';
ControlSwitch.propTypes = {
  value: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default ControlSwitch;
