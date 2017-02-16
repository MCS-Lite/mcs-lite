/* eslint react/no-multi-comp: 0 */

import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import DataChannel from '.';
import ButtonClear from './ButtonClear';

const DemoWrapper = styled.div`

  > * {
    margin: 7.5px;
    width: 600px;
    background: white;
  }
`;

storiesOf('DataChannel', module)
  .addWithInfo(
    'ButtonClear',
    'Shared clear button.',
    () => <ButtonClear />,
    { inline: true },
  )

  .addWithInfo(
    'DisplayStatus',
    '',
    () =>
      <DemoWrapper>
        <DataChannel.DisplayStatus
          labels={['OFF', 'ON']}
        />
        <DataChannel.DisplayStatus
          value={2}
          labels={['Apple1', 'Apple2', 'Pen', 'Pineapple', 'PPAPPPAPPPAP']}
        />
      </DemoWrapper>,
    { inline: true },
  )

  .addWithInfo(
    'DisplayUnitValue',
    '',
    () =>
      <DataChannel.DisplayUnitValue
        value={1123124124121}
        unit="攝氏"
      />,
    { inline: true },
  )

  .addWithInfo(
    'DisplayMultipleValue',
    '',
    () =>
      <DataChannel.DisplayMultipleValue
        items={[
          { name: 'Value', value: 1234455 },
          { name: 'Period', value: 125125 },
        ]}
      />,
    { inline: true },
  )

  .addWithInfo(
    'DisplayString',
    '',
    () =>
      <DataChannel.DisplayString
        value="value"
        placeholder="This place holds Hex value."
      />,
    { inline: true },
  )

  .addWithInfo(
    'ControlNumber',
    '',
    () =>
      <DataChannel.ControlNumber
        onSubmit={action('ControlNumber onSubmit')}
        onChange={action('ControlNumber onChange')}
        onClear={action('ControlNumber onClear')}
        placeholder="placeholder"
        unit="單位：攝氏"
      />,
    { inline: true },
  )

  .addWithInfo(
    'ControlPeriod',
    '',
    () =>
      <DataChannel.ControlPeriod
        onSubmit={action('ControlPeriod onSubmit')}
        onChange={action('ControlPeriod onChange')}
        placeholder="placeholder"
      />,
    { inline: true },
  )

  .addWithInfo(
    'ControlSwitch',
    '<Swtich> component with renamed props.',
    () =>
      <DataChannel.ControlSwitch
        onSubmit={action('ControlSwitch onSubmit')}
      />,
    { inline: true },
  )
  .addWithInfo(
    'ControlString',
    '',
    () =>
      <DataChannel.ControlString
        onSubmit={action('ControlString onSubmit')}
        onChange={action('ControlString onChange')}
        onClear={action('ControlString onClear')}
        placeholder="placeholder"
      />,
    { inline: true },
  )
  .addWithInfo(
    'ControlRange',
    '',
    () => {
      const CATEGORIES = ['AAAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE'];
      const GPIOS = ['Low', 'Heigh'];

      return (
        <DemoWrapper>
          <DataChannel.ControlRange
            onSubmit={action('ControlRange onSubmit')}
            labels={['AAAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE']}
          />

          <DataChannel.ControlRange
            onSubmit={action('ControlRange onSubmit')}
            value={3}
            valueMapper={index => CATEGORIES[index]}
            labels={CATEGORIES}
          />

          <DataChannel.ControlRange
            onSubmit={action('ControlRange onSubmit')}
            value={0}
            valueMapper={index => GPIOS[index]}
            labels={GPIOS}
          />

          <DataChannel.ControlRange
            onSubmit={action('ControlRange onSubmit')}
            value={33}
            labels={[0, 100]}
          />
        </DemoWrapper>
      );
    },
    { inline: true },
  )

  .addWithInfo(
    'ControlRange - Stateful number',
    '',
    () => {
      class StatefulControlRange extends React.Component {
        state = { value: 88 };
        onChange = e => this.setState({ value: Number(e.target.value) });
        labels = [33, 95];
        render() {
          return (
            <DataChannel.ControlRange
              onChange={this.onChange}
              value={this.state.value}
              labels={this.labels}
            />
          );
        }
      }

      return <StatefulControlRange />;
    },
    { inline: true },
  )
  .addWithInfo(
    'ControlRange - Stateful PPAP',
    '',
    () => {
      class StatefulControlRange extends React.Component {
        state = { value: 2 };
        onChange = e => this.setState({ value: Number(e.target.value) });
        labels = ['Apple', 'Pen', 'Pineapple'];
        render() {
          return (
            <DataChannel.ControlRange
              onChange={this.onChange}
              value={this.state.value}
              valueMapper={index => this.labels[index]}
              labels={this.labels}
            />
          );
        }
      }

      return <StatefulControlRange />;
    },
    { inline: true },
  );
