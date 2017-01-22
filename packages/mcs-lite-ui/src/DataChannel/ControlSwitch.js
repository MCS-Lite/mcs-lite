import React, { PropTypes } from 'react';
import styled from 'styled-components';
import DataChannelCard from '../DataChannelCard';
import Switch from '../Switch';

class ControlSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultDataPoint.vaue,
    };
  }
  onClick = () => {
    const value = !this.state.value;
    this.props.onChange(value);

    this.setState({ value });
  }

  render() {
    const { defaultDataPoint, ...otherProps } = this.props;
    const { value } = this.state;

    return (
      <DataChannelCard
        {...otherProps}
        subtitle={defaultDataPoint.recordedAt}
      >
        <Switch
          checked={value}
          onClick={this.onClick}
        />
      </DataChannelCard>
    );
  }
}

ControlSwitch.displayName = 'ControlSwitch';
ControlSwitch.propTypes = {
  defaultDataPoint: PropTypes.object,
  onChange: PropTypes.func,
};

ControlSwitch.defaultProps = {
  defaultDataPoint: {
    value: false,
    recordedAt: '',
  },
  onChange: () => {},
};

export default ControlSwitch;
