#!/usr/bin/env node

process.env.NODE_ENV = 'production'; // for babel-preset-react-app
require('babel-register');
require('../src/extract-messages');
