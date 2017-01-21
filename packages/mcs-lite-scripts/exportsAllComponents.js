/* eslint-disable */

var glob = require('glob');
var path = require('path');

glob
  .sync(process.argv[2])
  .forEach(function (file) {
    var basename = path.basename(file);
    console.log('module.exports["' + basename + '"] = require("./' + basename + '");');
  });
