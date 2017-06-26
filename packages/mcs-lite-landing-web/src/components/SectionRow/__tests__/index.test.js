import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import mobileTheme from '../../../utils/landingTheme';
import SectionRow from '../';

it('should renders <SectionRow> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <SectionRow>
        children
      </SectionRow>
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(SectionRow));

  expect(tree).toMatchStyledComponentsSnapshot();
});
