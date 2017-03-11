import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceDataChannelDetail from '../DeviceDataChannelDetail';

it('should renders <DeviceDataChannelDetail> correctly without data', () => {
  const fetchDeviceMock = jest.fn();
  const fetchDatapointsMock = jest.fn();
  const wrapper = shallow(
    <DeviceDataChannelDetail
      getMessages={R.identity}
      deviceId="deviceId"
      dataChannelId="dataChannelId"
      device={{
        deviceId: 'deviceId',
        deviceName: 'deviceName',
        createUserId: 'createUserId',
        deviceDescription: 'deviceDescription',
        deviceKey: 'deviceKey',
      }}
      data={[]}
      setQuery={() => {}}
      isLoading={false}
      fetchDeviceDetail={fetchDeviceMock}
      fetchDatapoints={fetchDatapointsMock}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchDeviceMock).toHaveBeenCalledWith('deviceId');
  expect(fetchDatapointsMock).toHaveBeenCalledWith('deviceId', 'dataChannelId');
});
