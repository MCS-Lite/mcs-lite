import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGSignal from '../SVGSignal';

it('should renders <SVGSignal> correctly', () => {
  const wrapper = mount(<SVGSignal />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
