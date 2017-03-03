import dataChanneltypeMapper from '../dataChanneltypeMapper';

it('should return dataChanneltypeMapper', () => {
  expect(dataChanneltypeMapper('switch', 1)).toBe('SWITCH_CONTROL');
  expect(dataChanneltypeMapper('switch', 2)).toBe('SWITCH_DISPLAY');
});
