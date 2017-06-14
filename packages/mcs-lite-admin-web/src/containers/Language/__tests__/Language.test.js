import React from 'react';
import R from 'ramda';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Language from '../Language';

it('should renders <Language> correctly', () => {
  const wrapper = shallow(<Language getMessages={R.identity} locale="en" />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
