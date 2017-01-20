import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import Switch from '.';

const withState = Component =>
  class WithStateComponent extends React.Component {
    state = { checked: false }
    onClick = () => {
      action('click');
      this.setState({ checked: !this.state.checked });
    }
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

const StyledSwitch = withState(styled(Switch)`
  background-color: ${props => props.checked ? 'steelblue' : 'aliceblue'};

  &::after {
    background-color: ${props => props.checked ? 'aliceblue' : 'cornflowerblue'};
  }
`);

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
  );
