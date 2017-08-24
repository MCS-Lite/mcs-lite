import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Data from '../Data';

it('should renders <Data> correctly without ip', () => {
  const wrapper = shallow(
    <Data getMessages={R.identity} deleteData={() => {}} />,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
