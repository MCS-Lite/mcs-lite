import React from 'react';
import R from 'ramda';
import { storiesOf } from '@kadira/storybook';
import { Picker, PickerContainer } from '.';

class PickerWithState extends React.Component {
  state = { value1: 0, value2: 1, value3: 1, value4: 1, value5: 5 }
  onValue1Change = index => this.setState({ value1: index });
  onValue2Change = index => this.setState({ value2: index });
  onValue3Change = index => this.setState({ value3: index });
  onValue4Change = index => this.setState({ value4: index });
  onValue5Change = index => this.setState({ value5: index });
  render() {
    return (
      <PickerContainer>
        <Picker
          value={this.state.value1}
          onChange={this.onValue1Change}
          labels={['2016', '2017', '2018']}
        />
        <Picker
          value={this.state.value2}
          onChange={this.onValue2Change}
          labels={R.range(1, 13)}
        />
        <Picker
          value={this.state.value3}
          onChange={this.onValue3Change}
          labels={R.range(1, 32)}
        />
        <Picker
          value={this.state.value4}
          onChange={this.onValue4Change}
          labels={R.range(0, 24)}
        />
        <Picker
          value={this.state.value5}
          onChange={this.onValue5Change}
          labels={R.range(0, 60)}
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
