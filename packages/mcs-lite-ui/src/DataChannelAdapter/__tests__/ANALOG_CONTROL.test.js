import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';
import DataChannel from '../../DataChannel';

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

it('should handle onChange', () => {
  const mockEventHandler = jest.fn();

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
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlRange).props().onChange({
    target: { value: 43 },
  });
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'CHANGE', values: { value: 43 }},
  );
});

it('should handle onSubmit', () => {
  const mockEventHandler = jest.fn();

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
        eventHandler={mockEventHandler}
      />
    </ThemeProvider>,
  );

  expect(mockEventHandler).not.toHaveBeenCalled();
  wrapper.find(DataChannel.ControlRange).props().onSubmit();
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'SUBMIT', values: { value: 100 }},
  );
});
