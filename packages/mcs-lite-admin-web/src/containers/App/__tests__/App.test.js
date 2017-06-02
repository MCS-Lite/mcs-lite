import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

it('should renders <App> correctly without toasts', () => {
  const wrapper = shallow(
    <App getMessages={R.identity} toasts={[]} isLoading={false}>
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
      isLoading={false}
    >
      children
    </App>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should renders <App> correctly with loading', () => {
  const wrapper = shallow(
    <App getMessages={R.identity} toasts={[]} isLoading>
      children
    </App>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
