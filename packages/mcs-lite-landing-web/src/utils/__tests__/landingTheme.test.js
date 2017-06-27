import landingTheme, { BREAKPOINTS } from '../landingTheme';

it('should return BREAKPOINTS', () => {
  expect(BREAKPOINTS).toMatchSnapshot();
});

it('should return landingTheme', () => {
  expect(landingTheme).toMatchSnapshot();
});
