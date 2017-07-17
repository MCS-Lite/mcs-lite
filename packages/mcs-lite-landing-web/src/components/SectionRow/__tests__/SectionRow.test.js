import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import landingTheme from '../../../utils/landingTheme';
import SectionRow from '../SectionRow';

it('should renders <SectionRow> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <SectionRow>
        children
      </SectionRow>
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(SectionRow));

  expect(tree).toMatchSnapshot();
});
