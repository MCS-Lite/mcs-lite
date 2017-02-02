import emptyFunction from '../emptyFunction';

describe('emptyFunction', () => {
  it('should return emptyFunction function.', () => {
    expect(typeof emptyFunction).toBe('function');
  });

  it('should return undefined when invoked.', () => {
    expect(emptyFunction()).toBeUndefined();
  });
});
