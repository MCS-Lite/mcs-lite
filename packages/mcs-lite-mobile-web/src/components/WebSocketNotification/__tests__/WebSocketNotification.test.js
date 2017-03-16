import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import R from 'ramda';
import { ThemeProvider } from 'styled-components';
import mobileTheme from '../../../utils/mobileTheme';
import WebSocketNotification from '../WebSocketNotification';

it('should renders <WebSocketNotification> correctly', () => {
  const wrapper = shallow(
    <WebSocketNotification
      getMessages={R.identity}
      onClick={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});


it('should handle onClick', () => {
  const mockOnClick = jest.fn();
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <WebSocketNotification
        getMessages={R.identity}
        onClick={mockOnClick}
      />
    </ThemeProvider>,
  );

  // Before eventHandler with submit type
  expect(mockOnClick).not.toHaveBeenCalled();

  // After eventHandler with submit type
  wrapper.find('button').simulate('click');
  expect(mockOnClick).toHaveBeenCalled();
});
