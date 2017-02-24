import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Password from '../Password';

it('should return messages', () => {
  expect(require('../messages').default).toMatchSnapshot();
});

it('should renders <Password> correctly', () => {
  const wrapper = shallow(
    <Password
      getMessages={R.identity}
      changePassword={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should return correctly state', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <Password
      getMessages={R.identity}
      changePassword={fetchMock}
    />,
  );

  // Before Open
  expect(wrapper.state('new1')).toBe('');
  expect(wrapper.state('new2')).toBe('');

  // After Change
  wrapper.instance().onChange({ target: { name: 'new1', value: '1234' }});
  wrapper.instance().onChange({ target: { name: 'new2', value: '1234' }});
  expect(wrapper.state('new1')).toBe('1234');
  expect(wrapper.state('new2')).toBe('1234');

  // Before Submit
  expect(fetchMock).not.toHaveBeenCalled();

  // After Submit
  wrapper.instance().onSubmit({ preventDefault: () => {} });
  expect(fetchMock).toHaveBeenCalledWith({ message: 'success', password: '1234' });
});

it('should render with error mesage', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <Password
      getMessages={R.identity}
      changePassword={fetchMock}
    />,
  );

  // Set different password
  wrapper.setState({ new1: '1234' });
  wrapper.setState({ new2: '12345' });

  expect(toJson(wrapper)).toMatchSnapshot();
});
