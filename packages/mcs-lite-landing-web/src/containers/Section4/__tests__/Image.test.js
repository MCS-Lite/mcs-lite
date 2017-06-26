import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ImageOpenSouce, ImageCustom } from '../Image';

it('should renders <ImageOpenSouce> correctly', () => {
  const wrapper = shallow(<ImageOpenSouce />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});

it('should renders <ImageCustom> correctly', () => {
  const wrapper = shallow(<ImageCustom />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
