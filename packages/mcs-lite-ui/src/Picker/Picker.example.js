import React from 'react';
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
          labels={['Apple', 'Pen', 'Apple pen', 'Pineapple']}
        />
        <Picker
          name="picker2"
          value={this.state.picker2}
          onChange={this.onChange}
          labels={['PPAP', 'PAPA']}
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
    () => <StatefulPicker />,
    { inline: true, propTables: [Picker]},
  );
