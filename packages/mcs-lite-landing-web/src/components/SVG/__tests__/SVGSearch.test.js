import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGSearch from '../SVGSearch';

it('should renders <SVGSearch> correctly', () => {
  const wrapper = mount(<SVGSearch />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
