import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import landingTheme from '../../../utils/landingTheme';
import BackgroundImage from '../BackgroundImage';

it('should renders <BackgroundImage> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <BackgroundImage src="src" />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(BackgroundImage));

  expect(tree).toMatchStyledComponentsSnapshot();
});
