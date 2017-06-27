import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Chart from '../Chart';

it('should renders <Chart> correctly', () => {
  const wrapper = shallow(<Chart />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
