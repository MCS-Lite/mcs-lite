import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardLayout from '../DashboardLayout';

it('should renders <DashboardLayout> correctly when started', () => {
  const wrapper = shallow(
    <DashboardLayout
      isStarted
      getMessages={R.identity}
      signout={() => {}}
      start={() => {}}
      stop={() => {}}
    >
      Content
    </DashboardLayout>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should renders <DashboardLayout> correctly when stopped', () => {
  const wrapper = shallow(
    <DashboardLayout
      isStarted={false}
      getMessages={R.identity}
      signout={() => {}}
      start={() => {}}
      stop={() => {}}
    >
      Content
    </DashboardLayout>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
