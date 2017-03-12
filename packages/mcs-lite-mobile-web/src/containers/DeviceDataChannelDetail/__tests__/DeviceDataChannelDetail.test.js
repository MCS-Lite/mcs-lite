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
      sendMessage={() => {}}
      setDatapoint={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchDeviceMock).toHaveBeenCalledWith('deviceId');
  expect(fetchDatapointsMock).toHaveBeenCalledWith('deviceId', 'dataChannelId');
});

it('should handle onResetClick correctly', () => {
  const fetchDatapointsMock = jest.fn();
  const setQueryMock = jest.fn();
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
      setQuery={setQueryMock}
      isLoading={false}
      fetchDeviceDetail={() => {}}
      fetchDatapoints={fetchDatapointsMock}
      sendMessage={() => {}}
      setDatapoint={() => {}}
    />,
  );

  // Before onResetClick
  expect(setQueryMock).not.toHaveBeenCalled();
  // After onResetClick
  wrapper.instance().onResetClick();
  expect(setQueryMock).toHaveBeenCalledWith('dataChannelId', {});
  expect(fetchDatapointsMock).toHaveBeenCalledWith('deviceId', 'dataChannelId');
});

it('should handle eventHandler correctly', () => {
  const sendMessageMock = jest.fn();
  const setDatapointMock = jest.fn();
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
      fetchDeviceDetail={() => {}}
      fetchDatapoints={() => {}}
      sendMessage={sendMessageMock}
      setDatapoint={setDatapointMock}
    />,
  );

  // Before eventHandler with submit type
  expect(setDatapointMock).not.toHaveBeenCalled();
  // After eventHandler with submit type
  wrapper.instance().eventHandler({
    type: 'SUBMIT',
    id: 'id',
    values: { value: 1 },
  });
  expect(sendMessageMock).toHaveBeenCalledWith('{"datachannelId":"id","values":{"value":1}}');


  // Before eventHandler with other type
  expect(setDatapointMock).not.toHaveBeenCalled();
  // After eventHandler with other type
  wrapper.instance().eventHandler({
    type: 'CHANGE',
    id: 'id',
    values: { value: 1 },
  });
  expect(setDatapointMock).toHaveBeenCalledWith(
    'deviceId',
    { datachannelId: 'id', values: { value: 1 }},
  );
});
