import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

it('should render FLOAT_DISPLAY correctly with default value to N/A', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_DISPLAY',
          values: {},
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(DataChannelAdapter));
  expect(tree).toMatchSnapshot();
});

it('should render FLOAT_DISPLAY correctly with value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_DISPLAY',
          values: { value: 1.1 },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(DataChannelAdapter));
  expect(tree).toMatchSnapshot();
});

it('should render FLOAT_DISPLAY correctly with zero', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_DISPLAY',
          values: { value: 0 },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(DataChannelAdapter));
  expect(tree).toMatchSnapshot();
});

it('should render FLOAT_DISPLAY correctly with unit', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'FLOAT_DISPLAY',
          values: { value: 1.3 },
          format: { unit: '攝氏' },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(DataChannelAdapter));
  expect(tree).toMatchSnapshot();
});
