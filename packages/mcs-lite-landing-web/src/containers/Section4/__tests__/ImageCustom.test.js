import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageCustom from '../ImageCustom';

it('should renders <ImageCustom> correctly', () => {
  const wrapper = shallow(<ImageCustom />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
