import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardLayout from '../DashboardLayout';
import RestartNotification from '../../../components/RestartNotification';
import { HeaderItem, NavItemControl } from '../styled-components';

it('should renders <DashboardLayout> without RestartNotification', () => {
  const wrapper = shallow(
    <DashboardLayout
      isStarted
      getMessages={R.identity}
      signout={() => {}}
      start={() => {}}
      stop={() => {}}
      isNedb={false}
      isRestartRequired
      restart={() => {}}
    >
      Content
    </DashboardLayout>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should renders <DashboardLayout> correctly when started', () => {
  const wrapper = shallow(
    <DashboardLayout
      isStarted
      getMessages={R.identity}
      signout={() => {}}
      start={() => {}}
      stop={() => {}}
      isNedb
      isRestartRequired
      restart={() => {}}
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
      isNedb
      isRestartRequired
      restart={() => {}}
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
      isNedb
      isRestartRequired
      restart={() => {}}
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
      isNedb
      isRestartRequired
      restart={() => {}}
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
      isNedb
      isRestartRequired
      restart={() => {}}
    >
      Content
    </DashboardLayout>,
  );

  expect(mockFn).not.toHaveBeenCalled();

  // After Click
  wrapper.find(NavItemControl).last().simulate('click');
  expect(mockFn).toHaveBeenCalledWith('confirm');
});

it('should handle restart', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(
    <DashboardLayout
      isStarted={false}
      getMessages={R.identity}
      signout={() => {}}
      start={() => {}}
      stop={() => {}}
      isNedb
      isRestartRequired
      restart={mockFn}
    >
      Content
    </DashboardLayout>,
  );

  expect(mockFn).not.toHaveBeenCalled();

  // After Click
  wrapper.find(RestartNotification).simulate('click');
  expect(mockFn).toHaveBeenCalledWith('restart.success');
});
