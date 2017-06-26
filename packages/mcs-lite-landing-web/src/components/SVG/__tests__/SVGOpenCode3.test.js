import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGOpenCode3 from '../SVGOpenCode3';

it('should renders <SVGOpenCode3> correctly', () => {
  const wrapper = mount(<SVGOpenCode3 />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
