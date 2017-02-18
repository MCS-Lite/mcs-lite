import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DatetimePickerDialog from '.';
import Input from '../Input';

storiesOf('DatetimePickerDialog', module)
  .addWithInfo(
    'API',
    '',
    () => {
      class StatefulDatetimePickerDialog extends React.Component {
        state = { show: false, value: new Date(1463556631722).valueOf() };
        onShow = () => this.setState({ show: true });
        onHide = () => this.setState({ show: false });
        onSubmit = value => this.setState({ value });
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
    },
    { inline: true, propTables: [DatetimePickerDialog]},
  );
