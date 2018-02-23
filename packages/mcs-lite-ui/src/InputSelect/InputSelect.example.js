// @flow
import * as React from 'react';
import * as R from 'ramda';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import InputSelect from '.';
import { type Value } from './type.flow';

class StatefulInputSelect extends React.Component<{}, { value: Value }> {
  state = { value: '' };
  onChange = (value: Value) => this.setState(() => ({ value }));
  render() {
    const { value } = this.state;
    const { onChange } = this;

    return (
      <InputSelect
        value={value}
        items={[
          { value: 1, children: 'children 1' },
          { value: 2, children: 'children children children 2' },
          { value: 3, children: 'children 3' },
          { value: 4, children: 'children 4' },
          { value: 5, children: '5' },
          { value: 6, children: 'children 6' },
          { value: 7, children: 'children children 7' },
          { value: 8, children: 'children 8' },
          { value: 9, children: 'children 9' },
          { value: 10, children: 'children children children 10' },
          { value: 11, children: 'children 11' },
          { value: 12, children: '12' },
          { value: 13, children: '13' },
        ]}
        onChange={onChange}
        {...this.props}
      />
    );
  }
}

storiesOf('InputSelect', module)
  .add(
    'API',
    withInfo({
      text: 'With placeholder props',
      inline: true,
    })(() => (
      <div style={{ width: 500 }}>
        <InputSelect
          value={1}
          placeholder="or filter by device name"
          onChange={action('onChange')}
          items={[{ value: 1, children: 'item name 1' }]}
        />
      </div>
    )),
  )
  .add(
    'Controlled API',
    withInfo({
      text: 'With value',
      inline: true,
    })(() => (
      <div style={{ width: 500 }}>
        <InputSelect
          value={11}
          onChange={action('onChange')}
          items={[
            { value: 1, children: 'children 1' },
            { value: 2, children: 'children children children 2' },
            { value: 3, children: 'children 3' },
            { value: 4, children: 'children 4' },
            { value: 5, children: '5' },
            { value: 6, children: 'children 6' },
            { value: 7, children: 'children children 7' },
            { value: 8, children: 'children 8' },
            { value: 9, children: 'children 9' },
            { value: 10, children: 'children children children 10' },
            { value: 11, children: 'children 11' },
            { value: 12, children: '12' },
            { value: 13, children: '13' },
          ]}
        />
      </div>
    )),
  )
  .add(
    'With state',
    withInfo({
      text: '',
      inline: true,
    })(() => <StatefulInputSelect placeholder="or filter by device name" />),
  )
  .add(
    'With kind props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        kind="warning"
      />
    )),
  )
  .add(
    'With focus props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        kind="error"
        focus
      />
    )),
  )
  .add(
    'With autoFocus props',
    withInfo({
      text: 'onFocus',
      inline: true,
    })(() => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        kind="primary"
        autoFocus
      />
    )),
  )
  .add(
    'With noRowsRenderer props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        kind="primary"
        noRowsRenderer={({ onClose }) => (
          <div
            style={{ height: 300, display: 'flex', flexDirection: 'column' }}
          >
            <input />
            Custom noRowsRenderer
            <button onClick={onClose}>Click</button>
          </div>
        )}
      />
    )),
  )
  .add(
    'With 150 items',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <InputSelect
        value={71}
        onChange={action('onChange')}
        items={R.range(1, 150).map(value => ({
          value,
          children: `item ${value}`,
        }))}
      />
    )),
  )
  .add(
    'With disableFilter props',
    withInfo({
      text: '',
      inline: true,
    })(() => (
      <StatefulInputSelect
        placeholder="or filter by device name"
        disableFilter
      />
    )),
  );
