import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LocaleFooter from '../';

it('should renders <LocaleFooter> correctly', () => {
  const wrapper = shallow(<LocaleFooter />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
