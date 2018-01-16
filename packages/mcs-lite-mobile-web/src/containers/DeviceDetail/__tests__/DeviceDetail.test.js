import React from 'react';
import * as R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceDetail from '../DeviceDetail';
import WebSocketNotification from '../../../components/WebSocketNotification';

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
      sendMessage={() => {}}
      setDatapoint={() => {}}
      reconnect={() => {}}
      isWebSocketClose={false}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith('deviceId');
});

it('should renders <DeviceDetail> correctly with Notification', () => {
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
      sendMessage={() => {}}
      setDatapoint={() => {}}
      reconnect={() => {}}
      isWebSocketClose
    />,
  );

  expect(toJson(wrapper.find(WebSocketNotification))).toMatchSnapshot();
});

it('should renders <DeviceDetail> correctly when Menu show', () => {
  const wrapper = shallow(
    <DeviceDetail
      getMessages={R.identity}
      deviceId="deviceId"
      device={{}}
      isLoading={false}
      fetchDeviceDetail={() => {}}
      sendMessage={() => {}}
      setDatapoint={() => {}}
      reconnect={() => {}}
      isWebSocketClose={false}
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
      sendMessage={() => {}}
      setDatapoint={() => {}}
      reconnect={() => {}}
      isWebSocketClose={false}
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

it('should handle eventHandler correctly', () => {
  const sendMessageMock = jest.fn();
  const setDatapointMock = jest.fn();
  const wrapper = shallow(
    <DeviceDetail
      getMessages={R.identity}
      deviceId="deviceId"
      device={{}}
      isLoading={false}
      fetchDeviceDetail={() => {}}
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
    <DeviceDetail
      getMessages={R.identity}
      deviceId="deviceId"
      device={{}}
      isLoading={false}
      fetchDeviceDetail={() => {}}
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

it('should handle reFetch', () => {
  const mockFetchDeviceDetail = jest.fn();
  const wrapper = shallow(
    <DeviceDetail
      getMessages={R.identity}
      deviceId="deviceId"
      device={{}}
      isLoading={false}
      fetchDeviceDetail={mockFetchDeviceDetail}
      sendMessage={() => {}}
      setDatapoint={() => {}}
      reconnect={() => {}}
      isWebSocketClose
    />,
  );

  // After eventHandler with submit type
  wrapper.instance().reFetch();
  expect(mockFetchDeviceDetail).toHaveBeenCalledWith('deviceId', true);
});
