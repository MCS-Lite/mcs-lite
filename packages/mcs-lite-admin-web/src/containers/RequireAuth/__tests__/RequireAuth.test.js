import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RequireAuth from '../RequireAuth';

it('should renders <RequireAuth> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <RequireAuth requireAuth={fetchMock}>
      <div>Mock Children</div>
    </RequireAuth>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith();
});
