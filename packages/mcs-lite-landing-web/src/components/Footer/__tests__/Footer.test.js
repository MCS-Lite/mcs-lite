import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BreakpointProvider } from 'hedron';
import { ThemeProvider, BREAKPOINTS } from 'styled-components';
import mobileTheme from '../../../utils/landingTheme';
import Footer from '../Footer';

jest.mock('mcs-lite-ui/lib/LazyloadOnce');

it('should renders <Footer> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <BreakpointProvider breakpoints={BREAKPOINTS}>
        <Footer getMessages={t => t} />
      </BreakpointProvider>
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(Footer));

  expect(tree).toMatchStyledComponentsSnapshot();
});
