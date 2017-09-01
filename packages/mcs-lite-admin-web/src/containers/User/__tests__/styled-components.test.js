import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import {
  FooterWrapper,
  TabWrapper,
  InputFileWrapper,
} from '../styled-components';

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <div>
        <FooterWrapper />
        <TabWrapper />
        <InputFileWrapper />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
