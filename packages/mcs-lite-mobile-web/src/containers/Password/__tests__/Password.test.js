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
