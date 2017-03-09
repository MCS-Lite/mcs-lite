import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';

it('should render CATEGORY_DISPLAY correctly with default value to N/A', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'CATEGORY_DISPLAY',
          values: {},
          format: {
            items: [
              { name: 'name1', value: 'value1' },
              { name: 'name2', value: 'value2' },
            ],
          },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render CATEGORY_DISPLAY correctly with first item', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'CATEGORY_DISPLAY',
          values: { value: 'value1' },
          format: {
            items: [
              { name: 'name1', value: 'value1' },
              { name: 'name2', value: 'value2' },
            ],
          },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render CATEGORY_DISPLAY correctly with second item', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'CATEGORY_DISPLAY',
          values: { value: 'value2' },
          format: {
            items: [
              { name: 'name1', value: 'value1' },
              { name: 'name2', value: 'value2' },
            ],
          },
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});
