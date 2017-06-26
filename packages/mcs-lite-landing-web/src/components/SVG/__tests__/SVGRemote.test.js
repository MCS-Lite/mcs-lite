import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGRemote from '../SVGRemote';

it('should renders <SVGRemote> correctly', () => {
  const wrapper = mount(<SVGRemote />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
