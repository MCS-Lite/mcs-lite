import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { BreakpointProvider } from 'hedron';
import landingTheme, { BREAKPOINTS } from '../../../utils/landingTheme';
import {
  Container,
  StyledColumn,
  IconWrapper,
  FakeIcon,
  RWDWrapper,
} from '../styled-components';

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <BreakpointProvider breakpoints={BREAKPOINTS}>
        <div>
          <Container />
          <StyledColumn />
          <IconWrapper />
          <FakeIcon />
          <RWDWrapper />
        </div>
      </BreakpointProvider>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchStyledComponentsSnapshot();
});
