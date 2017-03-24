import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import TabItem, { Item } from '../TabItem';

it('should handle onClick', () => {
  const mockOnClick = jest.fn();
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <TabItem value={123} onClick={mockOnClick}>
        Tab
      </TabItem>
    </ThemeProvider>
  );

  expect(mockOnClick).not.toHaveBeenCalled();

  // After clicking
  wrapper.find(Item).props().onClick('e');
  expect(mockOnClick).toHaveBeenCalledWith('e', 123);
});
