import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signin from '../Signin';

it('should return messages', () => {
  expect(require('../messages').default).toMatchSnapshot();
});

it('should renders <Signin> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <Signin
      getMessages={() => {}}
      tryEnter={fetchMock}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});
