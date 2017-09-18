import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Section1 from '../Section1';

it('should renders <Section1> correctly', () => {
  const wrapper = shallow(<Section1 getMessages={t => t} />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
