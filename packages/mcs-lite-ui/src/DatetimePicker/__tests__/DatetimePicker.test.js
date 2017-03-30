import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import DatetimePicker from '../DatetimePicker';

jest.unmock('react-hammerjs');
jest.mock('react-hammerjs', () => () => <div />);

it('should handle reducer correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <DatetimePicker
        defaultValue={1455780631722}
      />
    </ThemeProvider>,
  );

  expect(wrapper.find(DatetimePicker)).toMatchSnapshot();
});
