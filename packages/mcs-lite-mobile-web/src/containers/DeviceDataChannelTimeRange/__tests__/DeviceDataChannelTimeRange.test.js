import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceDataChannelTimeRange from '../DeviceDataChannelTimeRange';

jest.mock('../../../utils/datetimeFormat', () => () => 'mockDatetime');

it('should renders <DeviceDataChannelTimeRange> correctly', () => {
  const fetchDeviceMock = jest.fn();
  const wrapper = shallow(
    <DeviceDataChannelTimeRange
      getMessages={R.identity}
      deviceId="deviceId"
      dataChannelId="dataChannelId"
      start={1}
      end={2}
      setQuery={() => {}}
      isLoading={false}
      fetchDeviceDetail={fetchDeviceMock}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchDeviceMock).toHaveBeenCalledWith('deviceId');
});

it('should handle DatetimePickerDialog with correct state', () => {
  const setQueryMock = jest.fn();
  const wrapper = shallow(
    <DeviceDataChannelTimeRange
      getMessages={R.identity}
      deviceId="deviceId"
      dataChannelId="dataChannelId"
      start={1}
      end={2}
      setQuery={setQueryMock}
      isLoading={false}
      fetchDeviceDetail={() => {}}
    />,
  );

  // Before Click
  expect(wrapper.state('isDialogshow')).toBe(false);
  expect(wrapper.state('dialogTarget')).toBe('start');

  // After onStartTimeClick
  wrapper.instance().onStartTimeClick();
  expect(wrapper.state('isDialogshow')).toBe(true);
  expect(wrapper.state('dialogTarget')).toBe('start');

  // After onEndTimeClick
  wrapper.instance().onEndTimeClick();
  expect(wrapper.state('isDialogshow')).toBe(true);
  expect(wrapper.state('dialogTarget')).toBe('end');

  // After onHide
  wrapper.instance().onHide();
  expect(wrapper.state('isDialogshow')).toBe(false);
  expect(wrapper.state('dialogTarget')).toBe('end');

  // Before onPickerSubmit
  expect(wrapper.state('end')).toBe(2);
  // After onPickerSubmit
  wrapper.instance().onPickerSubmit(3);
  expect(wrapper.state('end')).toBe(3);

  // Before onSubmit
  expect(setQueryMock).not.toHaveBeenCalled();
  // After onSubmit
  wrapper.instance().onSubmit();
  expect(setQueryMock).toHaveBeenCalledWith('dataChannelId', { start: 1, end: 3 });
});
