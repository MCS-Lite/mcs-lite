import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DatetimePickerDialog, { Header } from '../DatetimePickerDialog';

it('should return correct state', () => {
  const wrapper = mount(
    <DatetimePickerDialog
      datetimePickerProps={{
        defaultValue: 1463556631722,
        years: [2015, 2016, 2017, 2018],
      }}
      show
      onHide={() => {}}
      onSubmit={() => {}}
    />,
  );

  // Before onChange
  expect(wrapper.state('value')).toBe(1463556631722);
  // After onChange
  wrapper.instance().onChange(3);
  expect(wrapper.state('value')).toBe(3);
});

it('should handle onCancel', () => {
  const mockOnHide = jest.fn();
  const wrapper = mount(
    <DatetimePickerDialog
      datetimePickerProps={{
        defaultValue: 1463556631722,
        years: [2015, 2016, 2017, 2018],
      }}
      show
      onHide={mockOnHide}
      onSubmit={() => {}}
    />,
  );

  // Before onCancel
  expect(wrapper.state('value')).toBe(1463556631722);
  // After onCancel
  wrapper.instance().onCancel();
  expect(mockOnHide).toHaveBeenCalled();
  expect(wrapper.state('value')).toBe(1463556631722);
});

it('should handle onSubmit', () => {
  const mockOnHide = jest.fn();
  const mockOnSubmit = jest.fn();
  const wrapper = mount(
    <DatetimePickerDialog
      datetimePickerProps={{
        defaultValue: 1463556631722,
        years: [2015, 2016, 2017, 2018],
      }}
      show
      onHide={mockOnHide}
      onSubmit={mockOnSubmit}
    />,
  );

  // Before onSubmit
  // After onSubmit
  wrapper.instance().onSubmit();
  expect(mockOnHide).toHaveBeenCalled();
  expect(mockOnSubmit).toHaveBeenCalledWith(1463556631722);
});

it('should redner styled-components <Header/>', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find('div'));
  expect(tree).toMatchSnapshot();
});
