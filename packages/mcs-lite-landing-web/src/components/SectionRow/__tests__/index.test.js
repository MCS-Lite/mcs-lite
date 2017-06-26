import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Container from '../';

it('should render Container correctly with HOC', () => {
  const wrapper = shallow(
    <Container>
      children
    </Container>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
