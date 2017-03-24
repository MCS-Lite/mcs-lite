import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IntlProvider from '../IntlProvider';

it('should renders <IntlProvider> correctly', () => {
  const fetchMock = jest.fn();
  const wrapper = shallow(
    <IntlProvider defaultLocale="zh-TW" pushLocale={fetchMock}>
      <div>Mock Children</div>
    </IntlProvider>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
  expect(fetchMock).toHaveBeenCalledWith('zh-TW');
});
