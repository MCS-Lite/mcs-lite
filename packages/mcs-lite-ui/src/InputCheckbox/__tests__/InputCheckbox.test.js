// @flow
import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import InputCheckbox from '../InputCheckbox';

it('should handle onChange', () => {
  const mockOnChange = jest.fn();
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <InputCheckbox value={false} onChange={mockOnChange}>
        label
      </InputCheckbox>
    </ThemeProvider>,
  );

  const inputCheckbox = wrapper.find(InputCheckbox).instance();
  // Before onChange
  expect(inputCheckbox.props.value).toBe(false);

  // After onChange
  inputCheckbox.onChange();
  expect(mockOnChange).toHaveBeenCalledWith(true);
});
