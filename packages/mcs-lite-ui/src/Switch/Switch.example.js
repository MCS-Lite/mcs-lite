import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { kindList } from 'mcs-lite-theme';
import Switch from '.';

const withState = Component =>
  class WithStateComponent extends React.Component {
    state = { checked: false };
    onClick = () => {
      action('click');
      this.setState({ checked: !this.state.checked });
    };
    render() {
      return (
        <Component
          {...this.props}
          onClick={this.onClick}
          checked={this.state.checked}
        />
      );
    }
  };

const StyledSwitch = withState(
  styled(Switch)`
  background-color: ${props => (props.checked ? 'steelblue' : 'aliceblue')};

  &::after {
    background-color: ${props =>
      props.checked ? 'aliceblue' : 'cornflowerblue'};
  }
`,
);

const ScaledSwitch = withState(
  styled(Switch)`
  transform: scale(0.48);
`,
);

storiesOf('Switch', module)
  .addWithInfo(
    'API',
    'Switch is a controlled component.',
    () =>
      <div>
        <Switch />
        <Switch checked />
      </div>,
    { inline: true },
  )
  .addWithInfo(
    'With kind props',
    'kind="primary"',
    () =>
      <div>
        {kindList.map(kind => <Switch key={kind} checked kind={kind} />)}
      </div>,
    { inline: true },
  )
  .addWithInfo(
    'Stateful switch',
    '使用 state 來控制狀態。',
    () => {
      const Simple = withState(Switch);
      return <Simple />;
    },
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'Overriding style',
    '使用 styled-components 來覆蓋 css。',
    () => <StyledSwitch />,
    { inline: true, propTables: false },
  )
  .addWithInfo(
    'With scaling',
    'transform: scale(0.48) for mobile',
    () => <ScaledSwitch kind="primary" />,
    { inline: true, propTables: false },
  );
