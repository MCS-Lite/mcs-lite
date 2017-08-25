import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardLayout from '../DashboardLayout';
import { HeaderItem, NavItemControl } from '../styled-components';

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

it('should handle stop', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(
    <DashboardLayout
      isStarted
      getMessages={R.identity}
      signout={() => {}}
      start={() => {}}
      stop={mockFn}
    >
      Content
    </DashboardLayout>,
  );

  expect(mockFn).not.toHaveBeenCalled();

  // After Click
  wrapper.find(HeaderItem).simulate('click');
  expect(mockFn).toHaveBeenCalledWith('stop.success');
});

it('should handle start', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(
    <DashboardLayout
      isStarted={false}
      getMessages={R.identity}
      signout={() => {}}
      start={mockFn}
      stop={() => {}}
    >
      Content
    </DashboardLayout>,
  );

  expect(mockFn).not.toHaveBeenCalled();

  // After Click
  wrapper.find(HeaderItem).simulate('click');
  expect(mockFn).toHaveBeenCalledWith('start.success');
});

it('should handle signout', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(
    <DashboardLayout
      isStarted={false}
      getMessages={R.identity}
      signout={mockFn}
      start={() => {}}
      stop={() => {}}
    >
      Content
    </DashboardLayout>,
  );

  expect(mockFn).not.toHaveBeenCalled();

  // After Click
  wrapper.find(NavItemControl).last().simulate('click');
  expect(mockFn).toHaveBeenCalledWith('confirm');
});
