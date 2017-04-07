#!/bin/bash

set -e

# global linting
yarn run eslint &
yarn run stylelint &
wait

## Interface for each project
node_modules/.bin/lerna run lint --concurrency 1 &
node_modules/.bin/lerna run test --concurrency 1 &
wait

echo '💪  Start testing for building demo page';
node_modules/.bin/lerna run build-storybook --scope mcs-lite-ui &
node_modules/.bin/lerna run build --scope mcs-lite-mobile-web &
node_modules/.bin/lerna run build --scope mcs-lite-introduction &
wait
