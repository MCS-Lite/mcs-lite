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
