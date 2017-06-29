import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import landingTheme from '../../../utils/landingTheme';
import Header from '../Header';

jest.mock('react-media');

it('should renders <Header> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <Header getMessages={t => t} locale="en" breakpoints={{ sm: 1 }} />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper);

  expect(tree).toMatchStyledComponentsSnapshot();
});
