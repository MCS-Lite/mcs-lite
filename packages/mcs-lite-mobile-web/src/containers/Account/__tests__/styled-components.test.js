import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import mobileTheme from '../../../utils/mobileTheme';
import {
  FlatButton,
  Container,
  Body,
  StyledLogo,
  Footer,
} from '../styled-components';

jest.mock('mcs-lite-ui/lib/Button');
jest.mock('mcs-lite-ui/lib/P');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <div>
        <FlatButton />
        <Container />
        <Body />
        <StyledLogo />
        <Footer />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
