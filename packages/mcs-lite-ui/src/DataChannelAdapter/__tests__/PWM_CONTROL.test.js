import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DataChannelAdapter from '../DataChannelAdapter';
import DataChannel from '../../DataChannel';

it('should render PWM_CONTROL correctly with default value to N/A', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'PWM_CONTROL',
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

it('should render PWM_CONTROL correctly with zero', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'PWM_CONTROL',
          values: { period: 0, value: 0 },
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

it('should render PWM_CONTROL correctly with max', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'PWM_CONTROL',
          values: { period: 1, value: 100 },
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

it('should handle onChange of ControlPeriod', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'PWM_CONTROL',
          values: { period: 1, value: 100 },
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
  wrapper.find(DataChannel.ControlPeriod).props().onChange({
    target: { value: 11 },
  });
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'CHANGE', values: { period: 11, value: 100 }},
  );
});

it('should handle onSubmit of ControlPeriod', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'PWM_CONTROL',
          values: { period: 1, value: 100 },
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
  wrapper.find(DataChannel.ControlPeriod).props().onSubmit();
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'SUBMIT', values: { period: 1, value: 100 }},
  );
});

it('should handle onChange of ControlRange', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'PWM_CONTROL',
          values: { period: 1, value: 100 },
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
    target: { value: 22 },
  });
  expect(mockEventHandler).toHaveBeenCalledWith({
    id: 'id', type: 'CHANGE', values: { period: 1, value: 22 }},
  );
});

it('should handle onSubmit of ControlRange', () => {
  const mockEventHandler = jest.fn();

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DataChannelAdapter
        dataChannelProps={{
          id: 'id',
          type: 'PWM_CONTROL',
          values: { period: 1, value: 100 },
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
    id: 'id', type: 'SUBMIT', values: { period: 1, value: 100 }},
  );
});
