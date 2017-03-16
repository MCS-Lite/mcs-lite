import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { IntlProvider } from 'react-intl';
import Container from '../';

it('should render Container correctly with HOC', () => {
  const wrapper = shallow(
    <IntlProvider locale="zh-TW" messages={{}}>
      <Container />
    </IntlProvider>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
