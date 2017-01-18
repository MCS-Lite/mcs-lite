import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import Switch from './index';

class SwitchWithState extends React.Component {
  state = { checked: false }
  onClick = () => {
    action('click');
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
      <Switch
        {...this.props}
        onClick={this.onClick}
        checked={this.state.checked}
      />
    );
  }
}

const StyledSwitch = styled(Switch)`

  &::after {
    background-color: aliceblue;
  }
`;

storiesOf('Switch', module)
  .add('Simple', () =>
    <SwitchWithState />,
  )
  .add('Custom color props', () =>
    <SwitchWithState
      onColor="steelblue"
      offColor="aliceblue"
    />,
  )
  .add('Overriding style', () =>
    <StyledSwitch />,
  );
