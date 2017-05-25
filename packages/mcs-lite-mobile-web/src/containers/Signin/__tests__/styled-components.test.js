import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import mobileTheme from '../../../utils/mobileTheme';
import { Layout, Form } from '../styled-components';

jest.mock('mcs-lite-ui/lib/Hr');
jest.mock('mcs-lite-ui/lib/MobileContentWrapper');
jest.mock('mcs-lite-ui/lib/P');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <div>
        <Layout />
        <Form />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
