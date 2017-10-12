import React from 'react';
import R from 'ramda';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import RestartNotification from '../RestartNotification';

// jest.mock('mcs-lite-ui/lib/Toast');
jest.mock('mcs-lite-ui/lib/A');

it('should renders <RestartNotification> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <RestartNotification onClick={() => {}} getMessages={R.identity} />
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find(RestartNotification))).toMatchSnapshot();
});
