import React, { PropTypes } from 'react';
import R from 'ramda';
import leftPad from 'left-pad';
import { Picker, PickerContainer } from '../Picker';
import emptyFunction from '../utils/emptyFunction';
import D from './DATE_API';

/**
 * [Timezone]
 *
 * Input: Unix Timestamp (milliseconds)
 * Output: Unix Timestamp (milliseconds)
 *
 * Internal State: Date object (local time)
 * Dislay: in local time
 *
 * @author Michael Hsu
 */

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
    this.state = {
      value: D.from(this.props.defaultValue), // Date object
    };
  }

  onChange = (index, { name }) => {
    const newValue = this.reducer(this.state.value, { name, index });

    this.setState({ value: newValue });
    this.props.onChange(D.to(newValue)); // Remind: prevent mutate
  }

  reducer = (value, { name, index }) => R.cond([
    [R.equals('YEAR'), R.always(D.setYear(this.props.years[index]))],
    [R.equals('MONTH'), R.always(D.setMonth(index))],
    [R.equals('DATE'), R.always(D.setDate(index + 1))],
    [R.equals('HOUR'), R.always(D.setHours(index))],
    [R.equals('MINUTE'), R.always(D.setMinutes(index))],
    [R.T, R.identity],
  ])(name)(value);

  render() {
    const { years } = this.props;
    const { value } = this.state;
    const { onChange } = this;

    return (
      <PickerContainer {...this.props}>
        <Picker
          name="YEAR"
          value={R.findIndex(R.equals(D.getYear(value)))(years)}
          onChange={onChange}
          labels={years}
        />
        <Picker
          name="MONTH"
          value={D.getMonth(value)} // 0 ~ 11
          onChange={onChange}
          labels={R.range(1, 13)} // 1 ~ 12
        />
        <Picker
          name="DATE"
          value={D.getDate(value) - 1}
          onChange={onChange}
          labels={R.range(1, R.pipe(D.endOfMonth, D.getDate, R.inc)(value))}
        />
        <Picker
          name="HOUR"
          value={D.getHours(value)}
          onChange={onChange}
          labels={R.range(0, 24).map(i => leftPad(i, 2, 0))} // 00 ~ 23
        />
        <Picker
          name="MINUTE"
          value={D.getMinutes(value)}
          onChange={onChange}
          labels={R.range(0, 60).map(i => leftPad(i, 2, 0))} // 00 ~ 59
        />
      </PickerContainer>
    );
  }
}

export default DatetimePicker;
