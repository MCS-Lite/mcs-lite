import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGScreen from '../SVGScreen';

it('should renders <SVGScreen> correctly', () => {
  const wrapper = mount(<SVGScreen />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
