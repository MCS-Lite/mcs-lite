import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import DataPointAreaChart from 'mcs-lite-ui/lib/DataPointAreaChart';

import Chart from '../Chart';
import landingTheme from '../../../utils/landingTheme';

jest.mock('mcs-lite-ui/lib/DataPointAreaChart');

function waitFor(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

it('should renders <Chart> correctly', () => {
  const wrapper = shallow(<Chart />);

  const tree = toJson(wrapper);

  expect(tree).toMatchSnapshot();
});

it('should append data correctly', async () => {
  const wrapper = mount(
    <ThemeProvider theme={landingTheme}>
      <Chart />
    </ThemeProvider>,
  );

  await waitFor(2600);
  expect(typeof wrapper.find(DataPointAreaChart).props().data).toBe('object');

  try {
    wrapper.unmount();
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});
