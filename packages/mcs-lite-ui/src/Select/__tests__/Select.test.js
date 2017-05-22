import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import Select from '../Select';

it('should handle onFocus', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Select
        value={2}
        readOnly
        items={[
          { value: 1, children: 'value 1' },
          { value: 2, children: 'value 2' },
        ]}
      />
    </ThemeProvider>,
  );

  // Before focus
  const select = wrapper.find(Select).getNode();
  expect(select.state.isOpen).toBe(false);

  // After focus
  select.onFocus();
  expect(select.state.isOpen).toBe(true);

  // After blur
  select.onBlur();
  expect(select.state.isOpen).toBe(false);
});
