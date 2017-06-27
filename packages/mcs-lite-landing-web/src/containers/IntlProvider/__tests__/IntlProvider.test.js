import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IntlProvider from '../IntlProvider';

jest.mock('mcs-lite-translation/lib/mcs-lite-landing-web.json', () => ({
  'zh-TW': { key: 'value' },
}));

it('should renders <IntlProvider> correctly', () => {
  const router = {
    params: {
      locale: 'zh-TW',
    },
  };
  const wrapper = shallow(
    <IntlProvider router={router}>
      <div>children</div>
    </IntlProvider>,
  );

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});
