import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Section5 from '../Section5';

it('should renders <Section5> correctly', () => {
  const wrapper = shallow(<Section5 getMessages={t => t} />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
