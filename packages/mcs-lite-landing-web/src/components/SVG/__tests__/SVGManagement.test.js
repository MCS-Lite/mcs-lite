import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGManagement from '../SVGManagement';

it('should renders <SVGManagement> correctly', () => {
  const wrapper = mount(<SVGManagement />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
