import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import CommonDialog from '../CommonDialog';

it('should render <CommonDialog />', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <CommonDialog show onHide={() => {}}>
        Content
      </CommonDialog>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find(CommonDialog))).toMatchSnapshot();
});

it('should render <CommonDialog /> with custom component prop', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <CommonDialog show onHide={() => {}} component="form">
        Content
      </CommonDialog>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find(CommonDialog))).toMatchSnapshot();
});
