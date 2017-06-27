jest.mock('react-dom');

it('should render without error', async () => {
  try {
    await import('../index');
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});
