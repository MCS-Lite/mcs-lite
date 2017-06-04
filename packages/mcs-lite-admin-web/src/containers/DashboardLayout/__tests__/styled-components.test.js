import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import {
  Container,
  Header,
  HeaderItemWrapper,
  HeaderItem,
  StyledLogo,
  Body,
  Nav,
  NavItem,
  NavItemControl,
  Main,
} from '../styled-components';

jest.mock('mcs-lite-ui');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <div>
        <Container />
        <Header />
        <HeaderItemWrapper />
        <HeaderItem />
        <StyledLogo />
        <Body />
        <Nav />
        <NavItem />
        <NavItemControl />
        <Main />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
