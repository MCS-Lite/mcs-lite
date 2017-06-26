import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGData from '../SVGData';

it('should renders <SVGData> correctly', () => {
  const wrapper = mount(<SVGData />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
