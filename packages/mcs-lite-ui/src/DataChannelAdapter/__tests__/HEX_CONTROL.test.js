import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

it('should render HEX_CONTROL correctly with default value to empty', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'HEX_CONTROL',
          values: {},
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render HEX_CONTROL correctly with value', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'HEX_CONTROL',
          values: { value: 'michaelhsu' },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render HEX_CONTROL correctly with empty string', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'HEX_CONTROL',
          values: { value: '' },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});
