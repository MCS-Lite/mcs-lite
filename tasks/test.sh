#!/bin/bash

set -e

# global linting
npm run eslint
npm run stylelint

## Interface for each project
node_modules/.bin/lerna run lint
node_modules/.bin/lerna run --concurrency 1 test

## Test for demo page building
node_modules/.bin/lerna run build-storybook --scope mcs-lite-ui
node_modules/.bin/lerna run build --scope mcs-lite-mobile-web
