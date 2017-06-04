import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import { StyledLogo, ErrorMessage, Layout, Form } from '../styled-components';

jest.mock('mcs-lite-ui/lib/P');
jest.mock('mcs-lite-ui/lib/Hr');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <div>
        <StyledLogo />
        <ErrorMessage />
        <Layout />
        <Form />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
