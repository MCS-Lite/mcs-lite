import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

it('should renders <App> correctly without toasts', () => {
  const wrapper = shallow(
    <App
      toasts={[]}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});


it('should renders <App> correctly with toasts', () => {
  const wrapper = shallow(
    <App
      toasts={[{ key: 'key', kind: 'kind', children: 'children' }]}
    />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
