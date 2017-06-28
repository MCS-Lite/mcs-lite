import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../Header';

it('should renders <Header> correctly', () => {
  const wrapper = shallow(
    <Header getMessages={t => t} locale="en" breakpoints={{ sm: 1 }} />,
  );

  const tree = toJson(wrapper);

  expect(tree).toMatchStyledComponentsSnapshot();
});
