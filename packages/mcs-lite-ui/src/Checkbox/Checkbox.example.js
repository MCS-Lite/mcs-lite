// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import IconPlay from 'mcs-lite-icon/lib/IconPlay';
import IconCheck from './IconCheck';
import Checkbox from '.';

class StatefulCheckbox extends React.Component<any, { value: boolean }> {
  state = { value: true };
  onClick = () => {
    this.setState(({ value }) => ({ value: !value }));
  };
  render() {
    const { value } = this.state;
    const { onClick } = this;

    return <Checkbox value={value} onClick={onClick} {...this.props} />;
  }
}

storiesOf('Checkbox', module)
  .add(
    'API',
    withInfo({
      text: 'Controlled API',
      inline: true,
    })(() => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Checkbox value />
        <Checkbox value={false} />
      </div>
    )),
  )
  .add(
    'With state',
    withInfo({
      text: '',
      inline: true,
      propTables: [Checkbox],
    })(() => <StatefulCheckbox />),
  )
  .add(
    'With size props',
    withInfo({
      text: 'custom size',
      inline: true,
      propTables: [Checkbox],
    })(() => (
      <StatefulCheckbox
        size={24}
        render={(value: boolean): React.Node =>
          value ? <IconCheck width={14} height={14} /> : null
        }
      />
    )),
  )
  .add(
    'With kind props',
    withInfo({
      text: 'custom color',
      inline: true,
      propTables: [Checkbox],
    })(() => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <StatefulCheckbox kind="default" /> default
        <StatefulCheckbox kind="primary" /> primary
        <StatefulCheckbox kind="success" /> success
        <StatefulCheckbox kind="error" /> error
        <StatefulCheckbox kind="warning" /> warning
      </div>
    )),
  )
  .add(
    'With render props',
    withInfo({
      text: 'custom icon',
      inline: true,
      propTables: [Checkbox],
    })(() => (
      <React.Fragment>
        <StatefulCheckbox
          render={(value: boolean): React.Node => (value ? <IconPlay /> : null)}
        />
        <StatefulCheckbox
          render={(value: boolean): React.Node => (value ? '好' : null)}
        />
        <StatefulCheckbox
          render={(value: boolean): React.Node => (value ? 'a' : null)}
        />
        <StatefulCheckbox
          render={(value: boolean): React.Node => (value ? '3' : null)}
        />
      </React.Fragment>
    )),
  );
