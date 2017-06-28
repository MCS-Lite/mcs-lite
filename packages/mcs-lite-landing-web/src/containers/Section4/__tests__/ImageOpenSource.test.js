import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageOpenSource from '../ImageOpenSource';

it('should renders <ImageOpenSource> correctly', () => {
  const wrapper = shallow(<ImageOpenSource />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
