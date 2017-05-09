import * as Constants from '../index';

jest.mock('react-dom');

it('should return Constants correctly', () => {
  expect(Constants).toMatchSnapshot();
});
