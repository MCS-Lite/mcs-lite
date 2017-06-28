import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IntlProvider from '../../IntlProvider';
import Container from '../';

it('should render Container correctly with HOC', () => {
  const wrapper = shallow(
    <IntlProvider>
      <Container />
    </IntlProvider>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
