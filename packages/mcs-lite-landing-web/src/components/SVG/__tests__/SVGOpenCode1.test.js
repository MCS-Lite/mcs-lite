import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGOpenCode1 from '../SVGOpenCode1';

it('should renders <SVGOpenCode1> correctly', () => {
  const wrapper = mount(<SVGOpenCode1 />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
