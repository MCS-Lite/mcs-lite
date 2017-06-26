import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGFacebook from '../SVGFacebook';

it('should renders <SVGFacebook> correctly', () => {
  const wrapper = mount(<SVGFacebook />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
