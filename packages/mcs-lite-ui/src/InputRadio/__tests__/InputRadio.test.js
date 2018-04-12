// @flow
import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import InputRadio from '../InputRadio';

it('should handle onChange', () => {
  const mockOnChange = jest.fn();
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <InputRadio value={false} onChange={mockOnChange}>
        label
      </InputRadio>
    </ThemeProvider>,
  );

  const inputRadio = wrapper.find(InputRadio).instance();
  // Before onChange
  expect(inputRadio.props.value).toBe(false);

  // After onChange
  inputRadio.onChange();
  expect(mockOnChange).toHaveBeenCalledWith(true);
});
