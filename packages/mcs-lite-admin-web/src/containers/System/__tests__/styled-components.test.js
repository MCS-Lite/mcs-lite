import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import {
  StyledButton,
  TabWrapper,
  StyledLoadableCodeMirror,
} from '../styled-components';

jest.mock('mcs-lite-ui/lib/Button');
jest.mock('mcs-lite-ui/lib/P');
jest.mock('react-codemirror');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <div>
        <StyledButton />
        <TabWrapper />
        <StyledLoadableCodeMirror />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
