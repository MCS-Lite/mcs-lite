import React from 'react';
import * as R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

it('should renders <App> correctly without toasts', () => {
  const wrapper = shallow(
    <App getMessages={R.identity} toasts={[]}>
      children
    </App>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should renders <App> correctly with toasts', () => {
  const wrapper = shallow(
    <App
      getMessages={R.identity}
      toasts={[{ key: 'key', kind: 'kind', children: 'children' }]}
    >
      children
    </App>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
