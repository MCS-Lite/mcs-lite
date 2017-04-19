/* eslint-disable */

// TODO: remove this file. https://github.com/storybooks/react-storybook/issues/687

var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env);

  const loaders = config.module.loaders.map(e => {
    if (e.test.toString() === '/\\.css?$/') {
      delete e.include;
    }

    return e;
  });

  config.module.loaders = loaders;

  return config;
};
