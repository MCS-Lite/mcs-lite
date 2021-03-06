import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import DatetimePickerDialog from '.';
import Input from '../Input';

storiesOf('DatetimePickerDialog', module).add(
  'API',
  withInfo({
    text: `
      ~~~js
      function onSubmit(value: number): void {} // Unix Timestamp (milliseconds)
      ~~~
    `,

    inline: true,
    propTables: [DatetimePickerDialog],
  })(() => {
    class StatefulDatetimePickerDialog extends React.Component {
      state = { show: false, value: 1463556631722 };
      onShow = () => this.setState({ show: true });
      onHide = () => this.setState({ show: false });
      onSubmit = value => {
        this.setState({ value });
        action(
          'DatetimePickerDialog onSubmit(value: number) Unix Timestamp (milliseconds)',
        )(value);
      };
      render() {
        return (
          <div>
            <Input
              onClick={this.onShow}
              value={new Date(this.state.value).toISOString()}
              readOnly
            />

            <DatetimePickerDialog
              datetimePickerProps={{
                defaultValue: this.state.value,
                years: [2015, 2016, 2017, 2018],
              }}
              show={this.state.show}
              onHide={this.onHide}
              onSubmit={this.onSubmit}
            />
          </div>
        );
      }
    }

    return <StatefulDatetimePickerDialog />;
  }),
);
