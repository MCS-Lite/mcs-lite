import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Section3 from '../Section3';

it('should renders <Section3> correctly', () => {
  const wrapper = shallow(<Section3 getMessages={t => t} />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
