import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import {
  StyledButton,
  TabWrapper,
  StyledCodeMirror,
} from '../styled-components';

jest.mock('mcs-lite-ui');
jest.mock('react-codemirror');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <div>
        <StyledButton />
        <TabWrapper />
        <StyledCodeMirror />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
