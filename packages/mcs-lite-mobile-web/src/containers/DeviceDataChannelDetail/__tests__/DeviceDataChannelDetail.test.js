import React from 'react';
import * as R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceDataChannelDetail from '../DeviceDataChannelDetail';
import WebSocketNotification from '../../../components/WebSocketNotification';

jest.mock('mcs-lite-ui/lib/utils/dataChannelHelper', () => ({
  dataChannelTypeMapper: () => 'mock-dataChannelTypeMapper',
  areaChartTypeMapper: () => {},
}));
jest.mock('mcs-lite-ui/lib/DataChannelAdapter');
jest.mock('mcs-lite-ui/lib/DataChannelCard');

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
      datachannel={{
        hasHistory: true,
        channelType: {
          name: 'name',
        },
        datapoints: {
          values: 0,
        },
      }}
      data={[]}
      setQuery={() => {}}
      isLoading={false}
      fetchDeviceDetail={fetchDeviceMock}
      fetchDatapoints={fetchDatapointsMock}
      sendMessage={() => {}}
      setDatapoint={() => {}}
      reconnect={() => {}}
      isWebSocketClose={false}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchDeviceMock).toHaveBeenCalledWith('deviceId');
  expect(fetchDatapointsMock).toHaveBeenCalledWith('deviceId', 'dataChannelId');
});

it('should renders <DeviceDataChannelDetail> correctly without history', () => {
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
      datachannel={{
        hasHistory: false,
        channelType: {
          name: 'name',
        },
        datapoints: {
          values: 0,
        },
      }}
      data={[]}
      setQuery={() => {}}
      isLoading={false}
      fetchDeviceDetail={() => {}}
      fetchDatapoints={() => {}}
      sendMessage={() => {}}
      setDatapoint={() => {}}
      reconnect={() => {}}
      isWebSocketClose={false}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should renders <DeviceDataChannelDetail> correctly with Notification', () => {
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
      reconnect={() => {}}
      isWebSocketClose
    />,
  );

  expect(toJson(wrapper.find(WebSocketNotification))).toMatchSnapshot();
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
      reconnect={() => {}}
      isWebSocketClose={false}
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
      reconnect={() => {}}
      isWebSocketClose={false}
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
  expect(sendMessageMock).toHaveBeenCalledWith(
    '{"datachannelId":"id","values":{"value":1}}',
  );

  // Before eventHandler with other type
  expect(setDatapointMock).not.toHaveBeenCalled();
  // After eventHandler with other type
  wrapper.instance().eventHandler({
    type: 'CHANGE',
    id: 'id',
    values: { value: 1 },
  });
  expect(setDatapointMock).toHaveBeenCalledWith('deviceId', {
    datachannelId: 'id',
    values: { value: 1 },
  });
});

it('should handle reconnect', () => {
  const mockReconnect = jest.fn();
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
      sendMessage={() => {}}
      setDatapoint={() => {}}
      reconnect={mockReconnect}
      isWebSocketClose
    />,
  );

  // Before reconnect
  expect(mockReconnect).not.toHaveBeenCalled();

  // After reconnect
  wrapper
    .find(WebSocketNotification)
    .props()
    .onClick();
  expect(mockReconnect).toHaveBeenCalled();
});
