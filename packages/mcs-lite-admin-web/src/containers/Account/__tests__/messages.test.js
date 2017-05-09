it('should return messages', () => {
  expect(require('../messages').default).toMatchSnapshot();
});
