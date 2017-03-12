import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';
import DataChannel from '../../DataChannel';

it('should render CATEGORY_CONTROL correctly with default value to N/A', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'CATEGORY_CONTROL',
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

it('should render CATEGORY_CONTROL correctly with first item', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'CATEGORY_CONTROL',
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

it('should render CATEGORY_CONTROL correctly with second item', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'CATEGORY_CONTROL',
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

it('should handle onChange', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'CATEGORY_CONTROL',
          values: { value: 'value2' },
          format: {
            items: [
              { name: 'name1', value: 'value1' },
              { name: 'name2', value: 'value2' },
            ],
          },
        }}
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlRange).props().onChange({
    target: { value: 1 },
  });
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'CHANGE', values: { value: 'value2' }},
  );
});

it('should handle onSubmit', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'CATEGORY_CONTROL',
          values: { value: 'value2' },
          format: {
            items: [
              { name: 'name1', value: 'value1' },
              { name: 'name2', value: 'value2' },
            ],
          },
        }}
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlRange).props().onSubmit();
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'SUBMIT', values: { value: 'value2' }},
  );
});
