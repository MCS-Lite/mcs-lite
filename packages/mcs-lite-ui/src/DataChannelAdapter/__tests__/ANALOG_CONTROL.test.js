import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

it('should render ANALOG_CONTROL correctly with default value to N/A', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'ANALOG_CONTROL',
          values: {},
          format: {
            lowerbound: 0,
            upperbound: 100,
          },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render ANALOG_CONTROL correctly with zero', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'ANALOG_CONTROL',
          values: { value: 0 },
          format: {
            lowerbound: 0,
            upperbound: 100,
          },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render ANALOG_CONTROL correctly with max', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'ANALOG_CONTROL',
          values: { value: 100 },
          format: {
            lowerbound: 0,
            upperbound: 100,
          },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});
