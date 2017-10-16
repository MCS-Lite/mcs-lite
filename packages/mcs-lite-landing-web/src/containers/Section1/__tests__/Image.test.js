import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { BreakpointProvider } from 'hedron';
import landingTheme, { BREAKPOINTS } from '../../../utils/landingTheme';
import Image from '../Image';

jest.mock('react-responsive');

it('should renders <Image> correctly with Mobile view', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <BreakpointProvider breakpoints={BREAKPOINTS}>
        <Image />
      </BreakpointProvider>
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(Image));

  expect(tree).toMatchSnapshot();
});
