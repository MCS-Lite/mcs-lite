import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import landingTheme from '../../../utils/landingTheme';
import ImageLayerWrapper from '../ImageLayerWrapper';

it('should renders <ImageLayerWrapper> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <ImageLayerWrapper height={24} />
    </ThemeProvider>,
  );

  const tree = toJson(wrapper.find(ImageLayerWrapper));

  expect(tree).toMatchSnapshot();
});
