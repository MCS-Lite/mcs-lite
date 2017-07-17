import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import landingTheme from '../../../utils/landingTheme';
import { ImageWrapper, LazyloadIcon, StyledRow } from '../styled-components';

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <div>
        <ImageWrapper />
        <StyledRow />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});

it('should render LazyloadIcon correctly', () => {
  const wrapper = shallow(
    <LazyloadIcon>
      children
    </LazyloadIcon>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
