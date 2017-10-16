import React from 'react';
import * as R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceTrigger from '../DeviceTrigger';

it('should renders <DeviceTrigger> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <DeviceTrigger
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
