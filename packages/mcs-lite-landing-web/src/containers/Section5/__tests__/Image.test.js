import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Image from '../Image';

it('should renders <Image> correctly', () => {
  const wrapper = shallow(<Image />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
