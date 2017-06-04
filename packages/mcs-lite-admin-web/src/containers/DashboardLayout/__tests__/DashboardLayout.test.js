import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardLayout from '../DashboardLayout';

it('should renders <DashboardLayout> correctly', () => {
  const wrapper = shallow(
    <DashboardLayout getMessages={R.identity} signout={() => {}}>
      Content
    </DashboardLayout>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
