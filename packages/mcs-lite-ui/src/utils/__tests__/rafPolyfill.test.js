it('should render without error', () => {
  try {
    require('../rafPolyfill'); // eslint-disable-line
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});
