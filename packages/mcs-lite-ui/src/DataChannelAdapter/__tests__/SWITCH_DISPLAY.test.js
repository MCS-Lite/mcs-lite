import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

it('should render SWITCH_DISPLAY correctly with default value to false', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'SWITCH_DISPLAY',
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

it('should render SWITCH_DISPLAY correctly with true value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'SWITCH_DISPLAY',
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

it('should render SWITCH_DISPLAY correctly with false value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'SWITCH_DISPLAY',
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
