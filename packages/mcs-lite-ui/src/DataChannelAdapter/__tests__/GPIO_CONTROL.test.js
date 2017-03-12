import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';
import DataChannel from '../../DataChannel';

it('should render GPIO_CONTROL correctly with default value to N/A', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'GPIO_CONTROL',
          values: {},
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render GPIO_CONTROL correctly with Low', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'GPIO_CONTROL',
          values: { value: 0 },
          format: {},
        }}
        eventHandler={() => {}}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DataChannelAdapter)).toMatchSnapshot();
});

it('should render GPIO_CONTROL correctly with High', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'GPIO_CONTROL',
          values: { value: 1 },
          format: {},
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
          type: 'GPIO_CONTROL',
          values: { value: 1 },
          format: {},
        }}
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlRange).props().onChange({
    target: { value: 0 },
  });
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'CHANGE', values: { value: 0 }},
  );
});

it('should handle onSubmit', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'GPIO_CONTROL',
          values: { value: 1 },
          format: {},
        }}
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlRange).props().onSubmit();
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'SUBMIT', values: { value: 1 }},
  );
});
