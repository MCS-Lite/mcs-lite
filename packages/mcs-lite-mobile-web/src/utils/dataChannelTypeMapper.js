import R from 'ramda';

/**
 * Conver websocket response to mcs-lite-ui <DataChannelAdapter> props
 *
 * example: (String, 1) => STRING_CONTROL
 *
 * @author Michael Hsu
 */
const dataChannelTypeMapper = (name, type) => R.pipe(
  R.cond([
    [R.equals(1), R.always('_CONTROL')],
    [R.equals(2), R.always('_DISPLAY')],
  ]),
  R.concat(R.toUpper(name)),
)(type);

export default dataChannelTypeMapper;
