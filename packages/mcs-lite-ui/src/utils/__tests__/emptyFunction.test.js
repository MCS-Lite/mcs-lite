import emptyFunction from '../emptyFunction';

describe('emptyFunction', () => {
  it('should return emptyFunction function.', () => {
    expect(emptyFunction).toBeInstanceOf(Function);
  });

  it('should return undefined when invoked.', () => {
    expect(emptyFunction()).toBeUndefined();
  });
});
