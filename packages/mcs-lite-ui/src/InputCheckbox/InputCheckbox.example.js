// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import InputCheckbox from '.';
import Checkbox from '../Checkbox';

class StatefulInputCheckbox extends React.Component<any, { value: boolean }> {
  state = { value: true };
  onChange = () => this.setState(({ value }) => ({ value: !value }));
  render() {
    const { value } = this.state;
    const { onChange } = this;

    return <InputCheckbox value={value} onChange={onChange} {...this.props} />;
  }
}

storiesOf('InputCheckbox', module)
  .add(
    'API',
    withInfo({
      text: 'Controlled API',
      inline: true,
    })(() => (
      <InputCheckbox value onChange={action('onChange')}>
        Check it
      </InputCheckbox>
    )),
  )
  .add(
    'With state',
    withInfo({
      text: '',
      inline: true,
      propTables: [InputCheckbox],
    })(() => (
      <StatefulInputCheckbox>
        Display the device image on scene
      </StatefulInputCheckbox>
    )),
  )
  .add(
    'Pass props to Checkbox',
    withInfo({
      text: '',
      inline: true,
      propTables: [InputCheckbox, Checkbox],
    })(() => (
      <StatefulInputCheckbox render={value => (value ? 5 : null)}>
        Display the device image on scene
      </StatefulInputCheckbox>
    )),
  );
