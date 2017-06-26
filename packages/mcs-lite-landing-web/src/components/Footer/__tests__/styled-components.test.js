import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import landingTheme from '../../../utils/landingTheme';
import { FakeIcon } from '../styled-components';

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <div>
        <FakeIcon />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchStyledComponentsSnapshot();
});
