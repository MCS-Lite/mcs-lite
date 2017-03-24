import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DeviceList from '../DeviceList';

it('should renders <DeviceList> correctly without devices', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <DeviceList
      getMessages={R.identity}
      devices={[]}
      isLoading={false}
      fetchDeviceList={fetchMock}
    />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});

it('should renders <DeviceList> correctly with one device', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <DeviceList
      getMessages={R.identity}
      devices={[
        {
          deviceId: 'deviceId',
          deviceName: 'deviceName',
          deviceImageURL: 'deviceImageURL',
        },
      ]}
      isLoading={false}
      fetchDeviceList={fetchMock}
    />
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});

it('should renders <DeviceList> correctly when Filter open', () => {
  const wrapper = shallow(
    <DeviceList
      getMessages={R.identity}
      devices={[]}
      isLoading={false}
      fetchDeviceList={() => {}}
    />
  );

  wrapper.setState({ isFilterOpen: true });
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should return correctly state', () => {
  const wrapper = shallow(
    <DeviceList
      getMessages={R.identity}
      devices={[]}
      isLoading={false}
      fetchDeviceList={() => {}}
    />
  );

  // Before Open
  expect(wrapper.state('filterValue')).toBe('');
  expect(wrapper.state('isFilterOpen')).toBe(false);

  // After Open
  wrapper.instance().onFilterClick();
  wrapper.instance().onFilterChange({ target: { value: 'keyword' } });
  expect(wrapper.state('filterValue')).toBe('keyword');
  expect(wrapper.state('isFilterOpen')).toBe(true);

  // After Close
  wrapper.instance().onClickOutside({ target: undefined });
  expect(wrapper.state('filterValue')).toBe('');
  expect(wrapper.state('isFilterOpen')).toBe(false);
});
