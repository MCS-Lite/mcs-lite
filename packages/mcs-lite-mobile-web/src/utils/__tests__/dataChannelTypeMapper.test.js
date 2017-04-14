// @flow
import dataChannelTypeMapper from '../dataChannelTypeMapper';

it('should return dataChannelTypeMapper', () => {
  expect(dataChannelTypeMapper('switch', 1)).toBe('SWITCH_CONTROL');
  expect(dataChannelTypeMapper('switch', 2)).toBe('SWITCH_DISPLAY');
});
