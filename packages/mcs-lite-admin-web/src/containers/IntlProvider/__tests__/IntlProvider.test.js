import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IntlProvider from '../IntlProvider';

jest.mock('mcs-lite-translation/lib/mcs-lite-admin-web.json', () => ({}));

it('should renders <IntlProvider> correctly', () => {
  const wrapper = shallow(
    <IntlProvider defaultLocale="zh-TW" locale="en">
      <div>Mock Children</div>
    </IntlProvider>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
