import React, { PropTypes } from 'react';
import R from 'ramda';
import moment from 'moment';
import leftPad from 'left-pad';
import { Picker, PickerContainer } from '../Picker';
import emptyFunction from '../utils/emptyFunction';

class DatetimePicker extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.number.isRequired, // Unix Timestamp (milliseconds)
    onChange: PropTypes.func,                  // (value: number) => void
    years: PropTypes.array,
  }

  static defaultProps = {
    onChange: emptyFunction,
    years: [2016, 2017],
  }

  constructor(props) {
    super(props);
    this.state = { value: moment(this.props.defaultValue) };
  }

  onChange = (index, { name }) => {
    const newValue = this.reducer(this.state.value, { name, index });

    this.setState({ value: newValue });
    this.props.onChange(newValue.clone().valueOf()); // Remind: prevent mutate
  }

  reducer = (value, { name, index }) => {
    switch (name) {
      case 'YEAR':
        return value.clone().year(this.props.years[index]);
      case 'MONTH':
        return value.clone().month(index);
      case 'DATE':
        return value.clone().date(index + 1);
      case 'HOUR':
        return value.clone().hour(index);
      case 'MINUTE':
        return value.clone().minute(index);
      default:
        return value.clone();
    }
  };

  render() {
    const { years } = this.props;
    const { value } = this.state;
    const { onChange } = this;

    return (
      <PickerContainer {...this.props}>
        <Picker
          name="YEAR"
          value={R.findIndex(R.equals(value.get('year')))(years)}
          onChange={onChange}
          labels={years}
        />
        <Picker
          name="MONTH"
          value={value.get('month')} // 0 ~ 11
          onChange={onChange}
          labels={R.range(1, 13)} // 1 ~ 12
        />
        <Picker
          name="DATE"
          value={value.get('date') - 1}
          onChange={onChange}
          labels={R.range(1, value.clone().endOf('month').get('date') + 1)}
        />
        <Picker
          name="HOUR"
          value={value.get('hour')}
          onChange={onChange}
          labels={R.range(0, 24).map(i => leftPad(i, 2, 0))} // 00 ~ 23
        />
        <Picker
          name="MINUTE"
          value={value.get('minute')}
          onChange={onChange}
          labels={R.range(0, 60).map(i => leftPad(i, 2, 0))} // 00 ~ 59
        />
      </PickerContainer>
    );
  }
}

export default DatetimePicker;
