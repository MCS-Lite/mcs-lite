import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { BreakpointProvider } from 'hedron';
import landingTheme, { BREAKPOINTS } from '../../../utils/landingTheme';
import {
  StyledSectionRow,
  StyledImageColumn,
  RWDCenterWrapper,
  ImageLayerWrapper,
  ChartWrapper,
} from '../styled-components';

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <BreakpointProvider breakpoints={BREAKPOINTS}>
        <div>
          <StyledSectionRow>
            children
          </StyledSectionRow>
          <RWDCenterWrapper />
          <StyledImageColumn />
          <ImageLayerWrapper />
          <ChartWrapper />
        </div>
      </BreakpointProvider>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchStyledComponentsSnapshot();
});
