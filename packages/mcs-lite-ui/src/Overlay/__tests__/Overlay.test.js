import React from 'react';
import { mount } from 'enzyme';
import Overlay from '../Overlay';

it('should handle onClickOutSide', () => {
  const mockOnClickOutSide = jest.fn();
  const wrapper = mount(
    <Overlay onClickOutSide={mockOnClickOutSide}>
      Children
    </Overlay>
  );

  // Before clicking
  expect(mockOnClickOutSide).not.toHaveBeenCalled();
  // After clicking
  wrapper.instance().onClickOutSide({});
  expect(mockOnClickOutSide).toHaveBeenCalledWith({});
});
