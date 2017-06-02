import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Ip from '../Ip';

it('should renders <Ip> correctly without ip', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <Ip getMessages={R.identity} ips={[]} isLoading fetchIpList={fetchMock} />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});

it('should renders <Ip> correctly with ip', () => {
  const wrapper = shallow(
    <Ip
      getMessages={R.identity}
      ips={['127.0.0.1', 'localhost']}
      isLoading={false}
      fetchIpList={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
