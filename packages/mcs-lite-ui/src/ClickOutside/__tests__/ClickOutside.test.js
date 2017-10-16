/* global document */

import React from 'react';
import { mount } from 'enzyme';
import ClickOutside from '../ClickOutside';

jest.mock('raf-throttle', () => a => {
  const fn = a;
  fn.cancel = () => {};
  return fn;
});

it('should add a "click" EventListener of document', () => {
  // ref: https://github.com/airbnb/enzyme/issues/426
  const documentEvents = {};
  document.addEventListener = jest.fn((event, cb) => {
    documentEvents[event] = cb;
  });
  document.removeEventListener = jest.fn();

  // Before mount
  expect(documentEvents).toEqual({});
  const wrapper = mount(
    <ClickOutside onClick={() => {}}>
      <div>Children</div>
    </ClickOutside>,
  );

  // After mount
  expect(documentEvents).toMatchSnapshot();

  // Before Unmount
  expect(document.removeEventListener).not.toHaveBeenCalled();
  // After Unmount
  wrapper.unmount();
  expect(document.removeEventListener).toHaveBeenCalled();
});

it('should handle onClick', () => {
  const mockOnClick = jest.fn();
  const wrapper = mount(
    <ClickOutside onClick={mockOnClick}>
      <div>Children</div>
    </ClickOutside>,
  );

  // Before clicking
  expect(mockOnClick).not.toHaveBeenCalled();
  // After clicking
  wrapper.instance().handleClickOutside({});
  expect(mockOnClick).toHaveBeenCalledWith({});
});
