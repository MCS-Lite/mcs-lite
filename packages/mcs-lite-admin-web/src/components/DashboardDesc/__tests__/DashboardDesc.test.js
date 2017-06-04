import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardDesc from '../';

it('should renders <DashboardDesc> correctly', () => {
  const wrapper = shallow(<DashboardDesc />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
