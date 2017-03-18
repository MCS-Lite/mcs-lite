import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import Picker from '../Picker';

jest.unmock('react-hammerjs');
jest.mock('react-hammerjs', () => () => <div />);

it('should return correct index and distance', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Picker
        name="picker1"
        value={0}
        onChange={() => {}}
        labels={['Apple', 'Pen', 'Apple pen', 'Pineapple']}
      />
    </ThemeProvider>,
  );
  const {
    clampIndex, calcDistanceByIndex, calcIndexByDistance,
  } = wrapper.find(Picker).getNode();

  expect(clampIndex(-2)).toBe(0);
  expect(clampIndex(-1)).toBe(0);
  expect(clampIndex(0)).toBe(0);
  expect(clampIndex(1)).toBe(1);
  expect(clampIndex(2)).toBe(2);
  expect(clampIndex(3)).toBe(3);
  expect(clampIndex(4)).toBe(3);
  expect(clampIndex(5)).toBe(3);

  expect(calcDistanceByIndex(-1)).toBe(-0);
  expect(calcDistanceByIndex(0)).toBe(-0);
  expect(calcDistanceByIndex(1)).toBe(-40);
  expect(calcDistanceByIndex(2)).toBe(-80);
  expect(calcDistanceByIndex(3)).toBe(-120);
  expect(calcDistanceByIndex(4)).toBe(-120);

  expect(calcIndexByDistance(-20)).toBe(0);
  expect(calcIndexByDistance(60)).toBe(0);
  expect(calcIndexByDistance(61)).toBe(1);  // 60~100
  expect(calcIndexByDistance(100)).toBe(1);
  expect(calcIndexByDistance(101)).toBe(2); // 101~140
  expect(calcIndexByDistance(140)).toBe(2);
  expect(calcIndexByDistance(141)).toBe(3); // 141~180
  expect(calcIndexByDistance(180)).toBe(3);
  expect(calcIndexByDistance(181)).toBe(3); // 180~
  expect(calcIndexByDistance(220)).toBe(3);
  expect(calcIndexByDistance(300)).toBe(3);
});
