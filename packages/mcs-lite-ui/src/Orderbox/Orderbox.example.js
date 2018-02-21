// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Orderbox from '.';

class StatefulOrderbox extends React.Component<any, { value: number }> {
  state = { value: 9 };
  onClick = () => {
    if (this.state.value === -1) {
      this.setState(() => ({ value: 9 }));
    } else {
      this.setState(() => ({ value: -1 }));
    }
  };
  render() {
    const { value } = this.state;
    const { onClick } = this;

    return <Orderbox value={value} onClick={onClick} {...this.props} />;
  }
}

storiesOf('Orderbox', module)
  .add(
    'API',
    withInfo({
      text: 'Controlled API',
      inline: true,
    })(() => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Orderbox value={-1} />
        <Orderbox value={0.1} />
        <Orderbox value={0} />
        <Orderbox value={1} />
        <Orderbox value={2} />
        <Orderbox value={3} />
        <Orderbox value={4} />
        <Orderbox value={5} />
        <Orderbox value={6} />
        <Orderbox value={7} />
        <Orderbox value={8} />
        <Orderbox value={9} />
        <Orderbox value={10} />
        <Orderbox value={50} />
        <Orderbox value={99} />
        <Orderbox value={100} />
      </div>
    )),
  )
  .add(
    'With state',
    withInfo({
      text: 'default',
      inline: true,
    })(() => <StatefulOrderbox />),
  )
  .add(
    'With size',
    withInfo({
      text: 'default',
      inline: true,
    })(() => <StatefulOrderbox size={24} style={{ fontSize: 14 }} />),
  )
  .add(
    'With kind',
    withInfo({
      text: 'different color',
      inline: true,
    })(() => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <StatefulOrderbox kind="default" /> default
        <StatefulOrderbox kind="primary" /> primary
        <StatefulOrderbox kind="success" /> success
        <StatefulOrderbox kind="error" /> error
        <StatefulOrderbox kind="warning" /> warning
      </div>
    )),
  );
