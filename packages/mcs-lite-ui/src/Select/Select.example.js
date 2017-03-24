import React from 'react';
import { storiesOf } from '@kadira/storybook';
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
  .addWithInfo(
    'API - ReadOnly',
    'React controlled component',
    () =>
      <Select
        value={2}
        readOnly
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />,
    { inline: true },
  )
  .addWithInfo(
    'With kind props',
    '',
    () =>
      <Select
        value={2}
        readOnly
        kind="warning"
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />,
    { inline: true },
  )
  .addWithInfo(
    'With disabled props',
    '',
    () =>
      <StatefulSelect />,
    { inline: true, propTables: [Select]},
  );
