import React from 'react';
import * as R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signup from '../Signup';

it('should renders <Signup> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <Signup getMessages={R.identity} tryEnter={fetchMock} />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});

it('should renders <Signup> correctly with errorMessage', () => {
  const wrapper = shallow(
    <Signup
      getMessages={R.identity}
      tryEnter={() => {}}
      errorMessage="errorMessage"
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should return correctly state', () => {
  const wrapper = shallow(
    <Signup getMessages={R.identity} tryEnter={() => {}} />,
  );

  // Before Change
  expect(wrapper.state('email')).toBe('');
  expect(wrapper.state('password')).toBe('');

  // After Change
  wrapper
    .instance()
    .onChange({ target: { name: 'email', value: 'evenchange4@gmail.com' } });
  wrapper
    .instance()
    .onChange({ target: { name: 'password', value: 'password' } });
  expect(wrapper.state('email')).toBe('evenchange4@gmail.com');
  expect(wrapper.state('password')).toBe('password');
});

it('should render error message and style', () => {
  const wrapper = shallow(
    <Signup getMessages={R.identity} tryEnter={() => {}} />,
  );

  // Before Change
  expect(wrapper.state('password')).toBe('');
  expect(wrapper.state('password2')).toBe('');

  // Password error
  wrapper.setState({ password: '123' });
  wrapper.setState({ password2: '1234' });

  expect(toJson(wrapper)).toMatchSnapshot();
});
