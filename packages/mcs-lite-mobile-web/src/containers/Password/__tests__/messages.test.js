import messages from '../messages';

it('should return messages', () => {
  expect(messages).toMatchSnapshot();
});
