it('should return without error', () => {
  try {
    require('../i18n'); //eslint-disable-line
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});
