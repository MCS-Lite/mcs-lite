import React from 'react';
import R from 'ramda';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import Language from '../Language';

jest.mock('react-helmet');

it('should renders <Language> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Language getMessages={R.identity} locale="en" />
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find(Language))).toMatchSnapshot();
});
