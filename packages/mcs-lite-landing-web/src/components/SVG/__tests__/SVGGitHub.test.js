import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGGitHub from '../SVGGitHub';

it('should renders <SVGGitHub> correctly', () => {
  const wrapper = mount(<SVGGitHub />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
