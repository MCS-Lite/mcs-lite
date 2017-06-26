import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGOpenCode2 from '../SVGOpenCode2';

it('should renders <SVGOpenCode2> correctly', () => {
  const wrapper = mount(<SVGOpenCode2 />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
