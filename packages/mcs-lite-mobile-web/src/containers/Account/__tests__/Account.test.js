import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Account from '../Account';
import { FlatButton } from '../styled-components';

jest.mock('../../../../package.json', () => ({
  version: '0.0.0',
}));

it('should return messages', () => {
  expect(require('../messages').default).toMatchSnapshot();
});

it('should renders <Account> correctly', () => {
  const wrapper = shallow(
    <Account
      userName="userName"
      email="email"
      signout={() => {}}
      getMessages={R.identity}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should return correctly payload when clicking signout', () => {
  const signoutMock = jest.fn();
  const wrapper = shallow(
    <Account
      userName="userName"
      email="email"
      signout={signoutMock}
      getMessages={R.identity}
    />,
  );

  // Before clicking
  expect(signoutMock).not.toHaveBeenCalled();

  // After clicking
  wrapper.find(FlatButton).last().simulate('click');
  expect(signoutMock).toHaveBeenCalled();
});
