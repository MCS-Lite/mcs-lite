import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGCode from '../SVGCode';

it('should renders <SVGCode> correctly', () => {
  const wrapper = mount(<SVGCode />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
