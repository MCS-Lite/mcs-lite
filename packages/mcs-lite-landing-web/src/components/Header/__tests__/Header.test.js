import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BreakpointProvider } from 'hedron';
import { ThemeProvider, BREAKPOINTS } from 'styled-components';
import mobileTheme from '../../../utils/landingTheme';
import Header from '../Header';

jest.mock('mcs-lite-ui/lib/LazyloadOnce');
jest.mock('mcs-lite-ui/lib/Spin');
jest.mock('mcs-lite-ui/lib/LandingHeader/NavItemDropdown');

it('should renders <Header> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <BreakpointProvider breakpoints={BREAKPOINTS}>
        <Header getMessages={t => t} locale="en" />
      </BreakpointProvider>
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(Header));

  expect(tree).toMatchStyledComponentsSnapshot();
});
