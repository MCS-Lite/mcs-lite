import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceList from '../DeviceList';

it('should return messages', () => {
  expect(require('../messages').default).toMatchSnapshot();
});

it('should renders <DeviceList> correctly without devices', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <DeviceList
      getMessages={() => {}}
      devices={[]}
      isLoading={false}
      fetchDeviceList={fetchMock}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});

it('should renders <DeviceList> correctly with one device', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <DeviceList
      getMessages={() => {}}
      devices={[
        {
          deviceId: 'deviceId',
          deviceName: 'deviceName',
          deviceImageURL: 'deviceImageURL',
        },
      ]}
      isLoading={false}
      fetchDeviceList={fetchMock}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});
