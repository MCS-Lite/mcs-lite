import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import Switch from './index';

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

const Simple = withState(Switch);
const StyledSwitch = withState(styled(Switch)`
  background-color: ${props => props.checked ? 'steelblue' : 'aliceblue'};

  &::after {
    background-color: ${props => props.checked ? 'aliceblue' : 'cornflowerblue'};
  }
`);


storiesOf('Switch', module)
  .add('Simple', () =>
    <Simple />,
  )
  .add('Overriding style', () =>
    <StyledSwitch />,
  );
