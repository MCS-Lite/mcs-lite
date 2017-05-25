import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import mobileTheme from '../../../utils/mobileTheme';
import { Container } from '../styled-components';

jest.mock('mcs-lite-ui/lib/MobileContentWrapper');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <div>
        <Container />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
