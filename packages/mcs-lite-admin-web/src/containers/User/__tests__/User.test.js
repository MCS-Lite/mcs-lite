import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import User from '../User';

it('should renders <User> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <User
      getMessages={R.identity}
      users={[
        {
          userId: 'user1',
          email: 'email1',
          userName: 'userName1',
          isActive: true,
        },
        {
          userId: 'user2',
          email: 'email2',
          userName: 'userName2',
          isActive: false,
        },
      ]}
      fetchUsers={fetchMock}
      deleteUsers={() => {}}
      createUser={() => {}}
      createUserByCSV={() => {}}
      changePasswordById={() => {}}
      putIsActiveById={() => {}}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalled();
});
