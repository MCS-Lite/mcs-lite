import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import { IconLoading, IconDone } from 'mcs-lite-icon';
import CopyButton from '../CopyButton';

jest.mock('copy-to-clipboard');
jest.mock('mcs-lite-icon');
jest.unmock('react-dom');

it('should handle onClick', (done) => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <CopyButton
        text={123}
      >
        Copy
      </CopyButton>
    </ThemeProvider>,
  );

  // After clicking
  wrapper.find('button').simulate('click');

  expect(wrapper.find(CopyButton).contains(<IconLoading />)).toBe(true);

  setTimeout(() => {
    expect(wrapper.find(CopyButton).contains(<IconDone />)).toBe(true);
    done();
  }, 600);
});
