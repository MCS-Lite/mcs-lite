import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Account from '../Account';

it('should return messages', () => {
  expect(require('../messages').default).toMatchSnapshot();
});

it('should renders <Account> correctly', () => {
  const wrapper = shallow(
    <Account
      userName="userName"
      signout={() => {}}
      getMessages={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
