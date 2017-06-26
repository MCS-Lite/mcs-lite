import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGMachine from '../SVGMachine';

it('should renders <SVGMachine> correctly', () => {
  const wrapper = mount(<SVGMachine />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
