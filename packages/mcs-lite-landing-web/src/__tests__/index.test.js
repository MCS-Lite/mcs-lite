it('should render without error', async () => {
  const mockRender = jest.fn();
  jest.mock('react-snapshot', () => ({
    render: mockRender,
  }));

  try {
    await import('../index');
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(mockRender).toHaveBeenCalled();
});
