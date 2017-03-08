import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceDetail from '../DeviceDetail';

it('should return messages', () => {
  expect(require('../messages').default).toMatchSnapshot();
});

it('should renders <DeviceDetail> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <DeviceDetail
      getMessages={R.identity}
      deviceId="deviceId"
      device={{
        deviceId: 'deviceId',
        deviceName: 'deviceName',
        createUserId: 'createUserId',
        deviceDescription: 'deviceDescription',
        deviceKey: 'deviceKey',
      }}
      isLoading={false}
      fetchDeviceDetail={fetchMock}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith('deviceId');
});

it('should renders <DeviceDetail> correctly when Menu show', () => {
  const wrapper = shallow(
    <DeviceDetail
      getMessages={R.identity}
      deviceId="deviceId"
      device={{}}
      isLoading={false}
      fetchDeviceDetail={() => {}}
    />,
  );

  wrapper.setState({ isMenuShow: true });
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should return correctly state', () => {
  const wrapper = shallow(
    <DeviceDetail
      getMessages={R.identity}
      deviceId="deviceId"
      device={{}}
      isLoading={false}
      fetchDeviceDetail={() => {}}
    />,
  );

  // Before Open
  expect(wrapper.state('isMenuShow')).toBe(false);
  expect(wrapper.state('target')).toBeUndefined();

  // After Open
  wrapper.instance().onMoreDetailClick();
  expect(wrapper.state('isMenuShow')).toBe(true);

  // After Hide
  wrapper.instance().onHide();
  expect(wrapper.state('isMenuShow')).toBe(false);
});
