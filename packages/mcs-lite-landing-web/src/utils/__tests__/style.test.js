it('should invoke without errors', async () => {
  try {
    await import('../style');
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});
