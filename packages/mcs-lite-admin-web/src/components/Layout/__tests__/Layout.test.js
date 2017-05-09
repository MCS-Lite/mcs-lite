import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import mobileTheme from '../../../utils/mobileTheme';
import Layout from '../';

jest.mock('mcs-lite-ui');
jest.mock('react-motion-ui-pack', () => ({ children }) => children);

it('should renders <Layout.LayoutDefault> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <Layout.LayoutDefault>
        <div>Mock children</div>
      </Layout.LayoutDefault>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find(Layout.LayoutDefault))).toMatchSnapshot();
});

it('should renders <Layout.LayoutDialog> correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <Layout.LayoutDialog>
        <div>Mock children</div>
      </Layout.LayoutDialog>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find(Layout.LayoutDialog))).toMatchSnapshot();
});
