import React, { PropTypes } from 'react';
import DataChannelCard from '../DataChannelCard';
import Button from '../Button';

class ControlNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultDataPoint.vaue,
    };
  }
  onClick = () => {
    this.props.onChange(this.state.value);
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const { defaultDataPoint, step, ...otherProps } = this.props;
    const { value } = this.state;
    const { onChange, onClick } = this;

    return (
      <DataChannelCard
        {...otherProps}
        subtitle={defaultDataPoint.recordedAt}
      >
        <div>
          <input type="number" value={value} onChange={onChange} step={step} />
          <Button onClick={onClick}>Submit</Button>
        </div>
      </DataChannelCard>
    );
  }
}

ControlNumber.displayName = 'ControlNumber';
ControlNumber.propTypes = {
  defaultDataPoint: PropTypes.object,
  onChange: PropTypes.func,
  step: PropTypes.any.isRequired,
};

ControlNumber.defaultProps = {
  defaultDataPoint: {
    value: false,
    recordedAt: '',
  },
  onChange: () => {},
};

export default ControlNumber;
