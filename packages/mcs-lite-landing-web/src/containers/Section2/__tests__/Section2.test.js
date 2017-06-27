import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Section2 from '../Section2';

it('should renders <Section2> correctly', () => {
  const wrapper = shallow(<Section2 getMessages={t => t} />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
