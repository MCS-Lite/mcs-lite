import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Toast from '../Toast';

it('should renders <Toast> correctly without toasts', () => {
  const wrapper = shallow(
    <Toast
      toasts={[]}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});


it('should renders <Toast> correctly with toasts', () => {
  const wrapper = shallow(
    <Toast
      toasts={[{ key: 'key', kind: 'kind', children: 'children' }]}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
