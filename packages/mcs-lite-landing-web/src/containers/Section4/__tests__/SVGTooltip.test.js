import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGTooltip from '../SVGTooltip';

it('should renders <SVGTooltip> correctly', () => {
  const wrapper = mount(<SVGTooltip />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
