import resolveImage from '../resolveImage';

it('should return resolveImage function', () => {
  expect(typeof resolveImage).toBe('function');
});

it('should return default path', () => {
  expect(resolveImage('default.png', undefined))
    .toBe('default.png');
});

it('should return images prefix', () => {
  expect(resolveImage('default.png', 'device/1234.png'))
    .toBe('/images/device/1234.png');
});
