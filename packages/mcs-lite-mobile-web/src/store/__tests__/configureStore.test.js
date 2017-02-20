import configureStore from '../configureStore';
import '../../utils/rxjs';

it('should return configureStore', () => {
  expect(typeof configureStore).toBe('function');
});

it('should contain an replaceReducer object for redix-observerable', () => {
  const store = configureStore();
  expect(typeof store.replaceReducer).toBe('function');
});
