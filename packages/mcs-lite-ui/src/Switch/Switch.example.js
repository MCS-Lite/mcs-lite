import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { kindList } from "mcs-lite-theme";
import Switch from ".";

const withState = Component =>
  class WithStateComponent extends React.Component {
    state = { checked: false };
    onClick = () => {
      action("click");
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
    background-color: ${props => (props.checked ? "steelblue" : "aliceblue")};

    &::after {
      background-color: ${props =>
        props.checked ? "aliceblue" : "cornflowerblue"};
    }
  `
);

const ScaledSwitch = withState(
  styled(Switch)`
    transform: scale(0.48);
  `
);

storiesOf("Switch", module)
  .add(
    "API",
    withInfo({
      text: "Switch is a controlled component.",
      inline: true
    })(() => (
      <div>
        <Switch />
        <Switch checked />
      </div>
    ))
  )
  .add(
    "With kind props",
    withInfo({
      text: 'kind="primary"',
      inline: true
    })(() => (
      <div>
        {kindList.map(kind => <Switch key={kind} checked kind={kind} />)}
      </div>
    ))
  )
  .add(
    "Stateful switch",
    withInfo({
      text: "使用 state 來控制狀態。",
      inline: true,
      propTables: false
    })(() => {
      const Simple = withState(Switch);
      return <Simple />;
    })
  )
  .add(
    "Overriding style",
    withInfo({
      text: "使用 styled-components 來覆蓋 css。",
      inline: true,
      propTables: false
    })(() => <StyledSwitch />)
  )
  .add(
    "With scaling",
    withInfo({
      text: "transform: scale(0.48) for mobile",
      inline: true,
      propTables: false
    })(() => <ScaledSwitch kind="primary" />)
  );
