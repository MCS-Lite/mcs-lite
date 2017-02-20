import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StyledLink from '../';

it('should renders <StyledLink> correctly', () => {
  const wrapper = shallow(
    <StyledLink />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
