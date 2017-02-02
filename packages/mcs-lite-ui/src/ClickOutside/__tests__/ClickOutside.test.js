/* global document */

import React from 'react';
import { mount } from 'enzyme';
import ClickOutside from '../ClickOutside';

describe('ClickOutside', () => {
  it('should add a "click" EventListener of document', () => {
    // ref: https://github.com/airbnb/enzyme/issues/426
    const documentEvents = {};
    document.addEventListener = jest.fn((event, cb) => {
      documentEvents[event] = cb;
    });

    // Before mount
    expect(documentEvents).toEqual({});
    mount(
      <ClickOutside onClick={() => {}}>
        <div className="icon-star">Children</div>
      </ClickOutside>,
    );

    // After mount
    expect(documentEvents).toMatchSnapshot();
  });
});
