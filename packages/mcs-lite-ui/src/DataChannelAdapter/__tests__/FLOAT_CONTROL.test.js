import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

it('should render FLOAT_CONTROL correctly with default value to empty', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: {},
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render FLOAT_CONTROL correctly with value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0.11 },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render FLOAT_CONTROL correctly with zero', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0 },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render FLOAT_CONTROL correctly with unit', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_CONTROL',
          values: { value: 0.11 },
          format: { unit: '攝氏' },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});