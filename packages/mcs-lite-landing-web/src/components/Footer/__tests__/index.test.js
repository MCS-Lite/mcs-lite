import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import IntlProvider from '../../../containers/IntlProvider';
import Container from '../';

jest.mock('mcs-lite-ui/lib/utils/getCurrentYear', () => () => 'mockYear');

it('should render Container correctly with HOC', () => {
  const wrapper = shallow(
    <IntlProvider>
      <Container />
    </IntlProvider>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
