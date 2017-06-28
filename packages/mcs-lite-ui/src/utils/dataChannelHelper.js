// @flow
import R from 'ramda';

type DCTypeMapper = (string, 1 | 2) => string;
type ChartTypeMapper = string => 'step' | 'linear';

/**
 * Conver websocket response to mcs-lite-ui <DataChannelAdapter> props
 *
 * example: (String, 1) => STRING_CONTROL
 *
 * @author Michael Hsu
 */
export const dataChannelTypeMapper: DCTypeMapper = (name, type) =>
  R.pipe(
    R.cond([
      [R.equals(1), R.always('_CONTROL')],
      [R.equals(2), R.always('_DISPLAY')],
    ]),
    R.concat(R.toUpper(name)),
  )(type);

export const areaChartTypeMapper: ChartTypeMapper = R.ifElse(
  R.contains(R.__, ['Switch', 'GPIO']), // eslint-disable-line
  R.always('step'),
  R.always('linear'),
);
