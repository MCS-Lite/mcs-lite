import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import mobileTheme from '../../../utils/mobileTheme';
import { StyledSamll } from '../styled-components';

jest.mock('mcs-lite-ui/lib/MobileContentWrapper');
jest.mock('mcs-lite-ui/lib/Small');
jest.mock('mcs-lite-ui/lib/A');

it('should render components correctly', () => {
  const wrapper = mount(
    <ThemeProvider theme={mobileTheme}>
      <div>
        <StyledSamll />
      </div>
    </ThemeProvider>,
  );

  expect(toJson(wrapper.find('div'))).toMatchSnapshot();
});
