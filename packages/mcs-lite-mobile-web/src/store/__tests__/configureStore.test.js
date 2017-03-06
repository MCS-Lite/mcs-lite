import configureStore from '../configureStore';
import '../../utils/rxjs';

it('should return configureStore', () => {
  expect(typeof configureStore).toBe('function');
});
