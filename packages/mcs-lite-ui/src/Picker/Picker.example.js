import React from 'react';
import R from 'ramda';
import { storiesOf } from '@kadira/storybook';
import { Picker, PickerContainer } from '.';

class StatefulPicker extends React.Component {
  state = { picker1: 0, picker2: 1 }
  onChange = (index, props) => this.setState({ [props.name]: index })
  render() {
    return (
      <PickerContainer>
        <Picker
          name="picker1"
          value={this.state.picker1}
          onChange={this.onChange}
          labels={['2016', '2017', '2018']}
        />
        <Picker
          name="picker2"
          value={this.state.picker2}
          onChange={this.onChange}
          labels={R.range(1, 13)}
        />
      </PickerContainer>
    );
  }
}

storiesOf('Picker', module)
  .addWithInfo(
    'API',
    `
      ~~~js
      function onChange(index: number, props: object): void {}
      ~~~
    `,
    () =>
      <StatefulPicker />,
    { inline: true, propTables: [Picker]},
  );
