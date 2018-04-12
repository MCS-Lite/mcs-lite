// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import InputRadio from '.';

class StatefulInputRadio extends React.Component<any, { value: boolean }> {
  state = { value: true };
  onChange = (value: boolean) => this.setState(() => ({ value }));
  render() {
    const { value } = this.state;
    const { onChange } = this;

    return <InputRadio value={value} onChange={onChange} {...this.props} />;
  }
}

storiesOf('InputRadio', module)
  .add(
    'API',
    withInfo({
      text: 'Controlled API',
      inline: true,
    })(() => (
      <InputRadio value onChange={action('onChange')}>
        Radio
      </InputRadio>
    )),
  )
  .add(
    'With two radios',
    withInfo({
      text: 'Controlled API',
      inline: true,
    })(() => (
      <div>
        <InputRadio value onChange={action('onChange1')}>
          Radio1
        </InputRadio>
        <InputRadio value={false} onChange={action('onChange2')}>
          Radio2
        </InputRadio>
      </div>
    )),
  )
  .add(
    'With state',
    withInfo({
      text: '',
      inline: true,
      propTables: [InputRadio],
    })(() => <StatefulInputRadio>Radio with state</StatefulInputRadio>),
  )
  .add(
    'Without label',
    withInfo({
      text: '',
      inline: true,
      propTables: [InputRadio],
    })(() => <StatefulInputRadio />),
  )
  .add(
    'With custom style',
    withInfo({
      text: '',
      inline: true,
      propTables: [InputRadio],
    })(() => (
      <StatefulInputRadio style={{ height: 24 }}>Radio</StatefulInputRadio>
    )),
  );
