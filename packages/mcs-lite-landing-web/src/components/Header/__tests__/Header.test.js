import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { BreakpointProvider } from 'hedron';
import landingTheme, { BREAKPOINTS } from '../../../utils/landingTheme';
import Header from '../Header';

it('should renders <Header> correctly with Desktop view', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <BreakpointProvider breakpoints={BREAKPOINTS}>
        <Header
          getMessages={t => t}
          locale="en"
          breakpoints={{ sm: 1, lg: 3 }}
        />
      </BreakpointProvider>
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(Header));

  expect(tree).toMatchSnapshot();
});
