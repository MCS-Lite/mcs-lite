#!/bin/bash

set -e

# global linting
echo '💪  Start global linting';
npm run eslint
npm run stylelint

## Interface for each project
echo '💪  Start testing for each packages';
node_modules/.bin/lerna run lint --concurrency 1
node_modules/.bin/lerna run test --concurrency 1

echo '💪  Start testing for building demo page';
## Test for building demo page
node_modules/.bin/lerna run build-storybook --scope mcs-lite-ui
node_modules/.bin/lerna run build --scope mcs-lite-mobile-web
