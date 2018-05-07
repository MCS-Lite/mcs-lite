// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import InputMultiSelect from '.';
import { type Value } from '../InputOrder/type.flow';

class StatefulInputMultiSelect extends React.Component<
  {},
  { value: Array<Value> },
> {
  state = { value: [] };
  onChange = (value: Array<Value>) => this.setState(() => ({ value }));
  render() {
    const { value } = this.state;
    const { onChange } = this;

    return (
      <InputMultiSelect
        value={value}
        items={[
          { value: 1, children: 'item name 1' },
          { value: 2, children: 'item name item name item name 2' },
          { value: 3, children: 'item name 3' },
          { value: 4, children: 'item name 4' },
          { value: 5, children: '5' },
          { value: 6, children: 'item name 6' },
          { value: 7, children: 'item name item name 7' },
          { value: 8, children: 'item name 7' },
          { value: 9, children: 'item name 7' },
          { value: 10, children: 'item name item nameitem name 7' },
          { value: 11, children: 'item name 7' },
          { value: 12, children: 'item name item nameitem name 7' },
          { value: 13, children: 'item name item name7' },
        ]}
        onChange={onChange}
        {...this.props}
      />
    );
  }
}

storiesOf('InputMultiSelect', module)
  .add(
    'API',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <InputMultiSelect
        value={[2, 1]}
        items={[
          { value: 1, children: 'item name 1' },
          { value: 2, children: 'item name item name item name 2' },
          { value: 3, children: 'item name 3' },
          { value: 4, children: 'item name 4' },
          { value: 5, children: '5' },
          { value: 6, children: 'item name 6' },
          { value: 7, children: 'item name item name 7' },
          { value: 8, children: 'item name 7' },
          { value: 9, children: 'item name 7' },
          { value: 10, children: 'item name item nameitem name 7' },
          { value: 11, children: 'item name 7' },
          { value: 12, children: 'item name item nameitem name 7' },
          { value: 13, children: 'item name item name7' },
        ]}
        onChange={action('onChange')}
      />
    )),
  )
  .add(
    'With state',
    withInfo({
      text: '',
      inline: true,
    })(() => <StatefulInputMultiSelect />),
  )
  .add(
    'With kind props',
    withInfo({
      text: '',
      inline: true,
    })(() => <StatefulInputMultiSelect kind="error" />),
  );
