import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signin from '../Signin';

it('should renders <Signin> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <Signin
      getMessages={R.identity}
      tryEnter={fetchMock}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});


it('should renders <Signin> correctly with errorMessage', () => {
  const wrapper = shallow(
    <Signin
      getMessages={R.identity}
      tryEnter={() => {}}
      errorMessage={'errorMessage'}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});


it('should return correctly state', () => {
  const wrapper = shallow(
    <Signin
      getMessages={R.identity}
      tryEnter={() => {}}
    />,
  );

  // Before Change
  expect(wrapper.state('email')).toBe('');
  expect(wrapper.state('password')).toBe('');

  // After Change
  wrapper.instance().onChange({ target: { name: 'email', value: 'evenchange4@gmail.com' }});
  wrapper.instance().onChange({ target: { name: 'password', value: 'password' }});
  expect(wrapper.state('email')).toBe('evenchange4@gmail.com');
  expect(wrapper.state('password')).toBe('password');
});
