import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Picker, PickerContainer } from '.';

class StatefulPicker extends React.Component {
  state = { picker1: 0, picker2: 1 };
  onChange = (index, props) => {
    this.setState({ [props.name]: index });
    action('Picker onChange(index: number, props: object)')(index, props);
  };
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

storiesOf('Picker', module).add(
  'API',
  withInfo({
    text: `
      ~~~js
      function onChange(index: number, props: object): void {}
      ~~~
    `,

    inline: true,
    propTables: [Picker],
  })(() => <StatefulPicker />),
);
