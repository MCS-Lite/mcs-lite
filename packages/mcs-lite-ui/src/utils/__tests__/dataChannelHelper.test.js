// @flow
import {
  dataChannelTypeMapper,
  areaChartTypeMapper,
} from '../dataChannelHelper';

it('should return dataChannelTypeMapper', () => {
  expect(dataChannelTypeMapper('switch', 1)).toBe('SWITCH_CONTROL');
  expect(dataChannelTypeMapper('switch', 2)).toBe('SWITCH_DISPLAY');
});

it('should return areaChartTypeMapper', () => {
  expect(areaChartTypeMapper('Switch')).toBe('step');
  expect(areaChartTypeMapper('GPIO')).toBe('step');
  expect(areaChartTypeMapper('other')).toBe('linear');
});
