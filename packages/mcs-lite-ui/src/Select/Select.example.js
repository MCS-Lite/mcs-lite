import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Select from '.';

class StatefulSelect extends React.Component {
  state = { value: '' };
  onChange = e => this.setState({ value: parseFloat(e.target.value, 10) });
  render() {
    return (
      <Select
        value={this.state.value}
        onChange={this.onChange}
        placeholder="選擇資料通道"
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
          { value: 3, children: 'value 3', disabled: true },
        ]}
      />
    );
  }
}

storiesOf('Select', module)
  .add(
    'API - ReadOnly',
    withInfo({
      text: 'React controlled component',
      inline: true,
    })(() => (
      <Select
        value={2}
        readOnly
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    )),
  )
  .add(
    'With kind props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <Select
        value={2}
        readOnly
        kind="warning"
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    )),
  )
  .add(
    'With required props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <Select
        value={2}
        readOnly
        required
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    )),
  )
  .add(
    'With disabled props',
    withInfo({
      text: '',
      inline: true,
      propTables: [Select],
    })(() => <StatefulSelect />),
  )
  .add(
    'With focus props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <Select
        value={2}
        readOnly
        focus
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    )),
  );
