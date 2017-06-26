import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGMobile from '../SVGMobile';

it('should renders <SVGMobile> correctly', () => {
  const wrapper = mount(<SVGMobile />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
