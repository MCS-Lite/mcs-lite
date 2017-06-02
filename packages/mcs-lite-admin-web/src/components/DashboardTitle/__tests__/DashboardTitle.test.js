import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardTitle from '../';

it('should renders <DashboardTitle> correctly without children', () => {
  const wrapper = shallow(<DashboardTitle title="title" />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should renders <DashboardTitle> correctly with children', () => {
  const wrapper = shallow(
    <DashboardTitle title="title">
      children
    </DashboardTitle>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
