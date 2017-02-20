import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceDetailInfo from '../DeviceDetailInfo';

it('should return messages', () => {
  expect(require('../messages').default).toMatchSnapshot();
});

it('should renders <DeviceDetailInfo> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <DeviceDetailInfo
      getMessages={() => {}}
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
