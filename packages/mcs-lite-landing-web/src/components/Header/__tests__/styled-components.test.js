import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { BreakpointProvider } from 'hedron';
import landingTheme, { BREAKPOINTS } from '../../../utils/landingTheme';
import {
  StyledColumn,
  HiddenForPreRenderTrick,
  StyledLink,
  LogoImage,
  DesktopNav,
  MobileNav,
} from '../styled-components';

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <BreakpointProvider breakpoints={BREAKPOINTS}>
        <div>
          <StyledColumn />
          <HiddenForPreRenderTrick />
          <StyledLink />
          <LogoImage />
          <DesktopNav />
          <MobileNav />
        </div>
      </BreakpointProvider>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
