import R from 'ramda';
import leftPad from 'left-pad';

export const timeLeftPad = value => leftPad(value, 2, 0);
export const getTimeRange = to => R.range(0, to).map(timeLeftPad);
export const HOUR_RANGE = getTimeRange(24);
export const MINUTE_RANGE = getTimeRange(60);
export const MONTH_RANGE = R.range(1, 13);
