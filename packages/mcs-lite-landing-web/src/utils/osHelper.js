/* global window */

import bowser from 'bowser';
import R from 'ramda';

const DEFAULT_OS = 'Windows';

// Detect 64-bit or 32-bit Windows from User Agent or Javascript? ref: https://goo.gl/bcsmpo

const getOSBit = () => {
  if (
    window.navigator.userAgent.indexOf('WOW64') !== -1 ||
    window.navigator.userAgent.indexOf('Win64') !== -1
  ) {
    return 64;
  }

  return 32;
};

const osNameMapper = R.cond([
  [R.propEq('mac', true), R.always('MAC')],
  [R.propEq('windows', true), R.always('Windows')],
  // [R.propEq('linux', true), R.always('Linux')],
  [R.T, R.always(DEFAULT_OS)],
]);

const fileNameMapper = R.cond([
  [R.propEq('mac', true), R.always('osx64.tar.gz')],
  [R.propEq('windows', true), R.always(`win${getOSBit().zip}`)],
  // [R.propEq('linux', true), R.always('Linux')],
  [R.T, R.always('win64.zip')],
]);

export const getOSName = () => osNameMapper(bowser);
export const getFileName = () => fileNameMapper(bowser);
