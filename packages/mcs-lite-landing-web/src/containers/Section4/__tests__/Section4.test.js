import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Section4 from '../Section4';

it('should renders <Section4> correctly', () => {
  const wrapper = shallow(<Section4 getMessages={t => t} />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
