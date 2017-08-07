import validators from '../validators';

it('should return validators', () => {
  expect(typeof validators).toBe('object');
});

it('should return correct boolean value of isNotEqual', () => {
  expect(validators.isNotEqual('', '')).toBe(false);
  expect(validators.isNotEqual('', '123')).toBe(false);
  expect(validators.isNotEqual('123', '')).toBe(false);
  expect(validators.isNotEqual('123', '123')).toBe(false);

  expect(validators.isNotEqual('123', '1234')).toBe(true);
});

it('should return correct boolean value of isLt8', () => {
  expect(validators.isLt8('')).toBe(false);
  expect(validators.isLt8('123')).toBe(true);
  expect(validators.isLt8('12345678')).toBe(false);
});
