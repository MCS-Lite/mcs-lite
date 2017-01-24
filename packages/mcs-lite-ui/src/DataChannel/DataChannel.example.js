/* eslint react/no-multi-comp: 0 */

import React from 'react';
import styled from 'styled-components';
import { storiesOf, action } from '@kadira/storybook';
import DataChannel from '.';

storiesOf('DataChannel', module)
  .addWithInfo(
    'DataChannel.ControlSwitch',
    '',
    () =>
      <DataChannel.ControlSwitch
        title="Title"
        subtitle="123125125125125"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        childrenProps={{
          onClick: action('ControlSwitch onSubmit'),
        }}
      />,
    { inline: true },
  )
  .addWithInfo(
    'DataChannel.ControlNumber',
    '',
    () =>
      <DataChannel.ControlNumber
        title="Title"
        subtitle="123125125125125"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        childrenProps={{
          onSubmit: action('ControlNumber onSubmit'),
          onChange: action('ControlNumber onChange'),
          onClear: action('ControlNumber onClear'),
          placeholder: 'placeholder',
          unit: '攝氏',
        }}
      />,
    { inline: true },
  )
  .addWithInfo(
    'DataChannel.ControlString',
    '',
    () =>
      <DataChannel.ControlString
        title="Title"
        subtitle="123125125125125"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        childrenProps={{
          onSubmit: action('ControlString onSubmit'),
          onChange: action('ControlString onChange'),
          onClear: action('ControlString onClear'),
          placeholder: 'placeholder',
        }}
      />,
    { inline: true },
  )
  .addWithInfo(
    'DataChannel.ControlRange',
    '',
    () =>
      <DataChannel.ControlRange
        title="Title"
        subtitle="123125125125125"
        description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
        header={<a href="">Link</a>}
        childrenProps={{
          onChange: action('ControlRange onChange'),
          labels: ['AAAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE'],
        }}
      />,
    { inline: true },
  )
  .addWithInfo(
    'ControlRange - Category, GPIO and Analog',
    '',
    () => {
      const Wrapper = styled.div`
        display: flex;
        flex-wrap: wrap;

        > * {
          margin: 7.5px;
          width: 300px;
        }
      `;

      const categories = ['AAAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE'];
      const gpioLabels = ['Low', 'Heigh'];

      return (
        <Wrapper>
          <DataChannel.ControlRange
            title="Category"
            subtitle="123125125125125"
            description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
            header={<a href="">Link</a>}
            childrenProps={{
              onChange: action('ControlRange onChange'),
              value: 3,
              valueMapper: index => categories[index],
              labels: categories,
            }}
          />

          <DataChannel.ControlRange
            title="Title"
            subtitle="GPIO"
            description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
            header={<a href="">Link</a>}
            childrenProps={{
              onChange: action('ControlRange onChange'),
              value: 0,
              valueMapper: index => gpioLabels[index],
              labels: gpioLabels,
            }}
          />

          <DataChannel.ControlRange
            title="Title"
            subtitle="123125125125125"
            description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
            header={<a href="">Link</a>}
            childrenProps={{
              onChange: action('ControlRange onChange'),
              value: 33,
              labels: [0, 100],
            }}
          />
        </Wrapper>
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
        onChange = e => this.setState({ value: e.target.value });
        labels = [33, 95];
        render() {
          return (
            <DataChannel.ControlRange
              title="Stateful number"
              subtitle="123125125125125"
              description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
              header={<a href="">Link</a>}
              childrenProps={{
                onChange: this.onChange,
                value: this.state.value,
                labels: this.labels,
              }}
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
        onChange = e => this.setState({ value: e.target.value });
        labels = ['Apple', 'Pen', 'Pineapple'];
        render() {
          return (
            <DataChannel.ControlRange
              title="Stateful PPAP"
              subtitle="123125125125125"
              description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
              header={<a href="">Link</a>}
              childrenProps={{
                onChange: this.onChange,
                value: this.state.value,
                valueMapper: index => this.labels[index],
                labels: this.labels,
              }}
            />
          );
        }
      }

      return <StatefulControlRange />;
    },
    { inline: true },
  )
  .addWithInfo(
    'Fixed width',
    '',
    () => {
      const StyledComponent = styled(DataChannel.ControlNumber)`
        width: 300px;
      `;

      return (
        <StyledComponent
          title="Title"
          subtitle="123125125125125"
          description="You can input description of controller here. You can input description of You can input description of controller here. You can input description of"
          header={<a href="">Link</a>}
          childrenProps={{
            onSubmit: action('StyledComponent onSubmit'),
          }}
        />
      );
    },
    { inline: true, propTables: false },
  );
