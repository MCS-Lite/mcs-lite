#!/bin/bash

set -e

# global linting
echo '💪  Start global linting';
yarn run eslint
yarn run stylelint
yarn run flow

## Interface for each project
echo '💪  Start testing for each packages';
node_modules/.bin/lerna run test --concurrency 1

## Test for building demo page
echo '💪  Start testing for building demo page';
node_modules/.bin/lerna run build --scope mcs-lite-mobile-web

# Duplicate at Netlify CI
# node_modules/.bin/lerna run build-storybook --scope mcs-lite-ui

# Duplicate at 'npm run postinstall (prepublish)' stage
# node_modules/.bin/lerna run build --scope mcs-lite-introduction
