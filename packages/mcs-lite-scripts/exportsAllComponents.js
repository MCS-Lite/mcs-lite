/* eslint-disable */

var glob = require('glob');
var path = require('path');

console.log('"use strict";Object.defineProperty(exports,"__esModule",{value:!0});');

glob
  .sync(process.argv[2])
  .forEach(function (file) {
    var basename = path.basename(file, path.extname(file));
    // console.log('var ' + basename + '= exports["' + basename + '"] = require("./' + basename + '");');
    console.log(
      'var ' + basename + ' = require("./' + basename + '");' +
      'Object.defineProperty(exports, "'+ basename + '", {' +
      'enumerable: true, get: function get() { return _interopRequireDefault(' + basename + ').default;}});'
    );

  });

console.log('function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }')
