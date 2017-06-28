import * as Constants from '../index';

jest.mock('react-dom');

it('should return Constants correctly', () => {
  expect(Constants).toMatchSnapshot();
});

it('should render without error', async () => {
  try {
    await import('../index');
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});
