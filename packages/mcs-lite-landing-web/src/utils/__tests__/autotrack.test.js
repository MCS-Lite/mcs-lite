import autotrack from '../autotrack';

it('should return autotrack function', () => {
  expect(typeof autotrack).toBe('function');
});

it('should invoke without errors', async () => {
  const BREAKPOINTS = { sm: 1, md: 2, lg: 3 };

  try {
    await autotrack('id', BREAKPOINTS);
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});
