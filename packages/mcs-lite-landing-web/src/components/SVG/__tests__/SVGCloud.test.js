import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGCloud from '../SVGCloud';

it('should renders <SVGCloud> correctly', () => {
  const wrapper = mount(<SVGCloud />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
