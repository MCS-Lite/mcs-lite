import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SVGCard from '../SVGCard';

it('should renders <SVGCard> correctly', () => {
  const wrapper = mount(<SVGCard />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
