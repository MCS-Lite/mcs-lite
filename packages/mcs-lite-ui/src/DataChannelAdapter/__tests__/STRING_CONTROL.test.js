import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

describe('DataChannelAdapter', () => {
  it('should render STRING_CONTROL correctly with default value to empty', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <DataChannelAdapter
          dataChannelProps={{
            id: 'id',
            type: 'STRING_CONTROL',
            values: {},
            format: {},
          }}
          eventHandler={() => {}}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
  });

  it('should render STRING_CONTROL correctly with value', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <DataChannelAdapter
          dataChannelProps={{
            id: 'id',
            type: 'STRING_CONTROL',
            values: { value: 'michaelhsu' },
            format: {},
          }}
          eventHandler={() => {}}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
  });

  it('should render STRING_CONTROL correctly with empty string', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <DataChannelAdapter
          dataChannelProps={{
            id: 'id',
            type: 'STRING_CONTROL',
            values: { value: '' },
            format: {},
          }}
          eventHandler={() => {}}
        />
      </ThemeProvider>,
    );

    expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
  });
});
