import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import LocaleFooter from '../';

it('should renders <LocaleFooter> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <LocaleFooter />
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find(LocaleFooter))).toMatchSnapshot();
});
