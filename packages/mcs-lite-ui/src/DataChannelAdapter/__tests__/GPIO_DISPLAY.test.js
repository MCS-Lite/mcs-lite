import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

it('should render GPIO_DISPLAY correctly with default value to undefiend', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'GPIO_DISPLAY',
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

it('should render GPIO_DISPLAY correctly with Low', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'GPIO_DISPLAY',
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

it('should render GPIO_DISPLAY correctly with High', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'GPIO_DISPLAY',
          values: { value: 1 },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(DataChannelAdapter));
  expect(tree).toMatchSnapshot();
});
