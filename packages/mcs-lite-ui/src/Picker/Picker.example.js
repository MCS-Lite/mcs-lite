import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Picker, PickerContainer } from '.';

class PickerWithState extends React.Component {
  state = { value1: 0, value2: 1 }
  onValue1Change = index => this.setState({ value1: index });
  onValue2Change = index => this.setState({ value2: index });
  render() {
    return (
      <PickerContainer>
        <Picker
          value={this.state.value1}
          onChange={this.onValue1Change}
          labels={[
            'name 1', 'name 2', 'name 3', 'name 4',
            'name 5', 'name 6', 'name 7', 'name 8',
            'name 9', 'name 10', 'name 11', 'name 12',
          ]}
        />

        <Picker
          value={this.state.value2}
          onChange={this.onValue2Change}
          labels={['name 1', 'name 2', 'name 3', 'name 4']}
        />
      </PickerContainer>
    );
  }
}

storiesOf('Picker', module)
  .addWithInfo(
    'API',
    '',
    () =>
      <PickerContainer>
        <Picker
          value={0}
          labels={['name 1', 'name 2', 'name 3', 'name 4']}
        />
      </PickerContainer>,
    { inline: true },
  )

  .addWithInfo(
    'With multiple picks',
    '',
    () =>
      <PickerContainer>
        <Picker
          value={1}
          labels={['name 1', 'name 2', 'name 3', 'name 4']}
        />
        <Picker
          value={2}
          labels={['name 1', 'name 2', 'name 3', 'name 4']}
        />
      </PickerContainer>,
    { inline: true },
  )

  .addWithInfo(
    'With state',
    '',
    () =>
      <PickerWithState />,
    { inline: true },
  );
