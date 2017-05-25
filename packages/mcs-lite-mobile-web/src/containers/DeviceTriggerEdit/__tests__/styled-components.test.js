import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import mobileTheme from '../../../utils/mobileTheme';
import {
  Item,
  Body,
  StyledSamll,
  ButtonWrapper,
  ScaledSwitch,
} from '../styled-components';

jest.mock('mcs-lite-ui/lib/Switch');
jest.mock('mcs-lite-ui/lib/Hr');
jest.mock('mcs-lite-ui/lib/Small');
jest.mock('mcs-lite-ui/lib/MobileContentWrapper');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <div>
        <Item />
        <Body />
        <StyledSamll />
        <ButtonWrapper />
        <ScaledSwitch />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
