// @flow
/* global window */

import bowser from 'bowser';
import R from 'ramda';

type GetOSBit = () => 32 | 64;
type OsNameMapper = Object => string;
type FileNameMapper = Object => string;
type GetOSName = () => string;
type GetFileName = () => string;

const MAC = 'MAC';
const WINDOWS = 'Windows';
const DEFAULT_OS = WINDOWS;

// Detect 64-bit or 32-bit Windows from User Agent or Javascript? ref: https://goo.gl/bcsmpo
export const getOSBit: GetOSBit = () => {
  if (
    window.navigator.userAgent.indexOf('WOW64') !== -1 ||
    window.navigator.userAgent.indexOf('Win64') !== -1
  ) {
    return 64;
  }

  return 32;
};

export const osNameMapper: OsNameMapper = R.cond([
  [R.propEq('mac', true), R.always(MAC)],
  [R.propEq('windows', true), R.always(WINDOWS)],
  // [R.propEq('linux', true), R.always('Linux')],
  [R.T, R.always(DEFAULT_OS)],
]);

export const fileNameMapper: FileNameMapper = R.cond([
  [R.propEq('mac', true), R.always('osx64.tar.gz')],
  [R.propEq('windows', true), R.always(`win${getOSBit()}.zip`)],
  // [R.propEq('linux', true), R.always('Linux')],
  [R.T, R.always('win64.zip')],
]);

export const getOSName: GetOSName = R.once(() => osNameMapper(bowser));
export const getFileName: GetFileName = R.once(() => fileNameMapper(bowser));
