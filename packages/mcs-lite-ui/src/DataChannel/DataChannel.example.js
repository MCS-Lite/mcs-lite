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
