import {
  config,
  componentFromStream,
  createEventHandler,
} from '../recomposeHelper';

it('should return config object', () => {
  expect(config).toMatchSnapshot();
});

it('should return componentFromStream function', () => {
  expect(typeof componentFromStream).toBe('function');
  expect(typeof componentFromStream()).toBe('function');
});

it('should return createEventHandler function', () => {
  expect(typeof createEventHandler).toBe('function');
  expect(createEventHandler()).toMatchSnapshot();
});
