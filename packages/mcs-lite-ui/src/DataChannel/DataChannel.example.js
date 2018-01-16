/* eslint react/no-multi-comp: 0 */

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import DataChannel from ".";
import ButtonClear from "./ButtonClear";

const DemoWrapper = styled.div`
  > * {
    margin: 7.5px;
    width: 600px;
    background: white;
  }
`;

storiesOf("DataChannel", module)
  .add(
    "ButtonClear",
    withInfo({
      text: "Shared clear button.",
      inline: true
    })(() => <ButtonClear />)
  )
  .add(
    "DisplayStatus",
    withInfo({
      text: "",
      inline: true
    })(() => (
      <DemoWrapper>
        <DataChannel.DisplayStatus labels={["OFF", "ON"]} />
        <DataChannel.DisplayStatus
          value={2}
          labels={["Apple1", "Apple2", "Pen", "Pineapple", "PPAPPPAPPPAP"]}
        />
      </DemoWrapper>
    ))
  )
  .add(
    "DisplayUnitValue",
    withInfo({
      text: "",
      inline: true
    })(() => <DataChannel.DisplayUnitValue value={1123124124121} unit="攝氏" />)
  )
  .add(
    "DisplayMultipleValue",
    withInfo({
      text: "",
      inline: true
    })(() => (
      <DataChannel.DisplayMultipleValue
        items={[
          { name: "Value", value: 1234455 },
          { name: "Period", value: 125125 }
        ]}
      />
    ))
  )
  .add(
    "DisplayString",
    withInfo({
      text: "",
      inline: true
    })(() => (
      <DataChannel.DisplayString
        value="value"
        placeholder="This place holds Hex value."
      />
    ))
  )
  .add(
    "ControlNumber",
    withInfo({
      text: "React controlled-components.",
      inline: true
    })(() => (
      <DataChannel.ControlNumber
        onSubmit={action("ControlNumber onSubmit")}
        onChange={action("ControlNumber onChange")}
        onClear={action("ControlNumber onClear")}
        placeholder="placeholder"
        unit="單位：攝氏"
        value={10}
      />
    ))
  )
  .add(
    "ControlPeriod",
    withInfo({
      text: "React controlled-components.",
      inline: true
    })(() => (
      <DataChannel.ControlPeriod
        onSubmit={action("ControlPeriod onSubmit")}
        onChange={action("ControlPeriod onChange")}
        placeholder="placeholder"
        value={10}
      />
    ))
  )
  .add(
    "ControlSwitch",
    withInfo({
      text: "<Swtich> component with renamed props.",
      inline: true
    })(() => (
      <DataChannel.ControlSwitch
        value={false}
        onSubmit={action("ControlSwitch onSubmit")}
      />
    ))
  )
  .add(
    "ControlString",
    withInfo({
      text: "React controlled-components.",
      inline: true
    })(() => (
      <DataChannel.ControlString
        onSubmit={action("ControlString onSubmit")}
        onChange={action("ControlString onChange")}
        onClear={action("ControlString onClear")}
        placeholder="placeholder"
        value=""
      />
    ))
  )
  .add(
    "ControlRange",
    withInfo({
      text: "React controlled-components.",
      inline: true
    })(() => {
      const CATEGORIES = ["AAAAAA", "BBBBB", "CCCCC", "DDDDD", "EEEEE"];
      const GPIOS = ["Low", "Heigh"];

      return (
        <DemoWrapper>
          <DataChannel.ControlRange
            onChange={action("ControlRange onChange")}
            onSubmit={action("ControlRange onSubmit")}
            labels={["AAAAAA", "BBBBB", "CCCCC", "DDDDD", "EEEEE"]}
            valueMapper={() => "N/A"}
          />

          <DataChannel.ControlRange
            onChange={action("ControlRange onChange")}
            onSubmit={action("ControlRange onSubmit")}
            value={3}
            valueMapper={index => CATEGORIES[index]}
            labels={CATEGORIES}
          />

          <DataChannel.ControlRange
            onChange={action("ControlRange onChange")}
            onSubmit={action("ControlRange onSubmit")}
            value={0}
            valueMapper={index => GPIOS[index]}
            labels={GPIOS}
          />

          <DataChannel.ControlRange
            onChange={action("ControlRange onChange")}
            onSubmit={action("ControlRange onSubmit")}
            value={33}
            labels={[0, 100]}
          />
        </DemoWrapper>
      );
    })
  )
  .add(
    "ControlRange - Stateful number",
    withInfo({
      text: "",
      inline: true
    })(() => {
      class StatefulControlRange extends React.Component {
        state = { value: 88 };
        onChange = e => this.setState({ value: Number(e.target.value) });
        labels = [33, 95];
        render() {
          return (
            <DataChannel.ControlRange
              onChange={this.onChange}
              onSubmit={action("StatefulControlRange onSubmit")}
              value={this.state.value}
              labels={this.labels}
            />
          );
        }
      }

      return <StatefulControlRange />;
    })
  )
  .add(
    "ControlRange - Stateful PPAP",
    withInfo({
      text: "",
      inline: true
    })(() => {
      class StatefulControlRange extends React.Component {
        state = { value: 2 };
        onChange = e => this.setState({ value: Number(e.target.value) });
        labels = ["Apple", "Pen", "Pineapple"];
        render() {
          return (
            <DataChannel.ControlRange
              onChange={this.onChange}
              onSubmit={action("StatefulControlRange onSubmit")}
              value={this.state.value}
              valueMapper={index => this.labels[index]}
              labels={this.labels}
            />
          );
        }
      }

      return <StatefulControlRange />;
    })
  );
