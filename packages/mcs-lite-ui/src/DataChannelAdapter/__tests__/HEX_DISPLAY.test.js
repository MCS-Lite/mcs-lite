import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

it('should render HEX_DISPLAY correctly with default value to empty', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'HEX_DISPLAY',
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

it('should render HEX_DISPLAY correctly with value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'HEX_DISPLAY',
          values: { value: 'michaelhsu' },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(DataChannelAdapter));
  expect(tree).toMatchSnapshot();
});

it('should render HEX_DISPLAY correctly with empty string', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'HEX_DISPLAY',
          values: { value: '' },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(DataChannelAdapter));
  expect(tree).toMatchSnapshot();
});
